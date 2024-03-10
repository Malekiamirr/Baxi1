import { ReactNode } from "react";

const Modal = ({
  isOpen,
  setIsOpen,
  children,
  isError,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  isError?: boolean;
}) => {
  return (
    <>
      {isOpen && (
        <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-25 z-40 "
          ></div>
          <div className="z-50 bg-white rounded-2xl flex items-center justify-center flex-col gap-2 pt-[26px] px-[29px]">
            {children}
            {isError ? undefined : (
              <button
                className="bg-primary outline-none py-2 px-7 rounded-full hover:cursor-pointer mt-6 mb-4"
                onClick={() => setIsOpen(false)}
              >
                ثبت
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
