import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import Context from "../components/forms/cost-calculator/Context"
import Form from "../components/forms/cost-calculator/Form"
import Sidebar from "../components/forms/cost-calculator/Sidebar"
import Columns from "../components/forms/cost-calculator/ui/Columns"
import Section from "../components/forms/cost-calculator/ui/Section"
import Cost from "../components/forms/cost-calculator/Cost"

function CostCalculator(props) {
  return (
    <Layout withTopBar={false}>
      <Seo props={props} />
      <Context>
        <Section>
          <Columns>
            <Form />
            <Sidebar />
            <Cost />
          </Columns>
        </Section>
      </Context>
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
