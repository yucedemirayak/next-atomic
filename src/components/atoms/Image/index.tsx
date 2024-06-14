import React from "react";
import Styles from "./Image.module.scss";
const NextImage = React.lazy(() => import("next/image"));

interface Props {
  alt: string;
  src: string;
  className?: string;
}

export const Image: React.FC<Props> = ({ alt, src, className }) => {
  return <NextImage alt={alt} src={src} className={`${className}`} />;
};
