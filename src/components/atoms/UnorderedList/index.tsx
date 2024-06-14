import React, { PropsWithChildren } from "react";
import Styles from "./UnorderedList.module.scss"

interface Props {
  className?: string;
}

export const UnorderedList: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <li className={`${className}`}>{children}</li>;
};
