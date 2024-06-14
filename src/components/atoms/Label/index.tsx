import React, { PropsWithChildren } from "react";
import Styles from "./Label.module.scss";

interface Props {
  htmlFor?: string;
}

export const Label: React.FC<PropsWithChildren<Props>> = ({
  children,
  htmlFor,
}) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};
