import React, { useReducer } from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import SectionWrapper from "../components/SectionWrapper"
import { Heading } from "@chakra-ui/react"
import data from "../sections/page-specific/cost-calculator/data.json"

function CostCalculator(props) {
  function reducer(state, action) {
    switch (action.type) {
      case "set":
        return { ...state, [action.key]: action.value }
    }
  }

  const [answers, dispatch] = useReducer(reducer, data)

  return (
    <Layout>
      <Seo props={props} />
      <SectionWrapper h="100vh" className="light">
        <Heading as="h1" onClick={dispatch({ type: "set", id: 1 })}>
          Cost Calculator
        </Heading>
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
