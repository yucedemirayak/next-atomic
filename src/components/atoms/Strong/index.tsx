import React, { PropsWithChildren } from "react";
import Styles from "./Strong.module.scss"

interface Props {
  className?: string;
}

export const Strong: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <strong className={`${className}`}>{children}</strong>;
};
