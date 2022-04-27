import React from "react"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"
import { Seo } from "../components/seo/components/index"

function Default(props) {
  return (
    <Layout>
      <Seo props={props} />
      <div>Default</div>
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
