import React from "react";
import { ThemeValue } from "../types";

interface ThemeSwitcherProps {
  theme?: ThemeValue;
  onToggle?(): void;
}

export const ThemeSwitcher = ({ theme, onToggle }: ThemeSwitcherProps) => {
  return (
    <button className="no-style-btn" onClick={onToggle}>
      {theme === "dark" ? "☀️" : "🌒"}
    </button>
  );
};
