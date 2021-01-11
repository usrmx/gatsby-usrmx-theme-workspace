import React from "react";
import { PageProps, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { FluidObject } from "gatsby-image";

import { Greeting, PostsList } from "../components";
import MainLayout from "../layouts/main-layout";
import { Post } from "../types";

interface DataType {
  mdx: {
    body: string;
  };
  allMdx: {
    edges: {
      node: {
        excerpt: string;
        frontmatter: {
          title: string;
          slug: string;
          date: string;
          image: {
            childImageSharp: {
              fluid: FluidObject;
            };
          };
        };
      };
    }[];
  };
}

const IndexPage = (props: PageProps<DataType>) => {
  const { data } = props;

  const posts: Post[] = data.allMdx.edges.map(
    ({ node: { excerpt, frontmatter } }) => ({
      title: frontmatter.title,
      slug: frontmatter.slug,
      date: frontmatter.date,
      image: frontmatter.image?.childImageSharp?.fluid,
      excerpt,
    })
  );

  return (
    <MainLayout>
      <header>
        <Greeting>
          {data.mdx ? <MDXRenderer>{data.mdx.body}</MDXRenderer> : null}
        </Greeting>
        <h2 className="latest-posts">Latest posts</h2>
      </header>
      <PostsList posts={posts} />
    </MainLayout>
  );
};

export const query = graphql`
  query HomePage {
    mdx(frontmatter: { key: { eq: "greeting" } }) {
      body
    }
    allMdx(
      limit: 7
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
