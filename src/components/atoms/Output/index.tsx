import React from "react";
import Styles from "./Output.module.scss"

interface Props {
  className?: string;
  name?: string;
  htmlFor?: string;
}

export const Output: React.FC<Props> = ({ className, htmlFor, name }) => {
  return <output name={name} htmlFor={htmlFor} />;
};
