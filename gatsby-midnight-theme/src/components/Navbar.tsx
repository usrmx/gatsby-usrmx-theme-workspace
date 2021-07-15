import React from "react";

import { DEFAULT_THEME } from "../constants";
import { NavItem, ThemeValue } from "../types";
import { NavLink } from "./NavLink";

import { StyleModules } from "../style-modules";
import { Icon } from "./Icon";
import { icons } from "../icons";

const styles = StyleModules.navbar;

interface NavbarProps {
  theme?: ThemeValue;
  currentPath?: string;
  items: NavItem[];
  withLine?: boolean;
  isSubscribeBtnShown?: boolean;
}

export const Navbar = ({
  items,
  theme = DEFAULT_THEME,
  currentPath = "",
  withLine = false,
  isSubscribeBtnShown = false,
}: NavbarProps) => {
  return (
    <nav className={styles[theme]}>
      {items.map(({ name, path }) => (
        <NavLink
          key={path}
          to={path}
          isActive={
            path === "/" ? currentPath === path : currentPath.includes(path)
          }
          theme={theme}
        >
          {name}
        </NavLink>
      ))}
      {withLine && <span className={styles.line}></span>}
      {isSubscribeBtnShown && (
        <div className={styles.subscribe}>
          <a href="/newsletter">
            Newsletter
            <Icon
              src={icons.emojiSparkles}
              widthSize="20px"
              indentLeft="10px"
            />
          </a>
        </div>
      )}
    </nav>
  );
};
