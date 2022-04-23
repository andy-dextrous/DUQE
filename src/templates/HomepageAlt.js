import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"

import Hero from "../sections/page-specific/home2/Hero"
import ValueProp from "../sections/page-specific/home2/ValueProp"
import ColumnReveal from "../sections/page-specific/home2/ColumnReveal"
import OneStopShop from "../sections/page-specific/home2/OneStopShop"
// import Polygon from "../sections/page-specific/home2/Polygon"
import Contact from "../sections/page-specific/home2/Contact"
import About from "../sections/page-specific/home2/About"

function HomepageAlt(props) {
  const ACF = props.data?.wpPage.ACF_homepage_fields

  return (
    <Layout>
      <Seo props={props} />
      <Hero data={ACF} />
      <ValueProp data={ACF} />
      <ColumnReveal />
      <OneStopShop />
      <About />
      {/* <Polygon /> */}
      <Contact />
    </Layout>
  )
}

export default HomepageAlt

export const pageQuery = graphql`
  query GET_HOME_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      ...SLIDE1_QUERY
      ...USP_QUERY
    }
  }
`
