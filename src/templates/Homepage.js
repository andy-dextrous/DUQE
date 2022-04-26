import React from "react"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import { Layout } from "./../components/Layout"
import Hero from "../sections/page-specific/home/Hero"
import Perks from "../sections/page-specific/home/Perks"
import PerksText from "../sections/page-specific/home/PerksText"
import YourLegacy from "../sections/page-specific/home/YourLegacy"
import HowMuchDoesItCost from "../sections/page-specific/home/HowMuchDoesItCost"
import Vision from "../sections/page-specific/home/Vision"
import Benefits from "../sections/page-specific/home/Benefits"
import Access from "../sections/page-specific/home/Access"
import Agent from "../sections/page-specific/home/Agent"
import LatestBlogs from "../sections/page-specific/home/LatestBlogs"
import Contact from "../sections/page-specific/home/Contact"

function Homepage(props) {
  return (
    <Layout>
      <Seo props={props} />
      <Hero />
      <PerksText />
      <Perks />
      <YourLegacy />
      <HowMuchDoesItCost />
      <Vision />
      <Benefits />
      <Access />
      <Agent />
      <LatestBlogs />
      <Contact />
    </Layout>
  )
}

export default Homepage

export const pageQuery = graphql`
  query GET_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
    }
  }
`
