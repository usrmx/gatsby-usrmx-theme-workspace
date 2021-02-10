import { PostEdge } from "../types";

export const getTagsFromPosts = (posts: any[]): string[] =>
  Array.from(
    new Set<string>(
      posts
        .map(
          ({
            node: {
              frontmatter: { tags },
            },
          }) => tags
        )
        .filter(Boolean)
        .flat()
    ).values()
  );
