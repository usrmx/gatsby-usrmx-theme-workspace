import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { SEO } from "./Seo";

import { useTheme } from "../core";
import { NavItem } from "../types";

import "../../styles/main.css";

const query = graphql`
  query MainLayout {
    site {
      siteMetadata {
        logoTitle
        copyright
        nav {
          path
          name
        }
        footerNav {
          path
          name
        }
      }
    }
  }
`;

interface MainLayoutQuery {
  site: {
    siteMetadata: {
      logoTitle: string;
      copyright: string;
      nav: NavItem[];
      footerNav: NavItem[];
    };
  };
}

interface MainLayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
  const { theme } = useTheme();
  const {
    site: { siteMetadata },
  } = useStaticQuery<MainLayoutQuery>(query);

  return (
    <>
      <SEO theme={theme} title={title} />
      <div>
        <Header
          logoTitle={siteMetadata.logoTitle}
          navItems={siteMetadata.nav}
        />
        <MDXProvider components={{}}>{children}</MDXProvider>
      </div>
      <Footer
        copyright={siteMetadata.copyright}
        navItems={siteMetadata.footerNav}
        theme={theme}
      />
    </>
  );
};

export default MainLayout;
