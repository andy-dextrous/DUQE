import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import { VStack, Heading, Stack, Text, Container } from "@chakra-ui/react"

export const query = graphql`
  fragment HOW_WE_HELP_QUERY on WpPage {
    ACF_aboutFields {
      image2 {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

function Section4({ width, data }) {
  let image2 = null
  if (data.image2) {
    image2 = data.image2
  }

  return (
    <SectionWrapper
      position="relative"
      minH="60vh"
      h="unset"
      pb={16}
      sx={{
        ".tactic-portrait-image": {
          width: "full",
          height: "full",
          rounded: "2xl",
        },
      }}
    >
      <Container h="100%" maxW={`container.${width}` || "container.lg"}>
        <Stack
          direction={["column-reverse", "column-reverse", "row"]}
          spacing={[8, 12, 8, 8, 40, 40]}
          py={[12, 12, 20]}
        >
          <VStack
            flex="1"
            align="flex-start"
            position="relative"
            justify="center"
          >
            {image2 && (
              <GatsbyImage
                image={getImage(
                  image2.localFile.childImageSharp.gatsbyImageData
                )}
                alt={data.image2.altText}
                className="tactic-portrait-image"
                imgStyle={{
                  height: "100%",
                  width: "100%",
                }}
              />
            )}
          </VStack>
          <VStack flex="1" align="flex-start" spacing={8} justify="center">
            <Heading
              color="brandBlue.900"
              fontSize={["2xl", "3xl", "3xl", "3xl", "5xl"]}
            >
              How we can help
            </Heading>
            <Text>
              We offer an efficient, fully-integrated office solution that
              allows us to deliver faster and better results for our customers.
              From leasing the right space to building award-winning designs,
              our collaborative team brings expertise, strategy and connections
              to guide the best outcomes for you.
            </Text>
            <Text sx={{ strong: { color: "brandBlue.900" } }}>
              We deliver workspaces that stimulate engagement and productivity
              using an integrated process that
              <strong> saves our customers time, money and stress.</strong>
            </Text>
            <Text>
              It has been our pleasure to have assisted some of the biggest
              names in the industry. We are humbled by their support and pride
              ourselves on having helped facilitate the next phase of their
              business growth. The breadth and calibre of our clientele is
              testimony to our standing and reputation in the industry. We have
              worked tirelessly to understand client requirements, investigate
              opportunities and curate optimised space solutions - and we are
              happy to welcome you into the fold.
            </Text>
          </VStack>
        </Stack>
      </Container>
    </SectionWrapper>
  )
}

export default Section4
