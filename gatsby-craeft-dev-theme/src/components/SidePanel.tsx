import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

import { InfoCard } from "./InfoCard";

import { useTheme } from "../core";

import styles from "../../styles/side-panel.module.css";

interface SidePanelProps {
  children?: React.ReactNode;
}

interface DataType {
  mdx: {
    body: string;
  };
}

export const SidePanel = ({ children }: SidePanelProps) => {
  const { theme } = useTheme();
  const { mdx } = useStaticQuery<DataType>(query);

  return (
    <aside className={styles.panel}>
      <InfoCard theme={theme}>
        {mdx ? <MDXRenderer>{mdx.body}</MDXRenderer> : null}
      </InfoCard>
      {children}
    </aside>
  );
};

const query = graphql`
  query SidePanel {
    mdx(frontmatter: { key: { eq: "blurb" } }) {
      body
    }
  }
`;
