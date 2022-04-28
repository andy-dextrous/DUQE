import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import SectionWrapper from "../components/SectionWrapper"
import Hero from "../sections/shared/Hero"

function About(props) {
  return (
    <Layout>
      <Seo props={props} />
      <Hero />
      <SectionWrapper h="100vh" className="light" />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query GET_ABOUT_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
    }
  }
`
