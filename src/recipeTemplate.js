import * as React from "react"
import Layout from './pages/layout'
import {recipe, img, intro, basicInfo} from './recipeTemplate.module.css'
import { useStaticQuery, graphql } from "gatsby"

export default function RecipeTemplate({ data, pageContext }) {

  const slug = pageContext.slug;

  const query = useStaticQuery(graphql`
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
            numberOfServings
            cookingTime
            difficulty
            preparationTime
          }
        }
      }
    }
  `);

  const filteredNodes = query.Drupal.nodeRecipes.nodes.filter(node => node.path === slug);

  return (
    <>
      <Layout>
      </Layout>
      <div className={recipe}>
        {filteredNodes.map(node => (
          <div>
            <div className={intro}>
              <h1>{node.title}</h1> 
              <img src={node.mediaImage.mediaImage.url} className={img} />
            </div>
            <div className={basicInfo}>
            <p>Cooking time: {node.cookingTime}</p>
            <p>Preparation time: {node.preparationTime}</p>
            <p>Number of servings: {node.numberOfServings}</p>
            <p>Difficulty: {(node.difficulty).toUpperCase()}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: node.recipeInstruction.value }}></div>
          </div>
        ))}
      </div>
    </>
  );
}