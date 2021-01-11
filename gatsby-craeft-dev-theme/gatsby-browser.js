import React from "react";
import { ThemeProvider } from "./src/core";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
