import * as React from 'react'
import Layout from  '../pages/layout'
import Seo from '../pages/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage