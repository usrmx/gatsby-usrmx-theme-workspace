import React from "react";
import { useTheme } from "../core";
import { InfoCard } from "./InfoCard";

interface GreetingProps {
  children?: React.ReactNode;
}

export const Greeting = ({ children }: GreetingProps) => {
  const { theme } = useTheme();

  return <InfoCard theme={theme}>{children}</InfoCard>;
};

export default Greeting;
