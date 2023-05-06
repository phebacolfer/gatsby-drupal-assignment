/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  pathPrefix: "/gatsby-drupal-assignment",
  siteMetadata: {
    title: "Drupal Cooking Blog",
    siteUrl: "https://phebacolfer.github.io/gatsby-drupal-assignment/"
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
        options: {
          typeName: "DrupalGraqhQL",
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
