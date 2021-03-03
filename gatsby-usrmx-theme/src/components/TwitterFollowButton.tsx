import React, { FC, useEffect } from "react";

interface TwitterFollowButtonProps {
  username: string;
}

export const TwitterFollowButton: FC<TwitterFollowButtonProps> = ({
  username,
}) => {
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-follow-button");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute(
      "href",
      `https://twitter.com/${username}?ref_src=twsrc%5Etfw`
    );
    anchor.setAttribute("data-size", "large");
    anchor.setAttribute("data-show-screen-name", "false");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return <div className="twitter-embed" />;
};
