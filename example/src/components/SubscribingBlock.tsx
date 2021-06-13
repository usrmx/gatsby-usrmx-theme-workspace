import React, { FC } from "react";

import { PostBanner, Icon, icons } from "@mxkvl/gatsby-novemist-theme";

interface SubscribingBlockProps {
  convertkitEndpoint: string;
}

export const SubscribingBlock: FC<SubscribingBlockProps> = ({
  convertkitEndpoint,
}) => {
  return (
    <PostBanner
      convertkitEndpoint={convertkitEndpoint}
      title="Join the Mailing List"
      content={
        <>
          <p>
            Be the first to know when I write new post. I also share my private
            materials with memebers of <strong>the Mailing List</strong>.
          </p>
          <p>
            I write about{" "}
            <strong>
              software development, TypeScript, testing, architecture and other
              stuff.
            </strong>
          </p>
          <p>
            Only interesting articles and useful materials.{" "}
            <strong>
              <i>No spam</i>
            </strong>
            .
          </p>
        </>
      }
      btnTitle="Subscribe"
      successView={
        <div>
          <Icon src={icons.emojiSparkles} widthSize="20px" />
          <span>Please go confirm your subscription!</span>
        </div>
      }
      errorView={
        <div>
          <Icon src={icons.emojiPoliceCarLight} widthSize="20px" />
          <span>Oops, Something went wrong! Try again.</span>
        </div>
      }
      iconSrc={icons.emojiLoveLetter}
    />
  );
};
