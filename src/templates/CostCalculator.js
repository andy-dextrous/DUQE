import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import Form from "../components/forms/cost-calculator/Form"

function CostCalculator(props) {
  return (
    <Layout withSignup={false} withTopBar={false}>
      <Seo props={props} />
      <Form />
    </Layout>
  )
}

export default CostCalculator

export const pageQuery = graphql`
  query COST_CALCULATOR_QUERY {
    wpPage(isPostsPage: { eq: true }) {
      title
    }
  }
`
