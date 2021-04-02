import { PostEdge } from "../types";

export const getTagsFromPosts = (posts: PostEdge[]): string[] =>
  Array.from(
    new Set<string>(
      posts
        .map(
          ({
            node: {
              frontmatter: { tags },
            },
          }) => {
            if (!tags) {
              return [];
            }

            return tags.map((tag) => tag.toLowerCase());
          }
        )
        .filter(Boolean)
        .flat()
    ).values()
  );
