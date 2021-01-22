import { PageProps } from "gatsby";
import React from "react";

import {
  AllTagsList,
  Breadcrumbs,
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
}

export const TagsPage = ({
  pageContext: { tagPostsCount },
}: PageProps<{}, PageContextType>) => {
  const { theme } = useTheme();

  return (
    <MainLayout title="Tags">
      <Breadcrumbs items={[{ to: "/", label: "Home" }, { label: "Tags" }]} />
      <PostsListHeader title="Tags" theme={theme} />
      <PageGrid>
        <div style={{ width: "100%" }}>
          <AllTagsList tags={tagPostsCount} theme={theme} />
        </div>
        <SidePanel />
      </PageGrid>
    </MainLayout>
  );
};

export default TagsPage;
