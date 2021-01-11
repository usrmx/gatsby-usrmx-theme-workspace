import React from "react";
import { PageProps, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import IndexLayout from "../layouts";
import { Greeting } from "../components";
import MainLayout from "../layouts/main-layout";

interface DataType {
  mdx: {
    body: string;
  };
}

const IndexPage = (props: PageProps<DataType>) => {
  const { data } = props;

  return (
    <MainLayout>
      <Greeting>
        {data.mdx ? <MDXRenderer>{data.mdx.body}</MDXRenderer> : null}
      </Greeting>
    </MainLayout>
  );
};

export const query = graphql`
  query HomePage {
    mdx(frontmatter: { key: { eq: "greeting" } }) {
      body
    }
  }
`;

export default IndexPage;
