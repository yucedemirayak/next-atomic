import React, { PropsWithChildren } from "react";
import Styles from "./Meter.module.scss"

interface Props {
  className?: string;
}

export const Meter: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <meter className={className}>{children}</meter>;
};
