import { useEffect } from "react";

function Thanks({ page }: { page: number }) {
  useEffect(() => {
    if (page === 7) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 5000);

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timer);
    }
  }, [page]); // Empty dependency array ensures that the effect runs only once after the component mounts

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-primary relative z-50">
      <div>
        <img src="./src/assets/logo.svg" alt="logo" />
      </div>
      <div className="text-textPrimary font-bold absolute bottom-32 left-1/2 -translate-x-[50%]">
        Thanks For Watching.
      </div>
    </div>
  );
}

export default Thanks;
