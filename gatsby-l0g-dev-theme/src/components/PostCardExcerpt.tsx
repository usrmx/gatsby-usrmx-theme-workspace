import React from "react";
import { DEFAULT_THEME } from "../constants";
import { ThemeValue } from "../types";

import styles from "../../styles/post-card-excerpt.module.css";

interface PostCardExcerptProps {
  children: string;
  theme?: ThemeValue;
}

export const PostCardExcerpt = ({
  children,
  theme = DEFAULT_THEME,
}: PostCardExcerptProps) => {
  return (
    <div className={styles[theme]}>
      <p>{children}</p>
    </div>
  );
};

export default PostCardExcerpt;
