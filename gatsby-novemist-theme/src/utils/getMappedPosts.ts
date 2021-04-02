import { Post, PostEdge } from "../types";

export const getMappedPosts = (posts: PostEdge[]): Post[] =>
  posts.map(({ node: { excerpt, frontmatter, slug } }) => ({
    title: frontmatter.title,
    slug: frontmatter.slug ?? slug,
    date: frontmatter.date,
    tags: (frontmatter.tags || []).map((tag) => tag.toLowerCase()),
    image: frontmatter.image?.childImageSharp?.fluid,
    type: frontmatter.type,
    excerpt,
  }));
