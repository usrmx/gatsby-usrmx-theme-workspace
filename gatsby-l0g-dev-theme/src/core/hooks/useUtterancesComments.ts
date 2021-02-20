import { useEffect, useRef } from "react";
import { ThemeValue } from "../../types";

export interface UseUtterancesCommentsParams {
  options: {
    repo: string;
    ["issue-term"]: string;
    id: string;
    label: string;
    theme: ThemeValue;
  };
}

export const useUtterancesComments = ({
  options,
}: UseUtterancesCommentsParams) => {
  const commentBlockRef = useRef<HTMLDivElement>(null);

  const setAttributes = (scriptTag: HTMLScriptElement) => {
    const { theme, ...attrubutes } = options;
    const attrubutesNames = Object.keys(
      attrubutes
    ) as (keyof typeof attrubutes)[];
    attrubutesNames.forEach((key) => {
      scriptTag.setAttribute(key, options[key]);
    });
    scriptTag.setAttribute("theme", `github-${theme}`);
    scriptTag.setAttribute("crossorigin", "anonymous");
    scriptTag.setAttribute("async", "");
  };

  const createScriptTag = () => {
    const scriptTag = document.createElement("script");
    scriptTag.async = true;
    scriptTag.src = "https://utteranc.es/client.js";

    setAttributes(scriptTag);

    if (commentBlockRef && commentBlockRef.current) {
      const prevCommentBlock = document.querySelector(".utterances");

      if (prevCommentBlock) {
        commentBlockRef.current?.removeChild(prevCommentBlock);
      }

      commentBlockRef.current.appendChild(scriptTag);
    } else {
      console.log(`Error: ${commentBlockRef} does not exist.`);
    }
  };

  useEffect(() => {
    createScriptTag();
  }, [options.theme]);

  return {
    commentBlockRef,
  };
};
