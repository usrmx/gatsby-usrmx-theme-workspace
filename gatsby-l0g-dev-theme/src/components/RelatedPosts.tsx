import React from "react";
import { icons } from "../icons";
import { PostEdge } from "../types";
import { Container } from "./Container";
import { FullWidthWrapper } from "./FullWidthWrapper";
import { Icon } from "./Icon";
import { PostsList } from "./PostsList";

import { StyleModules } from "../style-modules";

const styles = StyleModules.relatedPosts;

interface RelatedPostsProps {
  posts: PostEdge[];
}

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  return (
    <FullWidthWrapper isColorish>
      <Container>
        <h2 className="monospace text-center bold">
          See also <Icon src={icons.emojiBooks} widthSize="28px" />
        </h2>
        <br />
        <div className={styles.list}>
          <PostsList posts={posts} gridView="row" />
        </div>
      </Container>
    </FullWidthWrapper>
  );
};
