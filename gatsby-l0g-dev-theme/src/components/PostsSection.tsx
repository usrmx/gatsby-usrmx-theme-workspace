import React, { CSSProperties } from "react";

import styles from "../../styles/posts-section.module.css";

interface PostsSectionProps {
  children: React.ReactNode;
  style?: CSSProperties;
}

export const PostsSection = ({ children, style }: PostsSectionProps) => {
  return (
    <section className={styles.section} style={style}>
      {children}
    </section>
  );
};
