import React, { PropsWithChildren } from "react";
import Styles from "./Select.module.scss";

interface Props {
  className?: string;
}

export const Select: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <select className={`${className}`}>{children}</select>;
};
