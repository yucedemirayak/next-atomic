import React, { PropsWithChildren } from "react";
import Styles from "./Header.module.scss"

interface Props {
  className?: string;
}

export const Header: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <header className={`${className}`}>{children}</header>;
};
