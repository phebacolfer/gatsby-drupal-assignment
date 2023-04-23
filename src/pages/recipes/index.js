import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../pages/layout'
import Seo from '../../pages/seo'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'

const RecipePage = ({ data }) => {
    return (
      <Layout pageTitle="Recipes">
        {
          data.Drupal.nodeRecipes.nodes.map(node => (
            <article key={node.title}>
              <h2>
                <Link to={`/recipes${node.path}`}>
                  {node.title}
                </Link>
              </h2>
              <img src={`${node.mediaImage.mediaImage.url}`} alt="" width="500"></img>
              <p>Posted: {node.created}</p>
            </article>
          ))
        }
      </Layout>
    )
  }
  
  export const query = graphql`
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
      }
    }
  `
  
  
  export const Head = () => <Seo title="My Recipes" />
  
  export default RecipePage