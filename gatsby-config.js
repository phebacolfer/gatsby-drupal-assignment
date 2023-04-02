/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "My Cooking Blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
        options: {
          // This type will contain remote schema Query type
          typeName: "DrupalGraqhQL",
          // This is field under which it's accessible
          fieldName: "Drupal",
          url: "https://csc496f22demo.tldr.dev/graphql",
        },
      },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "path-browserify",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
  ],
};