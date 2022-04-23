import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import ContentNarrow from "../sections/shared/ContentNarrow"
import HeroColorCTA from "../sections/shared/HeroColorCTA"
import ServicePageCategories from "../sections/shared/ServicePageCategories"

function Advisory(props) {
  const ACFService = props.data.wpPage.ACF_servicesFields
  const ACFContent = props.data?.wpPage?.ACF_ContentNarrow
  const allWpPage = props.data.allWpPage
  const menuNumber = "01"

  return (
    <Layout noFooterCTA startDark>
      <Seo props={props} />
      <HeroColorCTA
        data={ACFService}
        theme="blue"
        image="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto,w_1200/v1650238187/modern-skyscrapers-from-low-angle-view-2021-08-26-16-33-16-utc.jpg"
        menuNumber={menuNumber}
        pageName={props.data.wpPage.title}
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

export default Advisory

export const pageQuery = graphql`
  query GET_ADVISORY_PAGE($id: String!) {
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
