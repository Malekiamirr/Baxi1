/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef, useState } from "react";
import { Button, Modal } from "../../components";

function CarInfo({
  colabrate,
  handleNext,
}: {
  colabrate: string;
  handleNext: () => void;
}) {
  const [carInfo, setCarInfo] = useState("");
  const [carCapacity, setCarCapacity] = useState("");
  const [carColor, setCarColor] = useState("");
  const [carFuel, setCarFuel] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [pelakOpenModal, setPelakOpenModal] = useState(false);
  const [iran, setIran] = useState("");
  const [pelak, setPelak] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [carCapacity, carColor, carInfo, carFuel, iran, pelak]);

  const hiddenFileInput = useRef(null);

  // @ts-ignore
  const handleClick = (event) => {
    event.preventDefault();
    // @ts-ignore
    hiddenFileInput!.current!.click();
  };

  return (
    <div className="w-screen h-screen relative">
      <div className="flex items-center justify-center pt-[59px]">
        <img
          src="./src/assets/logo-orange.svg"
          alt="logo"
          className="w-12 h-[21px]"
        />
      </div>
      <div className="flex items-center justify-between">
        <img
          src={`../../../src/assets/${
            colabrate === "baxi-bar"
              ? "truck"
              : colabrate === "baxi-bax"
              ? "motorcycle"
              : "limosin"
          }.svg`}
          alt="car"
          className={`${
            colabrate === "baxi-bar"
              ? "-ml-9"
              : colabrate === "baxi-bax"
              ? "-ml-10"
              : "-ml-24"
          } mt-7 -z-10`}
        />
        <div className="flex ml-auto items-center justify-center flex-col w-fit px-10 mt-[30px]">
          <h2 className="text-xl font-bold">
            اطلاعات{" "}
            {colabrate === "baxi" || colabrate === "baxi-female"
              ? "اتومبیل"
              : colabrate === "baxi-bar"
              ? "ماشین‌باری"
              : "موتورسیکلت"}
          </h2>
          <span className="h-[5px] w-full bg-primary rounded-3xl"></span>
        </div>
      </div>
      <form
        action=""
        dir="rtl"
        className="px-[34px] mt-14 flex flex-col items-center justify-center gap-3 relative"
      >
        <div className="border-2 border-secondary px-4 py-3 flex items-center rounded-3xl w-[322px]">
          <img src="./src/assets/icons/car.svg" alt="car" />
          <div className="w-[2px] h-4 bg-secondary mr-2 ml-4"></div>
          <input
            type="text"
            placeholder="مدل ماشین، نام و سال تولید"
            className="h-8 outline-none placeholder:text-[#C0C2C6]"
            value={carInfo}
            onChange={(e) => setCarInfo(e.target.value)}
          />
        </div>
        <div className="flex gap-2 justify-center items-center">
          <div
            onClick={() => {
              setPelakOpenModal(true);
            }}
            className="flex w-[172px] h-[53px] rounded-2xl overflow-hidden border-2  border-secondary hover:cursor-pointer"
          >
            <div className="w-[50px] text-[#B9BABE] flex flex-col justify-center items-center">
              <p className="text-xs text-[]">ایران</p>
              <span>{iran ? iran : "۱۱"}</span>
            </div>
            <div className="w-full h-full border-r border-l border-secondary flex items-center justify-center text-[#B9BABE] text-2xl font-bold">
              {pelak ? pelak : "۳۶۵ب۱۲"}
            </div>
            <div className="w-[45px] bg-[#5975AE] flex flex-col items-end pl-2 justify-around">
              <img
                src="./src/assets/iran.svg"
                alt="iran"
                className="w-[13px] h-[15px]"
              />
              <span className="text-[10px] text-white leading-[16px] text-left">
                I.R <br /> IRAN
              </span>
            </div>
          </div>
          <div className="flex w-[140px] h-[53px] rounded-2xl overflow-hidden border-2  border-secondary hover:cursor-pointer">
            <input
              type="number"
              value={carCapacity}
              onChange={(e) => setCarCapacity(e.target.value)}
              placeholder={`${
                colabrate === "baxi-bax" ? "ظرفیت موتور" : "ظرفیت ماشین"
              }`}
              className="outline-none px-3 placeholder:text-[#C0C2C6]"
            />
          </div>
        </div>
        {colabrate === "baxi-bax" ? undefined : (
          <div className="flex justify-center items-center gap-2">
            <div className="flex w-[137px] h-[53px] rounded-2xl overflow-hidden border-2 border-secondary hover:cursor-pointer">
              <input
                value={carColor}
                onChange={(e) => setCarColor(e.target.value)}
                type="text"
                placeholder="رنگ ماشین"
                className="outline-none px-3 placeholder:text-[#C0C2C6]"
              />
            </div>
            <div
              onClick={() => {
                setOpenModal(true);
              }}
              className="border-2 border-secondary text-[#C0C2C6] px-4 py-3 flex items-center justify-between rounded-2xl w-[175px] h-[53px] hover:cursor-pointer"
            >
              <span>نوع سوخت</span>
              <span className="text-xs font-bold">
                {carFuel
                  ? carFuel === "gas"
                    ? "گازسوز"
                    : carFuel === "petrol"
                    ? "بنزین سوز"
                    : "دوگانه سوز"
                  : "انتخاب کنید"}
              </span>
            </div>
          </div>
        )}
        {error && (
          <p className="text-red-500 text-sm absolute -bottom-8 left-1/2 -translate-x-[50%]">
            پر کردن همه فیلد ها اجباری است!
          </p>
        )}
      </form>

      <p className="mt-[57px] text-sm text-center text-[#969696]">
        تصویر{" "}
        <span className="text-primary">
          {colabrate === "baxi-bax" ? "کارت موتور" : "کارت ماشین"}
        </span>{" "}
        .خود را در این مکان بارگزاری کنید
      </p>

      <form className="border-2 border-dashed border-[#BCBFDC] pt-[73px] gap-6 pb-[35px] mt-3 flex flex-col items-center justify-center w-[281px] h-[175px] rounded-2xl mx-auto relative">
        <img
          src="./src/assets/Vector.svg"
          alt="vector"
          className="absolute -top-5 -left-4"
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={() => setFileUploaded(true)}
          ref={hiddenFileInput}
        />
        <p
          className={`text-center ${
            fileUploaded ? "text-primary" : "text-[#E2E2E2]"
          } font-bold text-xs`}
        >
          {fileUploaded
            ? "تصویر با موفقیت بارگزاری شد"
            : " تصویری بارگزاری نشده است"}
        </p>
        <button
          onClick={handleClick}
          className="border border-primary rounded-full py-2 px-4 text-xs text-primary  "
        >
          بارگزاری تصویر
        </button>
      </form>
      <div className="flex items-center justify-center mt-[25px] relative">
        <Button
          type="primary"
          text="مرحله بعد"
          onClick={() => {
            if (
              !carCapacity ||
              !carColor ||
              !carInfo ||
              !carFuel ||
              !iran ||
              !pelak
            ) {
              setError(true);
            } else {
              handleNext();
            }
          }}
        />
        <img
          src={`../../../src/assets/${
            colabrate === "baxi-bar"
              ? "truck"
              : colabrate === "baxi-bax"
              ? "motorcycle"
              : "limosin"
          }.svg`}
          alt="car"
          className={`${
            colabrate === "baxi-bar"
              ? "-right-16  mt-16"
              : colabrate === "baxi-bax"
              ? "mt-32 -right-4"
              : "mt-32 -right-16"
          } -z-10 absolute `}
        />
      </div>
      <Modal isOpen={openModal} setIsOpen={setOpenModal}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-2 -mr-8">
            <p className="ms-2 text-sm font-bold text-[#707070]">گازسوز</p>
            <input
              id="default-radio-1"
              type="radio"
              value="gas"
              checked={carFuel === "gas"}
              onChange={(e) => setCarFuel(e.target.value)}
              name="default-radio"
              className="w-4 h-4 accent-primary"
            />
          </div>
          <div className="flex flex-row-reverse items-center justify-center gap-2 -mr-[13.5px]">
            <input
              id="default-radio-2"
              type="radio"
              onChange={(e) => setCarFuel(e.target.value)}
              value="petrol"
              checked={carFuel === "petrol"}
              name="default-radio"
              className="w-4 h-4 text-primary accent-primary"
            />
            <p className="ms-2 text-sm font-bold text-[#707070]">بنزین‌ سوز</p>
          </div>
          <div className="flex flex-row-reverse items-center justify-center gap-2 -mr-[6px]">
            <input
              id="default-radio-3"
              type="radio"
              onChange={(e) => setCarFuel(e.target.value)}
              value="hybrid"
              checked={carFuel === "hybrid"}
              name="default-radio"
              className="w-4 h-4 text-primary bg-[#D9D9D9] accent-primary"
            />
            <p className="ms-2 text-sm font-bold text-[#707070]">دوگانه سوز</p>
          </div>
        </div>
      </Modal>
      <Modal isOpen={pelakOpenModal} setIsOpen={setPelakOpenModal}>
        <div
          dir="rtl"
          className="flex items-center justify-center flex-col gap-4"
        >
          <h2 className="font-bold">پلاک را وارد کنید</h2>
          <div className="flex w-[172px] h-[53px] rounded-2xl overflow-hidden border-2  border-secondary hover:cursor-pointer">
            <div className="w-[50px] text-[#B9BABE] flex flex-col justify-center items-center">
              <p className="text-xs text-[]">ایران</p>
              <input
                type="text"
                placeholder="۱۱"
                className="w-5 text-center outline-none placeholder:text-gray-200"
                value={iran}
                maxLength={2}
                onChange={(e) => setIran(e.target.value)}
              />
            </div>
            <input
              placeholder="۳۶۵ب۱۲"
              maxLength={6}
              value={pelak}
              onChange={(e) => setPelak(e.target.value)}
              className="w-full h-full border-r border-l text-center outline-none placeholder:text-gray-200 border-secondary flex items-center justify-center text-[#B9BABE] text-2xl font-bold"
            />

            <div className="w-[45px] bg-[#5975AE] flex flex-col items-end pl-2 justify-around">
              <img
                src="./src/assets/iran.svg"
                alt="iran"
                className="w-[13px] h-[15px]"
              />
              <span className="text-[10px] text-white leading-[16px] text-left">
                I.R <br /> IRAN
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CarInfo;
