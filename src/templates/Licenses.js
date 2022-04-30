import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import Hero from "../sections/page-specific/licenses/Hero"
import TradeLicenses from "../sections/page-specific/licenses/TradeLicenses"
import Requirements from "../sections/page-specific/licenses/Requirements"
import DarkGroup from "../components/common/DarkGroup"

function Licenses(props) {
  return (
    <Layout>
      <Seo props={props} />
      <DarkGroup>
        <Hero />
        <TradeLicenses />
      </DarkGroup>
      <Requirements />
    </Layout>
  )
}

export default Licenses

export const pageQuery = graphql`
  query GET_LICENSES_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
    }
  }
`
