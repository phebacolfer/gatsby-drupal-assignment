// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from  '../pages/layout'
import Seo from '../pages/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage