import React, { FC } from "react";
import { useLocation, useNavigate } from "@reach/router";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useTheme } from "../core";
import {
  Container,
  GoBackTo,
  MainLayout,
  SEO,
  TextContent,
} from "../components";
import { PAGES_ROUTES } from "../constants";

interface DataType {
  mdx: {
    body: string;
  };
}

interface PageContextType {
  title: string | null;
}

const NotePage: FC<PageProps<DataType, PageContextType>> = ({
  data,
  pageContext,
}) => {
  const { theme } = useTheme();
  const { mdx } = data;
  const { title } = pageContext;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <MainLayout>
      <br />
      <Container>
        <SEO
          theme={theme}
          title={title || "Note"}
          description="Digital Garden"
        />
        <article>
          {pathname === `${PAGES_ROUTES.notes.index}/home` ? (
            <GoBackTo type="link" theme={theme} to={PAGES_ROUTES.home.index}>
              Go Back To Home Page
            </GoBackTo>
          ) : // <GoBackTo
          //   type="button"
          //   theme={theme}
          //   onClick={() => {
          //     navigate(-1);
          //   }}
          // >
          //   Back
          // </GoBackTo>
          null}
          <TextContent theme={theme}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </TextContent>
        </article>
      </Container>
    </MainLayout>
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
