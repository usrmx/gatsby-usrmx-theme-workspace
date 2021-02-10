import { Post, PostEdge } from "../types";

export const getMappedPosts = (posts: PostEdge[]): Post[] =>
  posts.map(({ node: { excerpt, frontmatter } }) => ({
    title: frontmatter.title,
    slug: frontmatter.slug,
    date: frontmatter.date,
    tags: frontmatter.tags || [],
    image: frontmatter.image?.childImageSharp?.fluid,
    excerpt,
  }));
