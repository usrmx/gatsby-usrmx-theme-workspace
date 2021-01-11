import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

import { useTheme } from "../core";
import { Navbar } from "./Navbar";

import headerStyles from "../../styles/header.module.css";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  const navItems = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/blog",
      title: "Blog",
    },
    {
      to: "/about",
      title: "About",
    },
    {
      to: "/contact",
      title: "Contact",
    },
  ];

  return (
    <header className={headerStyles[theme]}>
      <div className="container">
        <div className={headerStyles.inner}>
          <Link to="/" className="site-logo">
            craeft.dev
          </Link>
          <div className={headerStyles.row}>
            <Navbar items={navItems} currentPath={pathname} theme={theme} />
            <button className="theme-switcher" onClick={toggleTheme}>
              {theme === "dark" ? "☀️" : "🌒"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
