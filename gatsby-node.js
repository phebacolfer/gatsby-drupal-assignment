const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const recipeTemplate = path.resolve(`src/recipeTemplate.js`)
  const articleTemplate = path.resolve(`src/articleTemplate.js`)

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
            path
          }
        }
        nodeArticles(first: 10) {
          nodes {
            title
            mediaImage {
              mediaImage {
                url
              }
            }
            body {
              value
            }
            path
          }
        }
      }
    }
  `)

  result.data.Drupal.nodeRecipes.nodes.forEach(node => {
    const slug = node.path
    createPage({
      path: `/recipes${slug}`,
      component: recipeTemplate,
      context: {
        slug: slug
      },
    })
  })

  result.data.Drupal.nodeArticles.nodes.forEach(node => {
    const slug = node.path
    createPage({
      path: `/articles${slug}`,
      component: articleTemplate,
      context: {
        slug: slug
      },
    })
  })
}