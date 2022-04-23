import React from "react"
import { graphql } from "gatsby"
import { Box, VStack } from "@chakra-ui/react"
import ReactFullpage from "@fullpage/react-fullpage"

import Hero from "../sections/page-specific/what-we-do/Hero"
import Content from "../sections/shared/Content"
import Footer from "../components/footer/Footer"
import Nav from "../components/nav/Nav"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"

// Registers parallax effect
const pluginWrapper = () => {
  require("../../lib/fullpage.parallax.min.js")
}

function ServicesIndexPage(props) {
  const wpPage = props.data.wpPage
  const fullpageOptions = {
    licenseKey: "4B3CDC97-949542AC-B182298C-23275A2A",
    callbacks: ["onLeave", "afterLoad"],
    controlArrows: false,
    navigationPosition: "right",
    slidesNavigation: false,
    fixedElements: "aside",
    scrollingSpeed: 500,
    parallaxKey: "Z2F0c2J5anMuaW9fRXJwY0dGeVlXeHNZWGc9TTZB",
    parallax: true,
    parallaxOptions: { type: "cover", percentage: 100 },
  }

  return (
    <Layout usingFullPage smoothScroll={false}>
      <Seo props={props} />
      <Nav />
      <ReactFullpage
        {...fullpageOptions}
        pluginWrapper={pluginWrapper}
        render={() => {
          return (
            <Box id="fullpage-wrapper" sx={{ ".fp-bg": { zIndex: "-10" } }}>
              <Box className="section">
                <Hero overlay title="This is how we should show people..." />
                <Box
                  className="fp-bg"
                  bgImage="url('https://res.cloudinary.com/tactic-spaces/image/upload/v1644452632/20liucffairhelp013_ahocsi.jpg')"
                  backgroundSize="cover"
                  backgroundPosition="center"
                />
              </Box>
              <Box className="section">
                <Box
                  className="fp-bg"
                  bgImage="url('https://res.cloudinary.com/tactic-spaces/image/upload/v1644452548/zotovcochicago008_beqqpu.jpg')"
                  backgroundSize="cover"
                  backgroundPosition="center"
                />
                <Hero overlay title="Exactly what we do..." />
              </Box>
              <Box className="section">
                <Box
                  className="fp-bg"
                  bgImage="url('https://res.cloudinary.com/tactic-spaces/image/upload/v1644452625/01ko5a9648_lviqcl.jpg')"
                  backgroundSize="cover"
                  backgroundPosition="center"
                />
                <Hero overlay title="Because, yeah we could talk..." />
              </Box>
              <Box className="section">
                <Hero black title="But even 1,000,000 words isn't enough" />
              </Box>
              <Box className="section">
                <Box
                  className="fp-bg"
                  bgImage="url('https://res.cloudinary.com/tactic-spaces/image/upload/c_scale,q_auto:eco,w_1920/v1644452874/white-empty-room-3d-rendering-2021-12-09-18-27-37-utc_qfhet1.jpg')"
                  backgroundSize="cover"
                  backgroundPosition="center"
                />
                <Hero overlay title="To explain how we take this..." />
              </Box>
              <Box className="section">
                <Box
                  className="fp-bg"
                  bgImage="url('https://res.cloudinary.com/tactic-spaces/image/upload/v1644452645/broissin-toreooficinas-corporativasphoto-broissin-59_s2p6rs.jpg')"
                  backgroundSize="cover"
                  backgroundPosition="center"
                />
                <Hero overlay title="And turn it into this." />
              </Box>
              <Box className="section">
                <Content data={wpPage} />
              </Box>
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

export default ServicesIndexPage

export const pageQuery = graphql`
  query GET_SERVICE_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      content
    }
  }
`
