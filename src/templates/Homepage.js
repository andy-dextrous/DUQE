import React, { useEffect, useState } from "react"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import { Layout } from "./../components/Layout"
import { gsap } from "../gsap"
import Hero from "../sections/page-specific/home/Hero"
import Perks from "../sections/page-specific/home/Perks"
import PerksText from "../sections/page-specific/home/PerksText"
import YourLegacy from "../sections/page-specific/home/YourLegacy"
import Vision from "../sections/page-specific/home/Vision"
import Benefits from "../sections/page-specific/home/Benefits"
import Access from "../sections/page-specific/home/Access"
import Agent from "../sections/page-specific/home/Agent"
import LatestBlogs from "../sections/page-specific/home/LatestBlogs"
import Contact from "../sections/page-specific/home/Contact"
import DarkGroup from "../components/common/DarkGroup"
import CostSections from "../sections/page-specific/home/CostSections"

function Homepage(props) {
  const [animating, setAnimating] = useState(true)
  const [masterTimeline, setMasterTimeline] = useState(
    gsap
      .timeline({ onComplete: () => setAnimating(false) })
      .addLabel("introStart", 0)
      .addLabel("zoom", 2)
      .addLabel("heroContentStart", 3)
      .addLabel("hideOverlay", 4)
  )

  useEffect(() => {
    console.log(masterTimeline)
  })

  return (
    <Layout
      isHomePage
      masterTimeline={masterTimeline}
      animating={animating}
      index={0}
    >
      <Seo props={props} />
      <DarkGroup>
        <Hero
          masterTimeline={masterTimeline}
          index={1}
          animating={animating}
          setMasterTimeline={setMasterTimeline}
        />
        <PerksText />
        <Perks />
      </DarkGroup>
      <YourLegacy />
      <CostSections />
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
