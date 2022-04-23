import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"

// import Hero from "../sections/page-specific/about/Hero"
import Section2 from "../sections/page-specific/about/Section2"
import Section3 from "../sections/page-specific/about/Section3"
import Section4 from "../sections/page-specific/about/Section4"
import TheTeam from "../sections/page-specific/about/TheTeam"
import Logos from "../sections/page-specific/about/Logos"

function About(props) {
  const ACF = props.data.wpPage.ACF_aboutFields

  return (
    <Layout startDark noFooterCTA darkButton>
      <Seo props={props} />
      <TheTeam />
      <Logos />
      <Section2 />
      <Section3 />
      <Section4 data={ACF} />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query GET_ABOUT_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      content
      ...HERO_QUERY
      ...HOW_WE_HELP_QUERY
    }
  }
`
