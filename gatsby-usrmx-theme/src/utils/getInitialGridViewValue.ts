import { STORAGE_GRID_VIEW_KEY } from "../constants";
import { GridViewValue } from "../types";

export const getInitialGridViewValue = (
  key: string,
  initialTheme: GridViewValue = "row"
) => {
  let theme: GridViewValue = initialTheme;

  try {
    const settedGridView = localStorage.getItem(
      `${STORAGE_GRID_VIEW_KEY}_${key}`
    ) as GridViewValue | null;

    if (settedGridView) {
      theme = settedGridView;
    }
  } catch (e) {}

  return theme;
};
