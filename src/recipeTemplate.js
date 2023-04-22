import React from "react"
import { graphql } from "gatsby"

export default function RecipeTemplate({ data, pageContext }) {

  const slugifiedTitle = pageContext.slug.toLowerCase().replace(/\s+/g, '-')

  return (
    <div>
      <p>hello! {pageContext.slug} {slugifiedTitle}</p>
    </div>
  )
}

export const query = graphql`
query ($slug: String!) { 
  Drupal {
    nodeRecipes(after: { slugifiedTitle: { eq: $slug } }) {
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
`