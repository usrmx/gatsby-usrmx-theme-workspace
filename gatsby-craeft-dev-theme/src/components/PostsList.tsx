import React from "react";

import { Post } from "../types";
import { PostCard } from "./PostCard";

import styles from "../../styles/posts-list.module.css";

interface PostsListProps {
  posts: Post[];
}

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <div className={styles.list}>
      {posts.map(({ slug, ...post }) => (
        <PostCard key={slug} {...post} to={`/blog/${slug}`} />
      ))}
    </div>
  );
};
