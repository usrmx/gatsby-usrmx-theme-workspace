import { Link } from "gatsby";
import React from "react";

import styles from "../../styles/post-card-title.module.css";
import { THEMES } from "../constants";
import { ThemeValue } from "../types";

interface PostCardTitleProps {
  children: string;
  to: string;
  theme?: ThemeValue;
}

export const PostCardTitle = ({
  children,
  to,
  theme = THEMES.light,
}: PostCardTitleProps) => {
  return (
    <Link to={to} className={styles[theme]}>
      {children}
    </Link>
  );
};
