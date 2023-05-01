import type { FC } from "react";

const Spinner: FC = (): JSX.Element => {
  return (
    <svg
      className={`w-6 h-6`}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="15"
        cy="15"
        r="10"
        className={`stroke-slate-800 stroke-[3]`}
        fill="none"></circle>
      <path
        d="M 15 5 A 10 10 0 0 0 15 25"
        className={`stroke-slate-400 stroke-[3]`}
        fill="none"
        strokeDasharray="65 35">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 15 15"
          to="360 15 15"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default Spinner;
