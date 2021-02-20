import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { useTheme } from "../core";
import { Container } from "./Container";

import { InfoCard } from "./InfoCard";
import { Subscribing } from "./Subscribing";

import { StyleModules } from "../style-modules";
import { FullWidthWrapper } from "./FullWidthWrapper";
import { TwitterFollowButton } from "./TwitterFollowButton";
import { GitHubFollowButton } from "./GitHubFollowButton";

const styles = StyleModules.aboutBlock;

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

interface AboutBlockProps {
  isColorishBg?: boolean;
}

export const AboutBlock: FC<AboutBlockProps> = ({ isColorishBg = false }) => {
  const { mdx, site } = useStaticQuery<DataType>(query);
  const { theme } = useTheme();

  return (
    <FullWidthWrapper isColorish={isColorishBg}>
      <Container>
        <div className={styles.inner}>
          <InfoCard style={{ width: "70%", marginRight: "10px" }} theme={theme}>
            <h2 className="monospace bold">About 💾</h2>
            {mdx ? <MDXRenderer>{mdx.body}</MDXRenderer> : null}
            <div style={{ display: "flex", alignItems: "center" }}>
              {site.siteMetadata.githubUsername && (
                <div style={{ marginRight: "10px" }}>
                  <GitHubFollowButton
                    username={site.siteMetadata.githubUsername}
                  />
                </div>
              )}
              {site.siteMetadata.twitterUsername && (
                <TwitterFollowButton
                  username={site.siteMetadata.twitterUsername}
                />
              )}
            </div>
          </InfoCard>
          <Subscribing
            style={{ width: "30%", marginLeft: "10px" }}
            theme={theme}
          />
        </div>
      </Container>
    </FullWidthWrapper>
  );
};

const query = graphql`
  query AboutBlock {
    mdx(frontmatter: { key: { eq: "about-block" } }) {
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
