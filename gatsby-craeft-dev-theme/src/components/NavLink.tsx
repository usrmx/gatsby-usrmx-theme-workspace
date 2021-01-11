import React from "react";
import { GatsbyLinkProps, Link } from "gatsby";

import { ThemeValue } from "../types";
import { THEMES } from "../constants";

import styles from "../../styles/nav-link.module.css";

interface NavLinkProps
  extends Pick<GatsbyLinkProps<{}>, "to" | "className" | "children"> {
  isActive?: boolean;
  theme?: ThemeValue;
}

export const NavLink = ({
  to,
  children,
  isActive = false,
  theme = THEMES.light,
}: NavLinkProps) => {
  const styleName = isActive ? `${theme}Active` : theme;

  return (
    <Link to={to} className={styles[styleName]}>
      {children}
    </Link>
  );
};
