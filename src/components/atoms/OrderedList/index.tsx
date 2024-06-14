import React, { PropsWithChildren } from "react";
import Styles from "./OrdereList.module.scss"

interface Props {
  className?: string;
}

export const OrderedList: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <ol className={`${className}`}>{children}</ol>;
};
