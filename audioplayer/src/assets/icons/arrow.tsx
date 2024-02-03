import { SVGProps } from "react";

export const Arrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.3335 20.3088L25.4624 26.2555C27.1991 27.4517 29.3332 25.8948 29.3332 23.4316V20M17.3335 11.6913L25.4624 5.74452C27.1991 4.5483 29.3332 6.10526 29.3332 8.56842V14.6667"
        stroke="#1C274C"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8.84019 10.2777L13.7852 7.02643C15.377 5.97975 17.3334 7.3421 17.3334 9.49736V22.5027C17.3334 24.6579 15.377 26.0203 13.7852 24.9736L3.89522 18.4709C2.25726 17.394 2.25726 14.606 3.89523 13.5291L5.13147 12.7162"
        stroke="#1C274C"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};