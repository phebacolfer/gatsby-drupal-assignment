const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const recipeTemplate = path.resolve(`src/recipeTemplate.js`)

  const result = await graphql(`
  query {
    Drupal {
      nodeRecipes(first: 10, sortKey: CREATED_AT) {
        nodes {
          title
          recipeInstruction {
            value
          }
          mediaImage {
            mediaImage {
              url
            }
          }
          created
        }
      }
    }
  }
  `)

  result.data.Drupal.nodeRecipes.nodes.forEach(node => {
    const slug = node.title.toLowerCase().replace(/\s+/g, '-')
    createPage({
      path: `/recipes/${slug}`,
      component: recipeTemplate,
      context: {
        slug: slug
      },
    })
  })
}