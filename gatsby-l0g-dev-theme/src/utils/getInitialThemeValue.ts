import { DEFAULT_THEME, STORAGE_THEME_KEY } from "../constants";
import { ThemeValue } from "../types";

export const getInitialThemeValue = () => {
  let initialTheme: ThemeValue = DEFAULT_THEME;

  try {
    const settedTheme = localStorage.getItem(
      STORAGE_THEME_KEY
    ) as ThemeValue | null;

    if (settedTheme) {
      initialTheme = settedTheme;
    }
  } catch (e) {}

  return initialTheme;
};
