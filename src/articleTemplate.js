import * as React from "react"
import Layout from './pages/layout'
import { useStaticQuery, graphql } from "gatsby"
import {article, img, intro} from './articleTemplate.module.css'

export default function ArticleTemplate({ data, pageContext }) {

  const slug = pageContext.slug;

  const query = useStaticQuery(graphql`
    query {
      Drupal {
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
  `);

  const filteredNodes = query.Drupal.nodeArticles.nodes.filter(node => node.path === slug);

  return (
    <>
      <Layout>
      </Layout>
      <div className={article}>
        {filteredNodes.map(node => (
          <div>
            <div className={intro}>
              <h1>{node.title}</h1> 
              <img src={node.mediaImage.mediaImage.url} className={img} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: node.body.value }}></div>
          </div>
        ))}
      </div>
    </>
  );
}