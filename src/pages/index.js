import * as React from 'react'
import Layout from '../pages/layout'
import Seo from '../pages/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to my Gatsby JS Drupal Class Assignment!
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage