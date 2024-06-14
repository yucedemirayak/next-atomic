import React, { PropsWithChildren } from "react";
import Stlyes from "./Option.module.scss";

interface Props {
  className?: string;
  value?: string | number | readonly string[];
}

export const Option: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
  value,
}) => {
  return (
    <option className={`${className}`} value={value}>
      {children}
    </option>
  );
};
