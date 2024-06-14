import React, { PropsWithChildren } from "react";
import Styles from "./Main.module.scss"

interface Props {
  className?: string;
}

export const Main: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <main className={`${className}`}>{children}</main>;
};
