import React from "react";

import styles from "../../styles/search-field.module.css";

export const SearchField = () => {
  return (
    <input
      className={styles.field}
      type="search"
      placeholder="Search for post..."
      name="search"
    />
  );
};
