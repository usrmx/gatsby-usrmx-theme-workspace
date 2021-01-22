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
  Breadcrumbs,
} from "../components";

import { useTheme } from "../core";

interface DataType {
  mdx: {
    excerpt: string;
    frontmatter: {
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
}

const PostPage = ({
  data: {
    mdx: { frontmatter, body, excerpt },
  },
}: PageProps<DataType>) => {
  const { theme } = useTheme();

  return (
    <MainLayout>
      <SEO
        theme={theme}
        image={frontmatter.image.childImageSharp.fixed.src}
        title={frontmatter.title}
        description={excerpt}
      />
      <Breadcrumbs
        items={[
          { to: "/", label: "Home" },
          { to: "/blog", label: "Blog" },
          { label: frontmatter.title },
        ]}
      />
      <article>
        <TextContent
          theme={theme}
          image={frontmatter.image.childImageSharp.fluid}
        >
          <PostTags tags={frontmatter.tags || []} />
          <PostInfo date={frontmatter.date} commentsCount={5} />
          <h1>{frontmatter.title}</h1>
          {body && <MDXRenderer>{body}</MDXRenderer>}
          {/* See also (list of related posts) */}
          {/* Comments */}
        </TextContent>
      </article>
    </MainLayout>
  );
};

export const query = graphql`
  query PostPage($id: String!) {
    mdx(id: { eq: $id }) {
      excerpt
      frontmatter {
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
  }
`;

export default PostPage;
