//

import { ReactNode } from "react";
import style from "./Button.module.scss";

interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
}
export const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <button className={style.wrapper} onClick={onClick} type={"button"}>
      {children}
    </button>
  );
};
