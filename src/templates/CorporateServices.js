import React from "react"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"
import { Seo } from "../components/seo/components/index"
import SectionWrapper from "../components/SectionWrapper"
import Hero from "../sections/page-specific/corporate-services/Hero"
import GetItDone from "../sections/page-specific/corporate-services/GetItDone"
import Benefits from "../sections/page-specific/home/Benefits"
import Apply from "../sections/page-specific/corporate-services/Apply"

function CorporateServices(props) {
  return (
    <Layout>
      <Seo props={props} />
      <Hero />
      <GetItDone />
      <Benefits />
      <Apply />
    </Layout>
  )
}

export default CorporateServices

export const pageQuery = graphql`
  query GET_SERVICES_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
    }
  }
`
