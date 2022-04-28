import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import Hero from "../sections/page-specific/pricing/Hero"
import Cards from "../sections/page-specific/pricing/Cards"
import SectionWrapper from "../components/SectionWrapper"
import Calculate from "../sections/page-specific/pricing/Calculate"

function Pricing(props) {
  return (
    <Layout>
      <Seo props={props} />
      <Hero />
      <Cards />
      <Calculate />
    </Layout>
  )
}

export default Pricing

export const pageQuery = graphql`
  query GET_PRICING_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
    }
  }
`
