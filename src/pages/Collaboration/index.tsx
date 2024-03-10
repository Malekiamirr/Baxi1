import { useState } from "react";
import Slider from "../../components/Slider";
import { Button, Modal } from "../../components";

function Collaboration({
  handleNext,
  setColabrate,
  gender,
}: {
  handleNext: () => void;
  gender: string;
  setColabrate: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorModal, setErrorModal] = useState(false);
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

  const slides = [
    <div className="h-screen mt-[129px]">
      <h2 className="text-6xl font-bold ml-14">بکسی</h2>
      <div className="mt-[250px] flex items-center justify-center">
        <img src="./src/assets/baxi.svg" alt="baxi" />
      </div>
      <div className="flex items-center justify-center">
        <Button
          text="بزن بریم"
          type="secondary"
          onClick={() => {
            setColabrate("baxi");
            handleNext();
          }}
        />
      </div>
    </div>,
    <div className="h-screen mt-[129px]">
      <h2 className="text-6xl font-bold ml-14">بکسی‌بار</h2>
      <div className="mt-[200px] flex items-center justify-center">
        <img src="./src/assets/baxi-bar.svg" alt="baxi" />
      </div>
      <div className="flex items-center justify-center -mt-16">
        <Button
          text="بزن بریم"
          type="secondary"
          onClick={() => {
            setColabrate("baxi-bar");
            handleNext();
          }}
        />
      </div>
    </div>,
    <div className="h-screen mt-[129px]">
      <h2 className="text-6xl font-bold ml-14">بکسی‌بانوان</h2>
      <p className="text-xs mt-5 ml-10">
        فقط خانم ها می‌توانند در این بخش همکاری داشته باشند*
      </p>
      <div className="mt-[215px] flex items-center justify-center">
        <img src="./src/assets/baxi-female.svg" alt="baxi" />
      </div>
      <div className="flex items-center justify-center">
        <Button
          text="بزن بریم"
          type="secondary"
          onClick={() => {
            if (gender === "female") {
              setColabrate("baxi-female");
              handleNext();
            } else {
              setErrorModal(true);
            }
          }}
        />
      </div>
    </div>,
    <div className="h-screen mt-[129px]">
      <h2 className="text-6xl font-bold ml-14">بکسی‌باکس</h2>
      <div className="mt-[240px] flex items-center justify-center">
        <img src="./src/assets/baxi-motor.svg" alt="baxi" />
      </div>
      <div className="flex items-center justify-center">
        <Button
          text="بزن بریم"
          type="secondary"
          onClick={() => {
            setColabrate("baxi-bax");
            handleNext();
          }}
        />
      </div>
    </div>,
  ];

  return (
    <div className="bg-[url('./src/assets/Rectangle.svg')] bg-no-repeat bg-contain w-screen h-screen relative">
      <div className="flex items-center justify-center pt-[59px]">
        <img
          src="./src/assets/logo-black.svg"
          alt="logo"
          className="w-12 h-[21px]"
        />
      </div>
      <p className="font-bold mt-8 text-center">
        در کدام بخش تمایل به همکاری دارید؟
      </p>
      <div>
        <Slider
          slides={slides}
          currentSlide={currentSlide}
          goToNextSlide={goToNextSlide}
          goToSlide={goToSlide}
          goToPrevSlide={goToPrevSlide}
          custom={true}
        />
      </div>
      <Modal isOpen={errorModal} setIsOpen={setErrorModal} isError>
        <div className="mb-[29px] flex items-center justify-center flex-col">
          <img
            src="../../../src/assets/errorSign.svg"
            alt="error-sign"
            className="w-[55px] h-[55px]"
          />
          <img
            src="../../../src/assets/Error.svg"
            alt="error"
            className="mt-4 mb-5"
          />
          <p className="text-center w-[155px] text-xs">
            فقط خانم ها می‌توانند در این بخش همکاری داشته باشند
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Collaboration;
