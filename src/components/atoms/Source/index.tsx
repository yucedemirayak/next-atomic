import React from "react";

interface Props {
  src?: string;
  type?: string;
}

export const Source: React.FC<Props> = ({ src, type }) => {
  return <source src={src} type={type} />;
};
