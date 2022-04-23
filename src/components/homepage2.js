import React from "react"
import { graphql } from "gatsby"
import { Layout } from "./Layout"
import { Seo } from "./seo/components"
import Hero from "../sections/page-specific/home2/Hero"
import Polygon from "../sections/page-specific/home2/Polygon"
import HeroFullColor from "../sections/shared/HeroFullColor"
import { Box } from "@chakra-ui/react"
import ColumnReveal from "../sections/shared/ColumnReveal"
import ContactForm from "../sections/page-specific/contact/ContactForm"

function Homepage2(props) {
  return (
    <Layout noFooterCTA smoothScroll>
      <Seo props={props} />
      <Box bg="brandBlue.900">
        <Hero videoSrc="https://www.archway.com.au/wp-content/uploads/2021/11/Home-Banner-Video.mp4" />
        <HeroFullColor />
      </Box>
      <ColumnReveal />
      {/* <SectionWrapper /> */}
      <Polygon />
      <ContactForm />
    </Layout>
  )
}

export default Homepage2

const pageQuery = graphql`
  query HOME_ALT_QUERY {
    wpPage(isFrontPage: { eq: true }) {
      title
      uri
      slug
      date(formatString: "DD MMMM YYYY")
      content
      seo {
        readingTime
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(transformOptions: { cropFocus: CENTER })
            }
          }
        }
      }
      id
      link
      status
    }
  }
`
