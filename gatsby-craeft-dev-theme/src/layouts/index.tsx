import React from "react";

import MainLayout from "./main-layout";
import { ThemeProvider } from "../core";

import "../../styles/main.css";

interface IndexLayoutProps {
  children?: React.ReactNode;
}

const IndexLayout = ({ children }: IndexLayoutProps) => {
  return (
    <ThemeProvider>
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  );
};

export default IndexLayout;
