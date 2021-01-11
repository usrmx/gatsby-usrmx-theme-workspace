const CONTENT_PATHS = {
  site: "src/content/site",
  posts: "src/content/posts",
};
const CONTENT_NAMES = {
  site: "content",
  posts: "posts",
};
const CONTENT_REQUIRED_FILES = {
  site: {
    greeting: {
      ext: "mdx",
      content: `---\nkey: "greeting"\n---`,
    },
    about: {
      ext: "mdx",
      content: `---\nkey: "about"\n---`,
    },
  },
};

module.exports = {
  CONTENT_PATHS,
  CONTENT_NAMES,
  CONTENT_REQUIRED_FILES,
};
