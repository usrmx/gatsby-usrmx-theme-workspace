import React, { createContext, useContext, useState } from "react";

import { THEMES } from "../../constants";
import { ThemeValue } from "../../types";

type ThemeContextValue = {
  theme: ThemeValue;
  setTheme(newTheme: ThemeValue): void;
  toggleTheme(): void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: THEMES.light,
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeValue>(THEMES.light);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? THEMES.light : THEMES.dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
