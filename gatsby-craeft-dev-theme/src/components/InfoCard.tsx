import React from "react";

import { THEMES } from "../constants";
import { ThemeValue } from "../types";

import styles from "../../styles/info-card.module.css";

interface InfoCardProps {
  theme?: ThemeValue;
  children: React.ReactNode;
}

export const InfoCard = ({ children, theme = THEMES.light }: InfoCardProps) => {
  return <div className={styles[theme]}>{children}</div>;
};
