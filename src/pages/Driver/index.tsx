/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRef, useState } from "react";
import Slider from "../../components/Slider";
import { Button, Modal } from "../../components";

function Driver({
  handleNext,
  gender,
  setGender,
}: {
  handleNext: () => void;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [nameInput, setNameInput] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [ssn, setSsn] = useState<string>();
  const [shaba, setShaba] = useState("");
  const [shabaError, setShabaError] = useState("");
  const [isDisabilityModalOpen, setIsDisabilityModalOpen] = useState(false);
  const [isGenderModalOpen, setIsGenderModalOpen] = useState(false);
  const [isBirthDateModalOpen, setIsBirthDateModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    ssn: "",
    gender: "",
    birthDate: "",
  });

  const validateForm = () => {
    let isValid = true;
    const errorsCopy = { ...errors };

    // Validate name
    if (!nameInput.trim()) {
      isValid = false;
      errorsCopy.name = "این فیلد نمی‌تواند خالی باشد";
    } else {
      errorsCopy.name = "";
    }

    // Validate ssn
    if (!ssn?.match(/^\d{10}$/)) {
      isValid = false;
      errorsCopy.ssn = "کد ملی صحیح نیست";
    } else {
      errorsCopy.ssn = "";
    }

    // Validate gender
    if (!gender) {
      isValid = false;
      errorsCopy.gender = "لطفا جنسیت خود را انتخاب کنید";
    } else {
      errorsCopy.gender = "";
    }

    // Validate birthDate
    if (!birthDate) {
      isValid = false;
      errorsCopy.birthDate = "لطفا تاریخ تولد خود را انتخاب کنید";
    } else {
      errorsCopy.birthDate = "";
    }

    setErrors(errorsCopy);
    return isValid;
  };

  const hiddenFileInput = useRef(null);

  // @ts-ignore
  const handleFileClick = (event) => {
    event.preventDefault();
    // @ts-ignore
    hiddenFileInput!.current!.click();
  };

  const handleFileChange = () => {
    setFileUploaded(true);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  // const validateForm = () => {
  //   let isValid = true;
  //   if (!nameInput.trim()) {
  //     // Check if nameInput is empty
  //     isValid = false;
  //     setErrors({ ...errors, name: ".این فیلد نمی‌تواند خالی باشد" });
  //     // Handle validation error
  //   }
  //   if (!ssn?.match(/^\d{10}$/)) {
  //     // Check if ssn has exactly 10 digits
  //     isValid = false;
  //     setErrors({ ...errors, ssn: ".کد ملی صحیح نیست" });
  //   }
  //   if (!gender.trim()) {
  //     isValid = false;
  //     setErrors({ ...errors, gender: "لطفا جنسیت خود را انتخاب کنید" });
  //   }
  //   if (!birthDate?.match(/^\d{4}\/\d{2}\/\d{2}$/)) {
  //     isValid = false;
  //     setErrors({ ...errors, birthDate: "لطفا تاریخ تولد خود را انتخاب کنید" });
  //   }
  //   return isValid;
  // };

  const handleShabaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setShaba(value);

    // Validate shaba input
    if (!value.trim()) {
      setShabaError("شماره شبا نمی‌تواند خالی باشد");
    } else if (
      !value
        // @ts-ignore
        .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
        .match(/^[0-9\u0660-\u0669]{24}$/)
    ) {
      setShabaError("شماره شبا صحیح نیست");
    } else {
      setShabaError("");
    }
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      // Proceed to the next step
      goToNextSlide();
    }
  };

  const slides = [
    <div key={1} className="w-full h-screen relative">
      <h2 className="font-bold text-2xl text-end">راننده‌شو</h2>

      <form
        dir="rtl"
        className="mt-[54px] flex flex-col items-center justify-center gap-8"
      >
        <div className="border-2 border-secondary px-4 py-3 flex items-center rounded-3xl w-full relative">
          <img src="./src/assets/icons/smile.svg" alt="smile" />
          <div className="w-[2px] h-4 bg-secondary mr-2 ml-4"></div>
          <input
            type="text"
            placeholder="نام و نام‌خانوادگی"
            className="h-8 outline-none placeholder:text-[#C0C2C6]"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          {errors.name && (
            <p className="text-red-500 absolute top-[60px] text-sm right-2">
              {errors.name}
            </p>
          )}
        </div>

        <div className="border-2 border-secondary px-4 py-3 flex items-center rounded-3xl w-full relative">
          <img src="./src/assets/icons/user-check.svg" alt="smile" />
          <div className="w-[2px] h-4 bg-secondary mr-2 ml-4"></div>
          <input
            type="number"
            placeholder="کد ملی"
            className="h-8 outline-none placeholder:text-[#C0C2C6]"
            value={ssn}
            onChange={(e) => setSsn(e.target.value)}
          />
          {errors.ssn && (
            <p className="text-red-500 absolute top-[60px] text-sm right-2">
              {errors.ssn}
            </p>
          )}
        </div>

        <div
          onClick={() => {
            setIsGenderModalOpen(true);
          }}
          className="border-2 border-secondary text-[#C0C2C6] px-4 py-3 flex items-center justify-between rounded-3xl w-full relative h-[60px] hover:cursor-pointer"
        >
          <span>جنسیت</span>
          <span className="text-xs">
            {gender === "male"
              ? "مرد"
              : gender === "female"
              ? "زن"
              : "جنسیت را انتخاب کنید"}
          </span>
          {errors.gender && (
            <p className="text-red-500 absolute top-[60px] text-sm right-2">
              {errors.gender}
            </p>
          )}
        </div>

        <div
          onClick={() => setIsBirthDateModalOpen(true)}
          className="border-2 border-secondary text-[#C0C2C6] px-4 py-3 flex items-center justify-between rounded-3xl w-full relative h-[60px] hover:cursor-pointer"
        >
          <span>تاریخ تولد</span>
          <span className="text-xs">
            {birthDate ? birthDate : "تاریخ تولد را انتخاب کنید"}
          </span>
          {errors.birthDate && (
            <p className="text-red-500 absolute top-[60px] text-sm right-2">
              {errors.birthDate}
            </p>
          )}
        </div>
      </form>
      <div className="flex items-center justify-center mt-[77px]">
        <Button type="primary" text="مرحله بعد" onClick={handleSubmit} />
      </div>
    </div>,
    <div key={2} className="w-full h-screen">
      <div className="flex items-center justify-center -mt-4">
        <img
          src="../../../src/assets/Order-ride-cuate 1.svg"
          alt="image"
          className="w-[208px] h-[208px]"
        />
      </div>
      <p className="mt-[57px] text-[13px] text-center text-[#969696]">
        تصویر <span className="text-primary">گواهینامه</span> خود را در این مکان
        بارگزاری کنید
      </p>
      <form className="relative border-2 border-dashed pt-[73px] gap-6 pb-[35px] mt-4 flex flex-col items-center justify-center w-[241px] h-[175px] rounded-2xl mx-auto">
        <img
          src="./src/assets/Vector.svg"
          alt="vector"
          className="absolute -top-5 -left-4"
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          ref={hiddenFileInput}
        />
        <p
          className={`text-center ${
            fileUploaded ? "text-primary" : "text-[#E2E2E2]"
          } font-bold text-xs`}
        >
          {fileUploaded
            ? "تصویر با موفقیت بارگذاری شد"
            : "تصویری بارگذاری نشده است"}
        </p>
        <button
          onClick={handleFileClick}
          className="border border-primary rounded-full py-2 px-4 text-xs text-primary  "
        >
          بارگزاری تصویر
        </button>
      </form>
      <div className="flex items-center justify-center mt-[40px]">
        <Button
          type="primary"
          text="مرحله بعد"
          onClick={() => {
            if (fileUploaded) goToNextSlide();
          }}
        />
      </div>
    </div>,
    <div key={3} className="w-full h-screen">
      <p dir="rtl" className="text-xs text-[#C0C2C6] text-right">
        با فعال کردن گزینه متناسب با شرایطتان میتوانیم تجربه بهتری از سفر
        برایتان ایجاد کنیم.
      </p>

      <div
        onClick={() => setIsDisabilityModalOpen(true)}
        className="border-2 border-secondary text-[#C0C2C6] px-4 py-3 mt-[18px] flex items-center justify-between rounded-3xl w-full h-[60px] hover:cursor-pointer"
      >
        <span className="text-xs">ناتوانی جسمی خود را انتخاب کنید</span>
        <span>ناتوانی</span>
      </div>
      <div className="w-full h-[2px] bg-[#CACACA] my-[38px]"></div>
      <div className="flex ml-auto items-center justify-center flex-col w-fit">
        <h2 className="text-xl font-bold text-[#7D7D7D]">اطلاعات حساب</h2>
        <span className="h-[5px] w-full bg-primary rounded-3xl"></span>
      </div>
      <form dir="rtl" className="mt-10">
        <div className="border-2 border-secondary px-4 py-3 flex items-center rounded-3xl w-full">
          <img src="./src/assets/icons/credit-card.svg" alt="credit-card" />
          <div className="w-[2px] h-4 bg-secondary mr-2 ml-4"></div>
          <input
            type="text"
            placeholder="شماره شبا"
            className="h-8 outline-none placeholder:text-[#C0C2C6]"
            value={shaba}
            onChange={handleShabaChange}
          />
        </div>
      </form>
      {shabaError && (
        <p className="text-red-500 absolute w-full mt-4 mr-20 text-right">
          {shabaError}
        </p>
      )}
      <div className="flex items-center justify-center mt-[175px]">
        <Button
          type="primary"
          text="مرحله بعد"
          onClick={() => {
            if (!shabaError) handleNext();
          }}
        />
      </div>
    </div>,
  ];

  return (
    <div className="w-screen h-screen px-10 relative">
      <div className="flex items-center justify-center pt-[59px]">
        <img
          src="./src/assets/logo-orange.svg"
          alt="logo"
          className="w-12 h-[21px]"
        />
      </div>
      <div className="w-full h-full mt-[84px]">
        <Slider
          slides={slides}
          currentSlide={currentSlide}
          goToNextSlide={goToNextSlide}
          goToSlide={goToSlide}
          goToPrevSlide={goToPrevSlide}
          complete={true}
        />
      </div>
      <Modal
        isOpen={isDisabilityModalOpen}
        setIsOpen={setIsDisabilityModalOpen}
      >
        <div className="flex flex-col w-full gap-8">
          <div className="flex justify-between items-center w-full gap-8">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary"></div>
            </label>
            <p>از ویلچر استفاده میکنم</p>
          </div>
          <div className="flex justify-between items-center w-full gap-8">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary"></div>
            </label>
            <p>ناشنوا یا کم شنوا هستم</p>
          </div>
        </div>
      </Modal>
      <Modal isOpen={isGenderModalOpen} setIsOpen={setIsGenderModalOpen}>
        <div className="flex flex-col w-full gap-8">
          <div className="flex justify-between items-center w-full gap-8">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={gender === "male"}
                className="sr-only peer"
                onChange={(e) => e.target.checked === true && setGender("male")}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary"></div>
            </label>
            <p>مرد</p>
          </div>
          <div className="flex justify-between items-center w-full gap-8">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={gender === "female"}
                className="sr-only peer"
                onChange={(e) =>
                  e.target.checked === true && setGender("female")
                }
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary"></div>
            </label>
            <p>زن</p>
          </div>
        </div>
      </Modal>
      <input type="text" />
      <Modal isOpen={isBirthDateModalOpen} setIsOpen={setIsBirthDateModalOpen}>
        <form
          dir="rtl"
          className="border-2 border-secondary px-4 py-3 flex items-center rounded-3xl w-full"
        >
          <img src="./src/assets/icons/smile.svg" alt="smile" />
          <div className="w-[2px] h-4 bg-secondary mr-2 ml-4"></div>
          <input
            type="text"
            placeholder="مثال: ۱۳۸۱/۱۲/۲۵"
            className="h-8 outline-none placeholder:text-[#C0C2C6]"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </form>
      </Modal>
    </div>
  );
}

export default Driver;
