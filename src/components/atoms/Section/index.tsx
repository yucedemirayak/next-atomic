import React, { PropsWithChildren } from "react";
import Styles from "./Section.module.scss";

interface Props {
  className?: string;
}

export const Section: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <section className={`${className}`}>{children}</section>;
};
