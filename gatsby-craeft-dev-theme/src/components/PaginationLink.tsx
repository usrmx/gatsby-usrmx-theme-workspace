import React from "react";
import { GatsbyLinkProps, Link } from "gatsby";

import styles from "../../styles/pagination-link.module.css";
import { ThemeValue } from "../types";
import { THEMES } from "../constants";

interface PaginationLinkProps
  extends Pick<GatsbyLinkProps<{}>, "to" | "children"> {
  isActive?: boolean;
  isDisabled?: boolean;
  theme?: ThemeValue;
}

export const PaginationLink = ({
  to,
  isActive = false,
  isDisabled = false,
  children,
  theme = THEMES.light,
}: PaginationLinkProps) => {
  const type = isDisabled ? "Disabled" : isActive ? "Active" : "Link";
  const activeClassName = `${theme}${type}`;

  return (
    <Link to={to} className={styles[activeClassName]}>
      {children}
    </Link>
  );
};
