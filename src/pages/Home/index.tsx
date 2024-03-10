import { useState } from "react";
import Slider from "../../components/Slider";
import { Maps } from "..";

function Home({ name, phoneNumber }: { name: string; phoneNumber: string }) {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className="flex items-center justify-center flex-col gap-[43px] mt-10">
      <img src="../../../src/assets/off.svg" alt="off" />
      <img src="../../../src/assets/weekend.svg" alt="off" />
      <img src="../../../src/assets/driver.svg" alt="off" />
    </div>,
    <div className="flex flex-col items-center justify-center w-full h-screen gap-20 -mt-28">
      <p className="font-bold text-[#A5A9B6] text-lg">
        !هیچ سفری برای شما ثبت نشده است
      </p>
      <button
        className="font-bold bg-white border w-[156px] h-[47px] rounded-2xl text-lg"
        onClick={() => goToSlide(3)}
      >
        شروع اولین سفر
      </button>
    </div>,
    <div className="h-screen">
      <Maps goToSlide={goToSlide} />
    </div>,
    <div className="flex flex-col items-center justify-center w-full bg-red-300 gap-60">
      <p className="font-bold text-[#A5A9B6] text-3xl">درگاه پرداخت الکی</p>
      <button
        className="font-bold bg-[#8CE9B4] w-[156px] h-[47px] rounded-2xl text-xl"
        onClick={() => goToSlide(3)}
      >
        بازگشت
      </button>
    </div>,
    <div className="bg-white w-[80%] rounded-[30px] h-2/3 mx-auto flex items-end flex-col py-[54px] px-6 mt-10">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm text-[#2B2B2B]">{phoneNumber}</p>
      <div className="mt-10 flex items-center justify-center hover:cursor-pointer">
        <img src="../../../src/assets/ar.svg" alt="arrow" />
        <p className="pr-3 pl-[100px]">ویرایش پروفایل</p>
        <div className="rounded-full bg-primary bg-opacity-20 p-2">
          <img src="../../../src/assets/edit-3.svg" alt="edit" />
        </div>
      </div>
      <div className="h-[2px] w-full mt-[18px] bg-[#DCDCDC]"></div>

      <div className="mt-10 flex items-center justify-center hover:cursor-pointer">
        <img src="../../../src/assets/ar.svg" alt="arrow" />
        <p className="pr-3 pl-[60px]">آدرس های ذخیره شده</p>
        <div className="rounded-full bg-primary bg-opacity-20 p-2">
          <img src="../../../src/assets/map-pin.svg" alt="edit" />
        </div>
      </div>
      <div className="h-[2px] w-full mt-[18px] bg-[#DCDCDC]"></div>
    </div>,
  ];

  return (
    <div className="w-screen h-screen bg-[#f5f6f9] relative">
      {currentSlide !== 2 && (
        <div className="flex items-center justify-center pt-[46px]">
          <img
            src="../../../src/assets/logo-orange.svg"
            className="w-[85px] h-[38px]"
            alt="logo"
          />
        </div>
      )}
      <Slider
        slides={slides}
        currentSlide={currentSlide}
        goToNextSlide={goToNextSlide}
        goToSlide={goToSlide}
        goToPrevSlide={goToPrevSlide}
        map={true}
      />
    </div>
  );
}

export default Home;
