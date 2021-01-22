import { Link } from "gatsby";
import React from "react";
import { PostTags } from "./PostTags";
import { InfoCard } from "./InfoCard";

import { MAX_TAGS_COUNT, PAGES_ROUTES } from "../constants";
import { ThemeValue } from "../types";

interface TagsBlockProps {
  tags: string[];
  theme?: ThemeValue;
}

export const TagsBlock = ({ tags, theme }: TagsBlockProps) => {
  return (
    <InfoCard theme={theme}>
      <h3 className="monospace">Tags</h3>
      <PostTags
        tags={tags}
        direction="column"
        maxCount={MAX_TAGS_COUNT.block}
      />
      {tags.length > MAX_TAGS_COUNT.block && (
        <p>
          <Link className="underline theme-link" to={PAGES_ROUTES.blog.tags}>
            ...more
          </Link>
        </p>
      )}
    </InfoCard>
  );
};
