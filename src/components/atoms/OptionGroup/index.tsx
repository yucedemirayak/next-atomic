import React, { PropsWithChildren } from "react";
import Styles from "./OptionGroup.module.scss";

interface Props {
  className?: string;
}

export const OptionGroup: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <optgroup className={`${className}`}>{children}</optgroup>;
};
