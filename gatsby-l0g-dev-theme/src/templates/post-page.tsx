import React from "react";
import { graphql, PageProps } from "gatsby";
import { FixedObject, FluidObject } from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import {
  MainLayout,
  PostInfo,
  PostTags,
  TextContent,
  SEO,
  GoBackTo,
  AboutBlock,
  Container,
  Comments,
  RelatedPosts,
  PostShareButtons,
} from "../components";

import { useTheme } from "../core";
import { PostEdge, PostType } from "../types";
import { HOME_PAGES_TYPE_ROUTE, RESOURCES_TYPE_ROUTE } from "../constants";

interface DataType {
  mdx: {
    excerpt: string;
    frontmatter: {
      slug: string;
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

interface PageContextType {
  id: string;
  relatedPostsIds: string[];
}

const PostPage = ({
  data: {
    mdx: { frontmatter, body, excerpt },
    allMdx,
  },
}: PageProps<DataType, PageContextType>) => {
  const { theme } = useTheme();

  return (
    <MainLayout>
      <br />
      <Container>
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
            to={
              frontmatter.type ? HOME_PAGES_TYPE_ROUTE[frontmatter.type] : "/"
            }
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
              <PostInfo date={frontmatter.date} />
              <PostTags tags={frontmatter.tags || []} />
              <hr />
            </header>
            {body && <MDXRenderer>{body}</MDXRenderer>}
            <PostShareButtons
              postTitle={frontmatter.title}
              postUrl={`${RESOURCES_TYPE_ROUTE.blog}/${frontmatter.slug}`}
            />
          </TextContent>
        </article>
      </Container>
      <AboutBlock isColorishBg />
      <Container>
        <Comments />
      </Container>
      {allMdx.edges.length > 0 && <RelatedPosts posts={allMdx.edges} />}
    </MainLayout>
  );
};

export const query = graphql`
  query PostPage($id: String!, $relatedPostsIds: [String]!) {
    mdx(id: { eq: $id }) {
      excerpt
      frontmatter {
        slug
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
