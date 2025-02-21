import { FC } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="w-3/4 px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-full hover:bg-purple-700 transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
