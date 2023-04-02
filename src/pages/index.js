import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../pages/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../pages/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to my Gatsby JS Drupal Class Assignment!
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage