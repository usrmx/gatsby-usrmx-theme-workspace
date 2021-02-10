import { Link } from "gatsby";
import React from "react";

import { TAG_COLORS } from "../constants";

import styles from "../../styles/post-tag.module.css";

interface PostTagProps {
  to?: string;
  children: string;
  color: typeof TAG_COLORS[number];
}

export const PostTag = ({ children, to, color }: PostTagProps) => {
  return (
    <>
      {to ? (
        <Link to={to} className={styles[color]}>
          #{children}
        </Link>
      ) : (
        <span className={styles[color]}>#{children}</span>
      )}
    </>
  );
};
