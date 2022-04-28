import React from "react"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"
import { Seo } from "../components/seo/components/index"
import SectionWrapper from "../components/SectionWrapper"
import Hero from "../sections/shared/Hero"

function Default(props) {
  return (
    <Layout>
      <Seo props={props} />
      <Hero />
      <SectionWrapper h="100vh" className="light" />
    </Layout>
  )
}

export default Default

export const pageQuery = graphql`
  query GET_DEFAULT_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
    }
  }
`
