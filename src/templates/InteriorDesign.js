import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import ContentNarrow from "../sections/shared/ContentNarrow"
import ServicePageCategories from "../sections/shared/ServicePageCategories"
import HeroColorCTA from "../sections/shared/HeroColorCTA"

function InteriorDesign(props) {
  const ACFService = props.data.wpPage.ACF_servicesFields
  const ACFContent = props.data.wpPage.ACF_ContentNarrow
  const allWpPage = props.data.allWpPage
  const menuNumber = "03"

  return (
    <Layout noFooterCTA>
      <Seo props={props} />
      <HeroColorCTA
        data={ACFService}
        theme="blue"
        image="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto,w_1920/v1641470255/yeahka-office-jspa-design-17.jpg"
        CTAText="Book a consultation with our design team"
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

export default InteriorDesign

export const pageQuery = graphql`
  query GET_INTERIOR_DESIGN_PAGE($id: String!) {
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
