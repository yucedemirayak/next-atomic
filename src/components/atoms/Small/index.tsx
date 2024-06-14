import React, { PropsWithChildren } from "react";
import Styles from "./Small.module.scss";

interface Props {
  className?: string;
}

export const Small: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return <small className={`${className}`}>{children}</small>;
};
