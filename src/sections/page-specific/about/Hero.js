import React from "react"
import { graphql } from "gatsby"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import { Image } from "../../../components/images/Image"
import {
  Center,
  Heading,
  Text,
  VStack,
  Stack,
  Container,
} from "@chakra-ui/react"

export const query = graphql`
  fragment HERO_QUERY on WpPage {
    ACF_aboutFields {
      hero {
        image {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

function Hero({ data: { hero } }) {
  return (
    <SectionWrapper
      isFirstSection
      fullW
      p={0}
      m={0}
      pt={[12, 12, "unset"]}
      h={["80vh", "80vh", `80vh`]}
      background="brandYellow.600"
      minH={["60vh", "70vh", "50vh"]}
      overflowX={["hidden", "hidden", "visible"]}
      overflowY={["hidden", "hidden", "visible"]}
      borderBottomLeftRadius={["50", "50", "200"]}
      sx={{
        ".tactic-hero-image": {
          flex: ["1", "1", "1.6"],
          transform: ["none", "none", "translateY(115px)"],
          height: "100%",
          padding: [0, 0, 8],
          overflowX: "hidden !important",
          overflowY: "hidden !important",
          mt: [0, 0, "unset"],
          w: ["100%", "100%", "100%"],
          roundedTopLeft: ["unset", "unset", "100px"],
          roundedTopRight: ["50", "50", "0"],
        },
        "#tactic-hero-image": {
          roundedTopLeft: ["unset", "unset", "100px"],
          roundedTopRight: ["50", "50", "0"],
          borderBottomLeftRadius: ["50", "50", "unset"],
        },
      }}
    >
      <Stack
        direction={["column", "column", "row"]}
        align="center"
        pl={["unset", "unset", "9%"]}
        spacing={[2, 2, 8]}
        layerStyle="fillSpace"
        height="100%"
      >
        <Container maxW="container.lg" flex="1">
          <Center py={4} align="start" h="100%">
            <VStack
              spacing={[3, 3, 6]}
              py={4}
              pr={{ base: 0, "2xl": 12 }}
              align={["center", "center", "start"]}
              position="relative"
              flex={["1", "1", "3"]}
              textAlign={["center", "center", "left"]}
            >
              <Heading
                as="h4"
                textStyle="h4"
                fontSize="16px"
                fontWeight="semibold"
                color="white"
              >
                Who are we?
              </Heading>
              <Heading
                fontSize={["3xl", "4xl", "4xl", "4xl", "5xl", "6xl"]}
                color="brandBlue.900"
                maxWidth={["70%", "70%", "100%"]}
              >
                A cross-sector design team
              </Heading>

              <Text
                maxW={{ base: "100%", xl: "80%", "2xl": "60%" }}
                color="brandBlue.900"
              >
                Delivering end-to-end workplace solutions of the highest
                quality, on time and within budget.
              </Text>
            </VStack>
          </Center>
        </Container>
        <Image
          img={hero.image}
          loading="eager"
          className="tactic-hero-image"
          id="tactic-hero-image"
          objectFit="cover"
          imgStyle={{
            height: "100%",
            width: "100%",
          }}
          display="none"
        />
      </Stack>
    </SectionWrapper>
  )
}

export default Hero
