import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { Box, VStack } from "@chakra-ui/react"
import ReactFullpage from "@fullpage/react-fullpage"

import { Seo } from "../components/seo/components/index"
import { Layout } from "./../components/Layout"
import Nav from "../components/nav/Nav"
import Footer from "../components/footer/Footer"
import SmallCardsRight from "../sections/page-specific/home/SmallCardsRight"
import WhereToInvest from "../sections/page-specific/home/WhereToInvest"
import InfographicRight from "../sections/page-specific/home/InfographicRight"
import FooterCTA from "../components/FooterCTA"
import HotSpots from "../sections/page-specific/home/HotSpots"
import HeroSlide1 from "../sections/page-specific/home/HeroSlide1"
import HeroSlide2 from "../sections/page-specific/home/HeroSlide2"
import HeroSlide3 from "../sections/page-specific/home/HeroSlide3"
import DidYouKnow from "../sections/page-specific/home/DidYouKnow"

function Homepage(props) {
  const whiteSections = [3, 6]
  const ACF = props.data.wpPage.ACF_homepage_fields
  const [isWhiteBackground, setIsWhiteBackground] = useState(false)
  const [currentSection, setCurrentSection] = useState("")

  const pluginWrapper = () => {
    require("../../lib/fullpage.parallax.min.js")
  }

  useEffect(() => {
    const body = document.querySelector("body")
    isWhiteBackground
      ? body.classList.add("dark")
      : body.classList.remove("dark")
  }, [isWhiteBackground])

  const fullpageOptions = {
    licenseKey: "4B3CDC97-949542AC-B182298C-23275A2A",
    callbacks: ["onLeave", "afterLoad"],
    navigation: true,
    controlArrows: false,
    navigationPosition: "right",
    slidesNavigation: false,
    fixedElements: "aside",
    scrollingSpeed: 500,
    parallaxKey: "Z2F0c2J5anMuaW9fRXJwY0dGeVlXeHNZWGc9TTZB",
    parallax: true,
    parallaxOptions: { type: "cover", percentage: 100 },
    afterLoad: function (_, destination) {
      if (whiteSections.includes(destination.index)) {
        setIsWhiteBackground(true)
      } else {
        setIsWhiteBackground(false)
      }
      setCurrentSection(destination.index)
    },
    afterSlideLoad: function (section, origin, destination) {
      setCurrentSection(destination.anchor)
    },
  }

  return (
    <Layout
      usingFullPage
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
      smoothScroll={false}
    >
      <Seo props={props} />
      <Nav />
      <ReactFullpage
        {...fullpageOptions}
        pluginWrapper={pluginWrapper}
        render={() => {
          return (
            <Box id="fullpage-wrapper">
              <HeroSlide1 data={ACF} />
              <HeroSlide2 data={ACF} />
              <HeroSlide3 data={ACF} />
              <InfographicRight />
              <WhereToInvest />
              <HotSpots data={ACF} />
              <SmallCardsRight data={ACF} />
              <DidYouKnow data={ACF} />
              <FooterCTA />
              <VStack
                className="section fp-auto-height"
                align="end"
                justify="end"
                spacing={0}
                id="footerWrap"
              >
                <Footer />
              </VStack>
            </Box>
          )
        }}
      />
    </Layout>
  )
}

export default Homepage

const pageQuery = graphql`
  query GET_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      ...SLIDE1_QUERY
      ...SLIDE2_QUERY
      ...SLIDE3_QUERY
      ...CARDS_QUERY
      ...HOTSPOT_QUERY
      ...DID_YOU_KNOW_QUERY
    }
  }
`
