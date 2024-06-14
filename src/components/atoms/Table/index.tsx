import React, { PropsWithChildren } from "react";
import Styles from "./Table.module.scss"

interface Props {
  className?: string;
}

export const Table: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <table className={`${className}`}>{children}</table>;
};
