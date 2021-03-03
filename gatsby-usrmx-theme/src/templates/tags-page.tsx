import { PageProps } from "gatsby";
import React from "react";

import {
  AllTagsList,
  Breadcrumbs,
  Container,
  MainLayout,
  PageGrid,
  PostsListHeader,
  SidePanel,
} from "../components";
import { useTheme } from "../core";

interface PageContextType {
  tags: string[];
  tagPostsCount: {
    [key: string]: number;
  };
  convertkitEndpoint: string;
}

export const TagsPage = ({
  pageContext: { tagPostsCount, convertkitEndpoint },
}: PageProps<{}, PageContextType>) => {
  const { theme } = useTheme();

  return (
    <MainLayout title="Tags">
      <br />
      <Container>
        <Breadcrumbs items={[{ to: "/", label: "Home" }, { label: "Tags" }]} />
        <PostsListHeader title="Tags" theme={theme} />
        <PageGrid>
          <div style={{ width: "100%" }}>
            <AllTagsList tags={tagPostsCount} theme={theme} />
          </div>
          <SidePanel convertkitEndpoint={convertkitEndpoint} />
        </PageGrid>
      </Container>
    </MainLayout>
  );
};

export default TagsPage;
