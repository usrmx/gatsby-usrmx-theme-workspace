import React from "react";

import { ThemeValue } from "../types";
import { DEFAULT_THEME } from "../constants";

import styles from "../../styles/page-title.module.css";

interface PageTitleProps {
  children: string;
  theme?: ThemeValue;
}

export const PageTitle = ({
  children,
  theme = DEFAULT_THEME,
}: PageTitleProps) => {
  return <h1 className={styles[theme]}>{children}</h1>;
};
