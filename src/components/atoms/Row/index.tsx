import React, { PropsWithChildren } from "react";
import Styles from "./Row.module.scss"

interface Props {
  className?: string;
}

export const Row: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <tr className={className}>{children}</tr>;
};
