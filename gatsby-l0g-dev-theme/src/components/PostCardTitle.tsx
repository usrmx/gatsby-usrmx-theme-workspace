import { Link } from "gatsby";
import React from "react";

import { DEFAULT_THEME } from "../constants";
import { ThemeValue } from "../types";

import styles from "../../styles/post-card-title.module.css";

interface PostCardTitleProps {
  children: string;
  to: string;
  theme?: ThemeValue;
}

export const PostCardTitle = ({
  children,
  to,
  theme = DEFAULT_THEME,
}: PostCardTitleProps) => {
  return (
    <Link to={to} className={styles[theme]} title={children}>
      {children}
    </Link>
  );
};
