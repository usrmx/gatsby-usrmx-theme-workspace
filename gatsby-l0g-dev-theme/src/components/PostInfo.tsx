import { Link } from "gatsby";
import React from "react";

import { getFormattedDateString } from "../utils";

import styles from "../../styles/post-info.module.css";

interface PostInfoProps {
  date: string;
  commentsCount: number;
  postLink?: string;
}

export const PostInfo = ({
  date,
  commentsCount,
  postLink = "",
}: PostInfoProps) => {
  return (
    <div className={styles.info}>
      <time dateTime={date}>{getFormattedDateString(date)}</time>
      <span> | </span>
      <Link to={`${postLink}#comments`}>{`${commentsCount} ${
        commentsCount === 1 ? "comment" : "comments"
      }`}</Link>
    </div>
  );
};

export default PostInfo;
