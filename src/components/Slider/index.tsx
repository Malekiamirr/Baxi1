import { ReactNode } from "react";

const Swiper = ({
  slides,
  currentSlide,
  goToNextSlide,
  goToSlide,
  goToPrevSlide,
  complete,
  custom,
}: {
  slides: ReactNode[];
  currentSlide: number;
  goToNextSlide: () => void;
  goToSlide: (index: number) => void;
  goToPrevSlide: () => void;
  complete?: boolean;
  custom?: boolean;
}) => {
  return (
    <div className="overflow-hidden relative group">
      <div className="overflow-hidden">
        <ul
          className="transition-transform duration-500 ease-in-out flex"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index: number) => (
            <li key={index} className="w-full flex-shrink-0 h-full">
              {slide}
            </li>
          ))}
        </ul>
      </div>
      {/* Dots */}
      {custom ? (
        <div className="flex absolute left-[50%] top-[650px] -translate-x-[50%] items-center">
          {slides.map((_: ReactNode, index: number) => (
            <button
              key={index}
              className={`rounded-full mx-[6px] focus:outline-none ${
                index === currentSlide
                  ? "bg-primary h-3 w-8"
                  : "bg-[#DBDBDB] h-3 w-8"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      ) : (
        <div className="flex absolute left-[50%] top-[600px] -translate-x-[50%] items-center">
          {slides.map((_: ReactNode, index: number) => (
            <button
              key={index}
              className={`rounded-full mx-1 focus:outline-none ${
                complete
                  ? index <= currentSlide
                    ? "bg-primary h-[5px] w-11"
                    : "bg-[#DBDBDB] h-[5px] w-11"
                  : index === currentSlide
                  ? "bg-primary h-[5px] w-11"
                  : "bg-[#DBDBDB] h-[5px] w-11"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}

      {/* Buttons */}
      {custom && (
        <div className="absolute transition-all duration-300 flex items-center justify-between px-[30px] left-0 top-[510px] w-full">
          <button
            className={`transition-opacity duration-300 ${
              currentSlide === 0 && "opacity-0 pointer-events-none"
            }`}
            onClick={goToPrevSlide}
          >
            <img src="./src/assets/arrow-left.svg" alt="arrow" />
          </button>
          <button
            className={`transition-opacity duration-300 ${
              currentSlide === slides.length - 1 &&
              "opacity-0 pointer-events-none"
            }`}
            onClick={goToNextSlide}
          >
            <img src="./src/assets/arrow-right.svg" alt="arrow" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Swiper;
