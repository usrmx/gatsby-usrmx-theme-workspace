import React from "react";
import { ThemeValue } from "../types";
import { THEMES } from "../constants";

import styles from "../../styles/text-content.module.css";

interface TextContentProps {
  children?: React.ReactNode;
  theme?: ThemeValue;
}

export const TextContent = ({
  children,
  theme = THEMES.light,
}: TextContentProps) => {
  return <div className={styles[theme]}>{children}</div>;
};

export default TextContent;
