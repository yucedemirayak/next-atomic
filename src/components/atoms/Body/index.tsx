import React, { PropsWithChildren } from "react";
import Styles from "./Body.module.scss"

interface Props {
  className?: string;
}

export const Body: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <body className={className}>{children}</body>;
};
