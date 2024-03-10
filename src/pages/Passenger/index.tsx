import { useState } from "react";
import { Button, Modal } from "../../components";

function Passenger({
  handleNext,
  gender,
  setGender,
  nameInput,
  setNameInput,
}: {
  handleNext: () => void;
  gender: string;
  nameInput: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  setNameInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [birthDate, setBirthDate] = useState("");
  const [ssn, setSsn] = useState<string>();
  const [isGenderModalOpen, setIsGenderModalOpen] = useState(false);
  const [isBirthDateModalOpen, setIsBirthDateModalOpen] = useState(false);
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
  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      // Proceed to the next step
      handleNext();
    }
  };
  return (
    <div className="w-screen h-screen relative px-10">
      <div className="flex items-center justify-center pt-[59px]">
        <img
          src="./src/assets/logo-orange.svg"
          alt="logo"
          className="w-12 h-[21px]"
        />
      </div>
      <div key={1} className="w-full h-screen  mt-[84px]">
        <h2 className="font-bold text-2xl text-end">مسافر ما باش</h2>

        <form
          onSubmit={(e) => e.preventDefault()}
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
      </div>
      <Modal isOpen={isGenderModalOpen} setIsOpen={setIsGenderModalOpen}>
        <div className="flex flex-col w-full gap-8">
          <div className="flex justify-between items-center w-full gap-8">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={gender === "male"}
                className="sr-only peer"
                onChange={(e) => {
                  console.log(e.target.checked);

                  e.target.checked === true && setGender("male");
                }}
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

export default Passenger;
