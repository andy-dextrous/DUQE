import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import ContentNarrow from "../sections/shared/ContentNarrow"
import ServicePageCategories from "../sections/shared/ServicePageCategories"
import HeroColorCTA from "../sections/shared/HeroColorCTA"

function Strategy(props) {
  const ACFService = props.data.wpPage.ACF_servicesFields
  const ACFContent = props.data.wpPage.ACF_ContentNarrow
  const allWpPage = props.data.allWpPage

  return (
    <Layout noFooterCTA>
      <Seo props={props} />
      <HeroColorCTA
        data={ACFService}
        theme="green"
        image="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto,w_1920/v1650152866/greenery.jpg"
        CTAText="Speak to a workplace strategist today"
        menuNumber="02"
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

export default Strategy

export const pageQuery = graphql`
  query GET_STRATEGY_PAGE($id: String!) {
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
