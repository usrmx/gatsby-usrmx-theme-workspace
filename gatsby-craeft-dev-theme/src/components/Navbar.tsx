import React from "react";

import { THEMES } from "../constants";
import { ThemeValue } from "../types";
import { NavLink } from "./NavLink";

import styles from "../../styles/navbar.module.css";

interface NavbarProps {
  theme?: ThemeValue;
  currentPath?: string;
  items: { to: string; title: string }[];
}

export const Navbar = ({
  items,
  theme = THEMES.light,
  currentPath = "",
}: NavbarProps) => {
  return (
    <nav className={styles[theme]}>
      {items.map(({ to, title }) => (
        <NavLink key={to} to={to} isActive={to === currentPath} theme={theme}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
};
