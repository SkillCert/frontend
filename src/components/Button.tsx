"use client";
import clsx from "clsx";
import { forwardRef } from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "bg-[#9D174D]",
          " py-[5px] px-[10px] leading-6",
          " rounded-full ",
          "w-[200px] h-[50px]",
          "cursor-pointer inline-flex items-center justify-center relative shadow",
          // Hover effect
          "transition",
          "hover:bg-opacity-80 hover:shadow-md",
          // Focus effect
          "outline-none",
          "ring-[#9D174D]/70 ring-offset-2",
          "focus-visible:ring-2 focus:scale-[0.98]",
          // Disabled Effect
          "disabled:bg-[#9D174D]/50 disabled:cursor-not-allowed disabled:shadow",

          className
        )}
        {...rest}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
