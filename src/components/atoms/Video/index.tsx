import React, { PropsWithChildren } from "react";
import Styles from "./Video.module.scss";

interface Props {
  controls?: boolean;
  width?: string | number;
  height?: string | number;
}

export const Video: React.FC<PropsWithChildren<Props>> = ({
  children,
  controls,
  height,
  width,
}) => {
  return (
    <video controls={controls} width={width} height={height}>
      {children}
    </video>
  );
};
