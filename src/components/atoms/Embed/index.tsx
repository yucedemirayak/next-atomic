import React from "react";
import Styles from "./Embed.module.scss"

interface Props {
  className?: string;
  type?: string;
  src?: string;
  width?: string | number;
  height?: string | number;
}

export const Embed: React.FC<Props> = ({
  className,
  type,
  src,
  width,
  height,
}) => {
  return (
    <embed
      className={className}
      type={type}
      src={src}
      width={width}
      height={height}
    />
  );
};
