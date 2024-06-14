import React from "react";
import Styles from "./TextArea.module.scss";

interface Props {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  name?: string;
  defaultValue?: string | number | readonly string[];
  value?: string | number | readonly string[];
  placeholder?: string;
  disabled?: boolean;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  id?: string;
  className?: string | undefined;
}

export const TextArea: React.FC<Props> = ({
  className,
  defaultValue,
  disabled,
  id,
  name,
  onBlur,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <textarea
      id={id}
      className={className}
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};
