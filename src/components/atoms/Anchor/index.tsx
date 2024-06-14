import React, { PropsWithChildren } from "react";
import Styles from "./Anchor.module.scss";

interface Props {
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
}

export const Anchor: React.FC<PropsWithChildren<Props>> = ({
  children,
  href,
  target,
  className,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};
