import React from "react";
import { useTheme, useUtterancesComments } from "../core";
import { icons } from "../icons";
import { Icon } from "./Icon";

export const Comments = () => {
  const { theme } = useTheme();
  const options = {
    repo: process.env.UTTERANCES_REPO || "",
    issueTerm: process.env.UTTERANCES_ISSUETERM || "",
    label: process.env.UTTERANCES_LABEL || "",
    id: process.env.UTTERANCES_ID || "",
  };
  const { commentBlockRef } = useUtterancesComments({
    options: {
      theme,
      ...options,
    },
  });

  return (
    <>
      <h3 className="monospace text-center bold">
        Comments <Icon src={icons.emojiSpeechBalloon} widthSize="25px" />
      </h3>
      <div ref={commentBlockRef} />
    </>
  );
};
