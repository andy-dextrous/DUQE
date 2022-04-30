import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import Hero from "../sections/page-specific/agents/Hero"
import Why from "../sections/page-specific/agents/Why"
import Signup from "../sections/page-specific/agents/Signup"

function About(props) {
  return (
    <Layout>
      <Seo props={props} />
      <Hero />
      <Why />
      <Signup />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query GET_AGENTS_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
    }
  }
`
