import React from "react";
import { THEMES } from "../constants";
import { ThemeValue } from "../types";

import styles from "../../styles/post-card-excerpt.module.css";

interface PostCardExcerptProps {
  children: string;
  theme?: ThemeValue;
}

export const PostCardExcerpt = ({
  children,
  theme = THEMES.light,
}: PostCardExcerptProps) => {
  return (
    <div className={styles[theme]}>
      <p>{children}</p>
    </div>
  );
};

export default PostCardExcerpt;
