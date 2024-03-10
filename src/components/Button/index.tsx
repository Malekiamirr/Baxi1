function Button({
  type,
  text,
  onClick,
}: {
  type: string;
  text: string;
  onClick: (arg?: unknown) => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        type === "primary"
          ? "bg-primary"
          : type === "secondary"
          ? "bg-[#EFF1FC]"
          : "bg-[#DBDBDB]"
      } rounded-3xl text-2xl w-[205px] h-[62px] font-bold`}
    >
      {text}
    </button>
  );
}

export default Button;
