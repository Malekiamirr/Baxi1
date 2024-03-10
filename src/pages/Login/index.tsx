import { useState } from "react";
import Button from "../../components/Button";

function Login({
  handleNext,
  phoneNumber,
  setPhoneNumber,
}: {
  handleNext: () => void;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [error, setError] = useState("");

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /^09\d{9}$/; // Iranian mobile phone number format
    if (!phoneRegex.test(phoneNumber)) {
      setError(".شماره تلفن همراه وارد شده معتبر نیست");
      return false;
    }
    return true;
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePhoneNumber(phoneNumber)) {
      // Proceed to the next step
      handleNext();
    }
  };

  return (
    <div className="px-[34px] pt-[111px] pb-[127px] w-screen h-screen">
      <h1 className="text-center text-2xl font-bold">
        !به <span className="text-primary font-bold">بکسی </span>خوش آمدید
      </h1>
      <div className="my-16 px-[6px] text-end">
        <span className="border-b-4 border-primary font-bold">تلفن همراه</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-[17px]">
        <p className="mb-1 font-normal">
          .لطفا شماره تلفن همراه خود را وارد کنید
        </p>
        <form
          className="border-2 border-secondary px-4 py-3 flex items-center justify-center rounded-3xl"
          onSubmit={handleSubmit}
        >
          <span className="font-bold">+98</span>
          <div className="w-[2px] h-4 bg-secondary ml-2 mr-4"></div>
          <input
            type="text"
            placeholder="09123456789"
            className="h-8 outline-none font-bold"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              setError("");
            }}
          />
        </form>
        <p className={`text-red-500 ${error ? "opacity-100" : "opacity-0"}`}>
          {error}
        </p>
      </div>
      <div className="mt-[138px] flex justify-center items-center">
        <Button type="primary" text="مرحله بعد" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default Login;
