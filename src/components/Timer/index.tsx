import { useEffect } from "react";

function Timer({
  timer,
  setTimer,
}: {
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
}) {
  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(intervalId);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timer, setTimer]); // Update the timer when seconds change

  const minutes = Math.floor(timer / 60);
  const remainingSeconds = timer % 60;
  const display = `${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;

  return (
    <div>
      <h1>
        ارسال دوباره کد در <span className="text-primary">{display}</span> ثانیه
      </h1>
    </div>
  );
}

export default Timer;
