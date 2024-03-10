import { Button } from "../../components";

function SelectUserType({
  handleNext,
  setUserType,
}: {
  handleNext: () => void;
  setUserType: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="w-screen h-screen px-[78px]">
      <div className="flex items-center justify-center pt-[131px]">
        <img src="./src/assets/logo-orange.svg" alt="logo" />
      </div>
      <div className="flex justify-center items-center flex-col gap-[38px] mt-[107px]">
        <Button
          type="ternary"
          text="راننده شو"
          onClick={() => {
            setUserType("driver");
            handleNext();
          }}
        />
        <Button
          type="ternary"
          text="مسافر ما باش"
          onClick={() => {
            setUserType("passenger");
            handleNext();
          }}
        />
      </div>
      <div className="">
        <img
          src="../../../src/assets/driver-cuate.svg"
          alt="driver"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default SelectUserType;
