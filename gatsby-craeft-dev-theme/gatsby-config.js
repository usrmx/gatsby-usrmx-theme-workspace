const { CONTENT_NAMES, CONTENT_PATHS } = require("./options");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: CONTENT_PATHS.posts,
        name: CONTENT_NAMES.posts,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: CONTENT_PATHS.site,
        name: CONTENT_NAMES.site,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
};
