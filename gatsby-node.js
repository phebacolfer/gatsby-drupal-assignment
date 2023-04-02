exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
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
    data.Drupal.nodeRecipes.forEach(node => {
      const slug = nodes.title.toLowerCase().replace(/\s+/g, '-')
      console.log(slug)
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/recipeTemplate.js`),
        context: { slug: slug },
      })
    })
  }

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}