import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import ContentNarrow from "../sections/shared/ContentNarrow"
import ServicePageCategories from "../sections/shared/ServicePageCategories"
import HeroColorCTA from "../sections/shared/HeroColorCTA"

function Construction(props) {
  const ACFService = props.data.wpPage.ACF_servicesFields
  const ACFContent = props.data.wpPage.ACF_ContentNarrow
  const allWpPage = props.data.allWpPage
  const menuNumber = "04"

  return (
    <Layout noFooterCTA>
      <Seo props={props} />
      <HeroColorCTA
        data={ACFService}
        theme="green"
        image="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto,w_1920/v1649914286/drill-driver-tool-on-scaffolding-2021-08-26-23-04-18-utc.jpg"
        CTAText="Speak to our construction team"
        menuNumber={menuNumber}
      />
      <ContentNarrow
        data={ACFContent}
        theme="yellow"
        mt={[0, 0, 20]}
        pt={[8, 8, 40]}
        width="lg"
      />
      <ServicePageCategories
        data={allWpPage}
        sliderTitle="All services"
        currentUri={props.uri}
        pb={20}
      />
    </Layout>
  )
}

export default Construction

export const pageQuery = graphql`
  query GET_CONSTRUCTION_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      ...SERVICE_SLIDER_QUERY
      ...CONTENT_NARROW_QUERY
      ...IMAGE_REVEAL_QUERY
      ...QA_QUERY
    }
    allWpPage(filter: { wpParent: { node: { slug: { eq: "what-we-do" } } } }) {
      ...GET_CATEGORIES_QUERY
    }
  }
`
