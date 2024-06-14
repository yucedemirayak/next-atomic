import React, { PropsWithChildren } from "react";
import Styles from "./Footer.module.scss"

interface Props {
  className?: string;
}

export const Footer: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <footer className={`${className}`}>{children}</footer>;
};
