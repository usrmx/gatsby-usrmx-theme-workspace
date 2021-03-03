import React, { FC } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";

import { ThemeValue } from "../types";
import { InfoCard } from "./InfoCard";
import { TwitterFollowButton } from "./TwitterFollowButton";
import { GitHubFollowButton } from "./GitHubFollowButton";
import { Icon } from "./Icon";
import { icons } from "../icons";

interface BlurbProps {
  theme: ThemeValue;
}

const query = graphql`
  query SidePanel {
    mdx(frontmatter: { key: { eq: "blurb" } }) {
      body
    }
    site {
      siteMetadata {
        twitterUsername
        githubUsername
      }
    }
  }
`;

interface DataType {
  mdx: {
    body: string;
  };
  site: {
    siteMetadata: {
      twitterUsername: string;
      githubUsername: string;
    };
  };
}

export const Blurb: FC<BlurbProps> = ({ theme }) => {
  const { mdx, site } = useStaticQuery<DataType>(query);

  return (
    <InfoCard theme={theme}>
      <h3 className="monospace">
        <span>About</span> <Icon src={icons.emojiFloppy} widthSize="25px" />
      </h3>
      {mdx ? <MDXRenderer>{mdx.body}</MDXRenderer> : null}
      {site.siteMetadata.githubUsername && (
        <GitHubFollowButton username={site.siteMetadata.githubUsername} />
      )}
      {site.siteMetadata.twitterUsername && (
        <TwitterFollowButton username={site.siteMetadata.twitterUsername} />
      )}
    </InfoCard>
  );
};
