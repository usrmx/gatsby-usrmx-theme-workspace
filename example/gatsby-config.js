require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    logoTitle: "L0G.DEV",
    title: "L0G.DEV 🦉",
    titleTemplate: "%s | l0g.dev 🦉",
    description:
      "Elit dolore enim exercitation aliquip commodo ex sit do aliquip incididunt adipisicing velit amet.",
    url: "https://localhost:8000",
    image: "",
    twitterUsername: "@w1zm8",
    substackLink: "https://l0gdev.substack.com",
    nav: [
      { path: "/", name: "Home" },
      { path: "/blog", name: "Blog" },
      { path: "/about", name: "About" },
      { path: "/contact", name: "Contact" },
    ],
    copyright: "© l0g.dev 2020",
    footerNav: [
      { path: "/blog", name: "Blog" },
      { path: "/rss", name: "RSS" },
      { path: "https://twitter.com/w1zm8", name: "Twitter" },
      { path: "https://github.com/w1zm8", name: "GitHub" },
    ],
    avatarSrc: "./static/images/avatar.jpg",
    themeRepositoryUrl: "https://github.com/w1zm8/gatsby-l0g-theme-workspace",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `l0g.dev blog`,
        short_name: `l0g.dev`,
        start_url: `/`,
        icon: "./static/images/favicon.png",
        display: `standalone`,
      },
    },
    "gatsby-plugin-ts-config",
    "gatsby-l0g-dev-theme",
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
        timeout: 3500,
      },
    },
  ],
};
