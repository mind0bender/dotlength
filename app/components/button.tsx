import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

function Button({ className, children, ...props }: ButtonProps): JSX.Element {
  return (
    <button
      className={`font-bold flex disabled:bg-opacity-75 text-lg focus:outline-none px-4 py-3 border bg-white text-slate-950 hover:bg-slate-950 focus:bg-slate-950 hover:text-white focus:text-white dark:bg-slate-950 dark:text-white hover:dark:bg-white focus:dark:bg-white hover:dark:text-slate-950 focus:dark:text-slate-950 border-slate-950 dark:border-white duration-200 ${className}`}
      {...props}>
      {children}
    </button>
  );
}

export default Button;
