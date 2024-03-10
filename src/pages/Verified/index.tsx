/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useEffect } from "react";
import { Button, Timer } from "../../components";

function Verified({
  handleNext,
  phoneNumber,
  page,
}: {
  handleNext: () => void;
  phoneNumber: string;
  page: number;
}) {
  const [verificationCode, setVerificationCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  useEffect(() => {
    if (page === 2) {
      // Generate a random 4-digit code
      const code = Math.floor(1000 + Math.random() * 9000);
      setVerificationCode(code.toString());

      alert(`کد ورود : ${code}`);

      // Start the timer
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            setIsResendDisabled(false);
            clearInterval(intervalId);
          }
          return prevTimer - 1;
        });
      }, 1000);

      // Clean up function
      return () => clearInterval(intervalId);
    }
  }, [page]);
  // @ts-ignore
  const handleCodeInputChange = (e) => {
    setInputCode(e.target.value);
  };

  const handleResetTimer = () => {
    setTimer(60);
    setIsResendDisabled(true);
    setInputCode("");

    // Generate a new verification code
    const code = Math.floor(1000 + Math.random() * 9000);
    setVerificationCode(code.toString());
    alert(`کد ورود : ${code}`);
  };

  const handleVerification = () => {
    if (inputCode === verificationCode) {
      // Correct code entered
      handleNext();
    } else {
      alert("کد وارد شده اشتباه است.");
    }
  };

  return (
    <div className="w-screen h-screen pt-[200px] px-[34px]">
      <div className="text-end w-full px-[6px]">
        <span className="border-b-4 border-primary font-bold">کد تایید</span>
      </div>
      <div className="flex flex-col items-center justify-center mt-[58px]">
        <p>:کد تایید به شماره تلفن‌همراه زیر ارسال شد</p>
        <div className="flex items-center justify-center gap-[13px] bg-[#EFF1FC] rounded-3xl px-6 py-4 text-[#AFAFAF] font-bold mt-[17px]">
          <span>+98</span>
          <span>{phoneNumber}</span>
          <span>
            <img src="./src/assets/icons/edit.svg" alt="edit icon" />
          </span>
        </div>

        <form className="bg-[#EFF1FC] flex items-center py-2 justify-center rounded-3xl mt-[38px]">
          <input
            type="number"
            className="outline-none text-center w-2/3 bg-[#EFF1FC] font-bold"
            value={inputCode}
            maxLength={4}
            onChange={handleCodeInputChange}
          />
        </form>
        <div className="mt-[71px]">
          <Timer timer={timer} setTimer={setTimer} />
        </div>
        <div className="flex flex-col justify-center items-center gap-[17px] mt-6">
          <Button
            type="secondary"
            text="ارسال مجدد"
            onClick={handleResetTimer}
            // @ts-ignore
            disabled={isResendDisabled}
          />
          <Button
            type="primary"
            text="تایید کد"
            onClick={handleVerification}
            // @ts-ignore
            disabled={inputCode.length !== 4}
          />
        </div>
      </div>
    </div>
  );
}

export default Verified;
