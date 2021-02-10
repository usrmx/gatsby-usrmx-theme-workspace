export const THEMES = {
  dark: "dark",
  light: "light",
} as const;

export const DEFAULT_THEME = THEMES.dark;

export const MAX_TAGS_COUNT = {
  block: 8, // in info-block that in side panel
  card: 6, // in post card
} as const;

export const MAX_POSTS_COUNT_HOME_PAGE = 6;

export const STORAGE_THEME_KEY = "_theme";
export const STORAGE_GRID_VIEW_KEY = "_gridview";

export const PAGES_ROUTES = {
  home: {
    index: "/",
  },
  blog: {
    index: "/blog",
    post: "/blog/article",
    tags: "/blog/tags",
    pagination: "/blog/page",
  },
  about: {
    index: "/about",
  },
  contact: {
    index: "/contact",
  },
};

export const POSTS_PER_PAGE = 6;
