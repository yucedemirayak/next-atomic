import React, { PropsWithChildren } from "react";
import Styles from "./Audio.module.scss"

interface Props {
  controls?: boolean;
}

export const Audio: React.FC<PropsWithChildren<Props>> = ({
  children,
  controls,
}) => {
  return <audio controls={controls}>{children}</audio>;
};
