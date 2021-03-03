import React, { FC } from "react";
import { graphql, Link, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

interface DataType {
  mdx: {
    body: string;
  };
}

const NotePage: FC<PageProps<DataType>> = ({ data }) => {
  const { mdx } = data;

  return (
    <article>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <Link to="/">Back Home</Link>
    </article>
  );
};

export default NotePage;

export const query = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
    }
  }
`;
