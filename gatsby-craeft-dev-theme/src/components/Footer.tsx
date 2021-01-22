import React from "react";

import { NavItem, ThemeValue } from "../types";
import { THEMES } from "../constants";

import { Navbar } from "./Navbar";
import { Container } from "./Container";

import styles from "../../styles/footer.module.css";

interface FooterProps {
  theme?: ThemeValue;
  copyright: string;
  navItems: NavItem[];
}

export const Footer = ({
  theme = THEMES.light,
  copyright,
  navItems,
}: FooterProps) => {
  return (
    <footer className={styles[theme]}>
      <Container>
        <div className={styles.inner}>
          <section className="copyright">{copyright}</section>
          <Navbar items={navItems} theme={theme} />
          <section>
            theme{" "}
            <a
              className="underline theme-link"
              href="https://github.com/w1zm8/gatsby-craeft-theme-workspace"
            >
              craeft
            </a>{" "}
            for{" "}
            <a
              className="underline theme-link"
              href="https://www.gatsbyjs.com/"
            >
              Gatsby.js
            </a>
          </section>
        </div>
      </Container>
    </footer>
  );
};
