import React, { PropsWithChildren } from "react";
import Styles from "./Button.module.scss";

interface Props {
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  id?: string;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
  type,
  onClick,
  disabled,
  id,
}) => {
  return (
    <button
      id={id}
      className={`${className}`}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
