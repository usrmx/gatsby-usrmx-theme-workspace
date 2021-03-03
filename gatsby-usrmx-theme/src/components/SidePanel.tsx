import React from "react";

import { Blurb } from "./Blurb";
import { Subscribing } from "./Subscribing";
import { SocialsBlock } from "./SocialsBlock";

import { useTheme } from "../core";

import { StyleModules } from "../style-modules";

const styles = StyleModules.sidePanel;

interface SidePanelProps {
  children?: React.ReactNode;
  convertkitEndpoint: string;
}

export const SidePanel = ({ children, convertkitEndpoint }: SidePanelProps) => {
  const { theme } = useTheme();

  return (
    <aside className={styles.panel}>
      <Blurb theme={theme} />
      <Subscribing theme={theme} convertkitEndpoint={convertkitEndpoint} />
      <SocialsBlock theme={theme} />
      {children}
    </aside>
  );
};
