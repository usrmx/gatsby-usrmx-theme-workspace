import React from "react";
import Helmet from "react-helmet";
import { MDXProvider } from "@mdx-js/react";

import { Header } from "../components";
import { useTheme } from "../core";

import "../../styles/main.css";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { theme } = useTheme();

  return (
    <>
      <Helmet>
        <body className={`${theme}-theme`}></body>
      </Helmet>
      <Header />
      <div className="container">
        <br />
        <br />
        <section>
          <MDXProvider components={{}}>{children}</MDXProvider>
        </section>
      </div>
    </>
  );
};

export default MainLayout;
