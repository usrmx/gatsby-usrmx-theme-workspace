import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";
import {
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
} from "react-share";

interface PostShareButtonsProps {
  postTitle: string;
  postUrl: string;
}

export interface SiteQueryData {
  site: {
    siteMetadata: {
      titleTemplate: string;
      siteUrl: string;
      twitterUsername: string;
    };
  };
}

const query = graphql`
  query PostShareButtons {
    site {
      siteMetadata {
        siteUrl
        titleTemplate
        twitterUsername
      }
    }
  }
`;

export const PostShareButtons: FC<PostShareButtonsProps> = ({
  postUrl,
  postTitle,
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteQueryData>(query);

  const url = `${siteMetadata.siteUrl}${postUrl}`;
  const title = siteMetadata.titleTemplate.replace("%s", postTitle);

  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <span>Share: </span>
      <TwitterShareButton
        url={url}
        title={title}
        via={siteMetadata.twitterUsername}
        style={{ height: "35px", marginRight: "10px", marginLeft: "10px" }}
      >
        <TwitterIcon borderRadius={4} size="35px" />
      </TwitterShareButton>
      <RedditShareButton
        url={url}
        title={title}
        style={{ height: "35px", marginRight: "10px" }}
      >
        <RedditIcon borderRadius={4} size="35px" />
      </RedditShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        style={{ height: "35px", marginRight: "10px" }}
      >
        <LinkedinIcon borderRadius={4} size="35px" />
      </LinkedinShareButton>
    </div>
  );
};
