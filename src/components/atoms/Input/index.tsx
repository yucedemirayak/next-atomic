import React from "react";
import Styles from "./Input.module.scss";

interface Props {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  defaultValue?: string | number | readonly string[];
  value?: string | number | readonly string[];
  placeholder?: string;
  disabled?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  id?: string;
  className?: string | undefined;
  type?: React.HTMLInputTypeAttribute;
}

export const Input: React.FC<Props> = ({
  onChange,
  name,
  defaultValue,
  value,
  placeholder,
  disabled,
  onBlur,
  id,
  type,
  className,
}) => {
  return (
    <input
      id={id}
      className={className}
      onChange={onChange}
      name={name}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onBlur={onBlur}
      type={type}
    />
  );
};
