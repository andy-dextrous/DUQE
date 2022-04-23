import React from "react"
import { graphql } from "gatsby"
import SectionWrapper from "../../components/layouts/SectionWrapper"
import { Center, Heading, Box } from "@chakra-ui/react"

export const query = graphql`
  fragment HERO_SMALL_QUERY on WpPage {
    ACF_gravityFormId {
      formId
    }
    featuredImage {
      node {
        altText
        databaseId
        localFile {
          childImageSharp {
            gatsbyImageData
            original {
              height
              src
              width
            }
          }
        }
      }
    }
    title
  }
`

function HeroSmall({ data: { featuredImage, title } }) {
  const image = featuredImage?.node.localFile?.childImageSharp.gatsbyImageData

  return (
    <SectionWrapper
      fullW
      h="50vh"
      minH="unset"
      overlay
      bgImage={image ? image : null}
      className="dark-bg"
      borderBottomLeftRadius={["unset", "unset", "200"]}
      overflow="hidden"
      useGatsbyImage={true}
      eager={true}
    >
      <Center layerStyle="fillSpace">
        <Heading as="h1" color="white" fontSize={["4xl", "4xl", "5xl"]}>
          {title}
        </Heading>
      </Center>
      <Box
        position="absolute"
        display={["block", "block", "none"]}
        bg="white"
        left={0}
        bottom={0}
        w="100vw"
        h="5vh"
        px="9%"
        py={3}
        roundedTop="25px"
        zIndex="20"
      />
    </SectionWrapper>
  )
}

export default HeroSmall
