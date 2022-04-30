import React from "react"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"
import { Seo } from "../components/seo/components/index"
import SectionWrapper from "../components/SectionWrapper"
import Hero from "../sections/shared/Hero"
import { SmartImage } from "../components/SmartImage"
import { Box, Image } from "@chakra-ui/react"

function Default(props) {
  return (
    <Layout>
      <Seo props={props} />
      <Hero />
      <SectionWrapper h="100vh" className="light">
        <SmartImage
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651107901/Rectangle_4.png"
          parallax
          width="400px"
          height="500px"
        />
      </SectionWrapper>
    </Layout>
  )
}

export default Default

export const pageQuery = graphql`
  query GET_DEFAULT_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
    }
  }
`
