import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import SectionWrapper from "../components/SectionWrapper"
import { Heading } from "@chakra-ui/react"

function CostCalculator(props) {
  return (
    <Layout>
      <Seo props={props} />
      <SectionWrapper h="100vh" className="light">
        <Heading as="h1">Cost Calculator</Heading>
      </SectionWrapper>
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
