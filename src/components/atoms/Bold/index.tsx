import React, { PropsWithChildren } from "react";
import Styles from "./Bold.module.scss";

interface Props {
  className?: string;
}

export const Bold: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <b className={className}>{children}</b>;
};
