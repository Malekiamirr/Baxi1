function InitialLoading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-primary relative z-50">
      <div>
        <img src="./src/assets/logo.svg" alt="logo" />
      </div>
      <div className="text-textPrimary absolute bottom-56 font-bold">
        Loading...
      </div>
    </div>
  );
}

export default InitialLoading;
