import React, { PropsWithChildren } from "react";
import Styles from "./Article.module.scss";

interface Props {
  className?: string;
}

export const Article: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <article className={className}>{children}</article>;
};
