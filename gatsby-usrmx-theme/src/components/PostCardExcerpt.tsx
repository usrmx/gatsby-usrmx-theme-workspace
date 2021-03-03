import React from "react";
import { DEFAULT_THEME } from "../constants";
import { ThemeValue } from "../types";

import { StyleModules } from "../style-modules";
import { capitalize } from "../utils";

const styles = StyleModules.postCardExcerpt;

export const VARIANT = {
  first: "first",
  second: "second",
};

interface PostCardExcerptProps {
  children: string;
  theme?: ThemeValue;
  variant?: typeof VARIANT.first | typeof VARIANT.second;
}

export const PostCardExcerpt = ({
  children,
  theme = DEFAULT_THEME,
  variant = VARIANT.first,
}: PostCardExcerptProps) => {
  const styleName = `${theme}${capitalize(variant)}`;

  return (
    <div className={styles[styleName]}>
      <p>{children}</p>
    </div>
  );
};

export default PostCardExcerpt;
