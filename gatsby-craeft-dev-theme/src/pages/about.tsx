import React from "react";
import { PageProps, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import MainLayout from "../layouts/main-layout";
import { TextContent } from "../components";
import { useTheme } from "../core";

interface DataType {
  mdx: {
    body: string;
  };
}

const AboutPage = ({ data }: PageProps<DataType>) => {
  const { theme } = useTheme();

  return (
    <MainLayout>
      <TextContent theme={theme}>
        {data.mdx && <MDXRenderer>{data.mdx.body}</MDXRenderer>}
      </TextContent>
    </MainLayout>
  );
};

export const query = graphql`
  query AboutPage {
    mdx(frontmatter: { key: { eq: "about" } }) {
      body
    }
  }
`;

export default AboutPage;
