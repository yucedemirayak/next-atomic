import React, { PropsWithChildren } from "react";
import Styles from "./Aside.module.scss"

interface Props {
  className?: string;
}

export const Aside: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <aside className={className}>{children}</aside>;
};
