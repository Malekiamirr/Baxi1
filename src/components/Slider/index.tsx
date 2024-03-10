import { ReactNode } from "react";

const Swiper = ({
  slides,
  currentSlide,
  goToNextSlide,
  goToSlide,
  goToPrevSlide,
  complete,
  map,
  custom,
}: {
  slides: ReactNode[];
  currentSlide: number;
  goToNextSlide: () => void;
  goToSlide: (index: number) => void;
  goToPrevSlide: () => void;
  complete?: boolean;
  map?: boolean;
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
      ) : map && currentSlide !== 2 ? (
        <div className="w-full h-[76px] bg-white z-50 absolute top-[82%] left-0 flex items-center justify-between px-10">
          <div onClick={() => goToSlide(0)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-7 h-7 hover:cursor-pointer ${
                currentSlide === 0 ? "text-[#2B2B2B]" : "text-[#BFC2CC]"
              }`}
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
          </div>

          <div onClick={() => goToSlide(1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-7 h-7 hover:cursor-pointer ${
                currentSlide === 1 ? "text-[#2B2B2B]" : "text-[#BFC2CC]"
              }`}
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div
            onClick={() => goToSlide(2)}
            className="rounded-full bg-[#FFBD2F] p-4"
          >
            <img src="../../../src/assets/taxi.svg" alt="taxi" />
          </div>

          <div onClick={() => goToSlide(3)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-7 h-7 hover:cursor-pointer ${
                currentSlide === 3 ? "text-[#2B2B2B]" : "text-[#BFC2CC]"
              }`}
            >
              <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
            </svg>
          </div>

          <div onClick={() => goToSlide(4)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-7 h-7 hover:cursor-pointer ${
                currentSlide === 4 ? "text-[#2B2B2B]" : "text-[#BFC2CC]"
              }`}
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      ) : currentSlide === 2 ? undefined : (
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
