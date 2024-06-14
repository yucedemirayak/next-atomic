import React, { PropsWithChildren } from "react";
import Styles from "./Span.module.scss";

interface Props {
  className?: string;
}

export const Span: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <span className={`${className}`}>{children}</span>;
};
