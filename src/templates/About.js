import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import Hero from "../sections/page-specific/about/Hero"
import IgnitingIdeas from "../sections/page-specific/about/IgnitingIdeas.js"
import Mission from "../sections/page-specific/about/Mission"
import WhyDuqe from "../sections/page-specific/about/WhyDuqe"
import Perks from "../sections/page-specific/about/Perks"
import DarkGroup from "../components/common/DarkGroup"

function About(props) {
  return (
    <Layout>
      <Seo props={props} />
      <DarkGroup>
        <Hero />
        <IgnitingIdeas />
        <Mission />
      </DarkGroup>
      <WhyDuqe />
      <Perks />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query GET_ABOUT_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
    }
  }
`
