import React from "react";

import styles from "../../styles/page-grid.module.css";

interface PageGridProps {
  children: React.ReactNode;
}

export const PageGrid = ({ children }: PageGridProps) => {
  return <div className={styles.page}>{children}</div>;
};
