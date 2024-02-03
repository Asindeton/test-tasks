import { ReactNode } from "react";
import style from "./MainLayout.module.scss";

interface IMainLayoutProps {
  children: ReactNode;
}
export const MainLayout = ({ children }: IMainLayoutProps) => {
  return <section className={style.wrapper}>{children}</section>;
};
