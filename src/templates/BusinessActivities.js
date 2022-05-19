import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import Hero from "../sections/page-specific/business-activities/Hero"
import Choose from "../sections/page-specific/business-activities/Choose"
import DarkGroup from "../components/common/DarkGroup"

function BusinessActivities(props) {
  return (
    <Layout>
      <Seo props={props} />
      <DarkGroup>
        <Hero />
        <Choose />
      </DarkGroup>
      {/* <Activities /> */}
    </Layout>
  )
}

export default BusinessActivities

export const pageQuery = graphql`
  query GET_ACTIVITIES_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
    }
  }
`
