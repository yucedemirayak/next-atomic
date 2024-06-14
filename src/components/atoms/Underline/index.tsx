import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export const Underline: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <u className={className}>{children}</u>;
};
