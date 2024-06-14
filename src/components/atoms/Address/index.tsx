import React, { PropsWithChildren } from "react";
import Styles from "./Address.module.scss"

interface Props {
  className?: string;
}

export const Address: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <address className={className}>{children}</address>;
};
