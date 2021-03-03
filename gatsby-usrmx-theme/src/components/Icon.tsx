import React from "react";

interface IconProps {
  src: string;
  widthSize?: string;
}

export const Icon = ({ src, widthSize = "initial" }: IconProps) => {
  return <img src={src} alt="" style={{ width: widthSize }} />;
};
