import React from "react"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import { Layout } from "./../components/Layout"
import Hero from "../sections/page-specific/home/Hero"

function Homepage(props) {
  return (
    <Layout>
      <Seo props={props} />
      <Hero />
    </Layout>
  )
}

export default Homepage

export const pageQuery = graphql`
  query GET_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
    }
  }
`
