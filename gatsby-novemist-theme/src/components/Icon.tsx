import React from "react";

interface IconProps {
  src: string;
  widthSize?: string;
  indentRight?: string;
  indentLeft?: string;
}

export const Icon = ({
  src,
  widthSize = "initial",
  indentRight,
  indentLeft,
}: IconProps) => {
  return (
    <img
      src={src}
      alt=""
      style={{
        width: widthSize,
        marginRight: indentRight,
        marginLeft: indentLeft,
      }}
    />
  );
};
