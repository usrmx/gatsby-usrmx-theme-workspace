const fs = require("fs");
const {
  CONTENT_PATHS,
  CONTENT_REQUIRED_FILES,
  TEMPLATES,
  PAGES_ROUTES,
  POSTS_PER_PAGE,
} = require("./options");

// replace with "src/utils/getTagsFromPosts.ts"
const getTagsFromPosts = (posts) =>
  posts
    .map(
      ({
        node: {
          frontmatter: { tags },
        },
      }) => tags
    )
    .filter(Boolean)
    .flat();

const getTagsCount = (tags) =>
  tags.reduce((acc, tag) => ({ ...acc, [tag]: (acc[tag] || 0) + 1 }), {});

const createRequiredFiles = (path, reporter, requiredFiles = {}) => {
  const requiredFilesNames = Object.keys(requiredFiles);

  if (!requiredFilesNames.length) {
    return;
  }

  requiredFilesNames.forEach((fileName) => {
    const { ext, content } = requiredFiles[fileName];

    if (!ext || !content) {
      return;
    }

    const filePath = `${path}/${fileName}.${ext}`;

    if (fs.existsSync(filePath)) {
      return;
    }

    reporter.info(`creating the ${filePath} file`);
    fs.writeFileSync(filePath, content);
  });
};

const createNonExistentFolder = (path, reporter) => {
  if (!fs.existsSync(path)) {
    reporter.info(`creating the ${path} directory`);
    fs.mkdirSync(path, { recursive: true });
  }
};

const onPreBootstrap = ({ reporter }) => {
  createNonExistentFolder(
    CONTENT_PATHS.site,
    reporter,
    CONTENT_REQUIRED_FILES.site
  );
  createRequiredFiles(
    CONTENT_PATHS.site,
    reporter,
    CONTENT_REQUIRED_FILES.site
  );
  createNonExistentFolder(CONTENT_PATHS.posts, reporter);
};

const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // ------------ CREATING PAGES OF POSTS IN BLOG ------------

  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/src/content/blog/" } }) {
        edges {
          node {
            id
            frontmatter {
              slug
              tags
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: `${PAGES_ROUTES.blog.post}/${node.frontmatter.slug}`,
      component: TEMPLATES.postPage,
      context: { id: node.id },
    });
  });

  // ------------ CREATING PAGE OF ALL TAGS ------------

  const allTags = getTagsFromPosts(posts);
  const tagPostsCount = getTagsCount(allTags);
  const tags = Array.from(new Set(allTags).values());

  createPage({
    path: PAGES_ROUTES.blog.tags,
    component: TEMPLATES.tagsPage,
    context: {
      tags,
      tagPostsCount,
    },
  });

  // ------------ CREATING PAGES OF TAGS POSTS ------------

  tags.forEach((tag) => {
    const tagPagesCount = Math.ceil(tagPostsCount[tag] / POSTS_PER_PAGE);

    Array.from({ length: tagPagesCount }).forEach((_, index) => {
      const isFirstPage = index === 0;
      const currentPage = index + 1;
      const component = TEMPLATES.tagPostsPage;
      const context = {
        tag,
        limit: POSTS_PER_PAGE,
        skip: index * POSTS_PER_PAGE,
        currentPage,
        pagesCount: tagPagesCount,
      };

      if (isFirstPage) {
        createPage({
          path: `${PAGES_ROUTES.blog.tags}/${tag}`,
          component,
          context,
        });
        return;
      }

      createPage({
        path: `${PAGES_ROUTES.blog.tags}/${tag}/page/${currentPage}`,
        component,
        context,
      });
    });
  });

  // ------------ CREATING PAGINATION ------------

  const pagesCount = Math.ceil(posts.length / POSTS_PER_PAGE);

  Array.from({ length: pagesCount }).forEach((_, index) => {
    const isFirstPage = index === 0;
    const currentPage = index + 1;

    if (isFirstPage) {
      return;
    }

    createPage({
      path: `${PAGES_ROUTES.blog.pagination}/${currentPage}`,
      component: TEMPLATES.postsPage,
      context: {
        limit: POSTS_PER_PAGE,
        skip: index * POSTS_PER_PAGE,
        currentPage,
        pagesCount,
      },
    });
  });
};

module.exports = {
  onPreBootstrap,
  createPages,
};
