import { graphql, PageProps } from "gatsby";
import React from "react";
import { FixedObject, FluidObject } from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import {
  MainLayout,
  PostInfo,
  PostTags,
  TextContent,
  SEO,
  GoBackTo,
  PostsList,
} from "../components";

import { useTheme } from "../core";
import { PostEdge, PostType } from "../types";
import { HOME_PAGES_TYPE_ROUTE, RESOURCES_TYPE_ROUTE } from "../constants";

interface DataType {
  mdx: {
    excerpt: string;
    frontmatter: {
      type: PostType | null;
      date: string;
      title: string;
      tags: string[] | null;
      image: {
        childImageSharp: {
          fluid: FluidObject;
          fixed: FixedObject;
        };
      };
    };
    body: string;
  };
  allMdx: {
    edges: PostEdge[];
  };
}

interface Post {
  node: {
    id: string;
    frontmatter: {
      type: PostType | null;
      slug: string;
      tags: string;
      title: string;
    };
  };
}

interface PageContextType {
  id: string;
  relatedPostsIds: string[];
  nextPost: Post;
  prevPost: Post;
}

const PostPage = ({
  data: {
    mdx: { frontmatter, body, excerpt },
    allMdx,
  },
  pageContext: { nextPost, prevPost },
}: PageProps<DataType, PageContextType>) => {
  const { theme } = useTheme();

  return (
    <MainLayout>
      <SEO
        theme={theme}
        image={frontmatter?.image?.childImageSharp?.fixed?.src}
        title={frontmatter.title}
        description={excerpt}
      />
      <article
        className="article"
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <GoBackTo
          to={frontmatter.type ? HOME_PAGES_TYPE_ROUTE[frontmatter.type] : "/"}
          theme={theme}
        >
          Go Back To Blog
        </GoBackTo>
        <TextContent
          theme={theme}
          image={frontmatter?.image?.childImageSharp?.fluid}
        >
          <header>
            <h1>{frontmatter.title}</h1>
            <PostInfo date={frontmatter.date} commentsCount={5} />
            <PostTags tags={frontmatter.tags || []} />
            <hr />
          </header>
          {body && <MDXRenderer>{body}</MDXRenderer>}
        </TextContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {nextPost ? (
            <GoBackTo
              to={
                nextPost.node.frontmatter.type
                  ? `${RESOURCES_TYPE_ROUTE[nextPost.node.frontmatter.type]}/${
                      nextPost.node.frontmatter.slug
                    }`
                  : "/"
              }
              theme={theme}
            >
              {`Next: ${nextPost.node.frontmatter.title}`}
            </GoBackTo>
          ) : (
            <div></div>
          )}
          {prevPost ? (
            <GoBackTo
              to={
                prevPost.node.frontmatter.type
                  ? `${RESOURCES_TYPE_ROUTE[prevPost.node.frontmatter.type]}/${
                      prevPost.node.frontmatter.slug
                    }`
                  : "/"
              }
              theme={theme}
              direction="right"
            >
              {`Previous: ${prevPost.node.frontmatter.title}`}
            </GoBackTo>
          ) : (
            <div></div>
          )}
        </div>
        <div>
          <h3 className="theme-link monospace">See also</h3>
          <PostsList posts={allMdx.edges} gridView="tile" />
        </div>
      </article>
    </MainLayout>
  );
};

export const query = graphql`
  query PostPage($id: String!, $relatedPostsIds: [String]!) {
    mdx(id: { eq: $id }) {
      excerpt
      frontmatter {
        type
        title
        date
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
            fixed {
              src
            }
          }
        }
      }
      body
    }
    allMdx(filter: { id: { in: $relatedPostsIds } }) {
      edges {
        node {
          id
          frontmatter {
            type
            slug
            title
            date
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
                fixed {
                  src
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;

export default PostPage;
