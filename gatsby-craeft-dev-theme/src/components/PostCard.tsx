import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { Post } from "../types";

import styles from "../../styles/post-card.module.css";
import { PostCardTitle } from "./PostCardTitle";
import { useTheme } from "../core";
import PostCardExcerpt from "./PostCardExcerpt";

interface PostCardProps extends Omit<Post, "slug"> {
  to: string;
}

export const PostCard = ({
  title,
  image,
  excerpt,
  date,
  to,
}: PostCardProps) => {
  const { theme } = useTheme();

  const commentsCount = Math.floor(Math.random() * Math.floor(10));

  return (
    <article className={styles.card}>
      {image && (
        <Link className={styles.thumbnail} to={to}>
          {<Img className={styles.thumbnailInner} fluid={image}></Img>}
        </Link>
      )}
      <header>
        <PostCardTitle to={to} theme={theme}>
          {title}
        </PostCardTitle>
      </header>
      <section className={styles.excerpt}>
        <PostCardExcerpt theme={theme}>{excerpt}</PostCardExcerpt>
      </section>
      <footer>
        <div className={styles.info}>
          <time dateTime={date}>{date}</time>
          <span> | </span>
          <Link to={`${to}#comments`}>{`${commentsCount} ${
            commentsCount === 1 ? "comment" : "comments"
          }`}</Link>
        </div>
      </footer>
    </article>
  );
};
