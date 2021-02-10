import React from "react";

import styles from "../../styles/container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <main className={styles.container}>{children}</main>;
};
