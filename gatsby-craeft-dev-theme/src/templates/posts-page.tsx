import React from "react";
import { graphql, PageProps } from "gatsby";
import {
  Breadcrumbs,
  MainLayout,
  PageGrid,
  PostsList,
  PostsListHeader,
  PostsSection,
  SEO,
  Pagination,
} from "../components";
import { useTheme } from "../core";
import { PostEdge } from "../types";
import { PAGES_ROUTES } from "../constants";

interface DataType {
  allMdx: {
    edges: PostEdge[];
    totalCount: number;
  };
}

interface PageContextType {
  limit: number;
  skip: number;
  currentPage: number;
  pagesCount: number;
}

export const PostsPage = ({
  data: { allMdx },
  pageContext: { currentPage, pagesCount },
}: PageProps<DataType, PageContextType>) => {
  const { theme } = useTheme();

  return (
    <MainLayout title="Blog">
      {/* <SEO
          theme={theme}
          image={frontmatter.image.childImageSharp.fixed.src}
          title={frontmatter.title}
          description={excerpt}
        /> */}
      <Breadcrumbs items={[{ to: "/", label: "Home" }, { label: "Blog" }]} />
      <PostsListHeader title="Blog" theme={theme} />
      <PageGrid>
        <PostsSection>
          <PostsList posts={allMdx.edges} gridView="tile" />
        </PostsSection>
      </PageGrid>
      <Pagination
        routePath={PAGES_ROUTES.blog.index}
        theme={theme}
        currentPage={currentPage}
        pagesCount={pagesCount}
      />
    </MainLayout>
  );
};

export const query = graphql`
  query PostsPage($skip: Int!, $limit: Int!) {
    allMdx(
      limit: $limit
      skip: $skip
      filter: {
        fileAbsolutePath: { regex: "/content/blog/" }
        frontmatter: { hidden: { ne: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date
            tags
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
      totalCount
    }
  }
`;

export default PostsPage;
