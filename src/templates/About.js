import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"

function About(props) {
  return (
    <Layout>
      <Seo props={props} />
      <div>About page</div>
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
