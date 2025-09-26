interface ButtonProps {
  text?: string;
  buttonClassName: string;
  icon?: boolean;
}
const Button = ({ text, buttonClassName }: ButtonProps) => {
  return (
    <>
      <button
        className={`font-black text-white bg-[#b88e2f] hover:opacity-85 active:opacity-100 transition-all ${buttonClassName}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
