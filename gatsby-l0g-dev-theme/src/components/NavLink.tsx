import React from "react";
import { GatsbyLinkProps, Link } from "gatsby";

import { ThemeValue } from "../types";
import { DEFAULT_THEME } from "../constants";

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
  theme = DEFAULT_THEME,
}: NavLinkProps) => {
  const styleName = isActive ? `${theme}Active` : theme;

  return (
    <>
      {to.includes("http") ? (
        <a href={to} className={styles[styleName]}>
          {children}
        </a>
      ) : (
        <Link to={to} className={styles[styleName]}>
          {children}
        </Link>
      )}
    </>
  );
};
