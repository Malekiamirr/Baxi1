import { useEffect, useState } from "react";
import {
  CarInfo,
  Collaboration,
  Driver,
  InitialLoading,
  Login,
  Passenger,
  SelectUserType,
  Thanks,
  Verified,
} from "./pages";

function App() {
  const [page, setPage] = useState(0);
  const [gender, setGender] = useState("");
  const [userType, setUserType] = useState("");
  const [colabrate, setColabrate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPage((prevState) => prevState + 1);
    }, 3000);

    // Cleanup function to clear the timeout if component unmounts or state changes before the timeout
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {page > 1 && (
        <div
          className="bg-[#E9E9E9] rounded-2xl absolute w-12 h-12 top-10 left-[34px] z-10 hover:cursor-pointer flex items-center justify-center"
          onClick={handlePrev}
        >
          <img
            src="./src/assets/icons/chevron-left.svg"
            alt="icon"
            className="w-[19px] h-[19px]"
          />
        </div>
      )}
      <div
        className={`${
          page > 0 && "-translate-y-full"
        } duration-300 transition-all`}
      >
        <InitialLoading />
      </div>
      <div
        className={`${
          page > 0 && "-translate-y-full"
        } duration-300 transition-all`}
      >
        <div
          className="flex duration-300 transition-all"
          style={{
            transform: `translateX(-${(page - 1) * 100}%)`,
          }}
        >
          <div className="w-screen">
            <Login
              handleNext={handleNext}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
            />
          </div>

          <div className="w-screen">
            <Verified
              page={page}
              handleNext={handleNext}
              phoneNumber={phoneNumber}
            />
          </div>

          <div className="w-screen">
            <SelectUserType handleNext={handleNext} setUserType={setUserType} />
          </div>

          <div className="w-screen">
            {userType === "driver" ? (
              <Driver
                handleNext={handleNext}
                gender={gender}
                setGender={setGender}
              />
            ) : (
              <Passenger
                gender={gender}
                setGender={setGender}
                handleNext={handleNext}
              />
            )}
          </div>

          {userType === "driver" && (
            <div className="w-screen">
              <Collaboration
                handleNext={handleNext}
                setColabrate={setColabrate}
                gender={gender}
              />
            </div>
          )}
          {userType === "driver" && (
            <div className="w-screen">
              {colabrate && (
                <CarInfo colabrate={colabrate} handleNext={handleNext} />
              )}
            </div>
          )}
          {userType === "driver" && (
            <div className="w-screen">
              <Thanks page={page} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
