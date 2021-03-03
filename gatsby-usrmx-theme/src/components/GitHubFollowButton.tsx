import React, { FC } from "react";
import GitHubButton from "react-github-btn";

interface GitHubFollowButtonProps {
  username: string;
}

export const GitHubFollowButton: FC<GitHubFollowButtonProps> = ({
  username,
}) => {
  return (
    <GitHubButton
      href={`https://github.com/${username}`}
      data-color-scheme={`no-preference: light; light: light; dark: light;`}
      data-size="large"
      data-show-count="true"
      aria-label={`Follow @${username} on GitHub`}
    >
      {`Follow @${username}`}
    </GitHubButton>
  );
};
