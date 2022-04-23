import React, { useRef, useEffect, useContext } from "react"
import { graphql, Link } from "gatsby"
import { gsap } from "../../../gsap"
import { CurrentSectionContext } from "../../../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import {
  Center,
  Stack,
  Heading,
  Button,
  VStack,
  Text,
  HStack,
  AspectRatio,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react"

export const query = graphql`
  fragment CARDS_QUERY on WpPage {
    ACF_homepage_fields {
      cutouts {
        image1 {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        image2 {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        image3 {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        image4 {
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

function SmallCardsRight({ data: { cutouts: data } }) {
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  const buttonColor = useBreakpointValue(["yellow", "yellow", "green"])
  const leftTrack = useRef()
  const rightTrack = useRef()
  const scrollAnimation = useRef(null)
  const { currentSection } = useContext(CurrentSectionContext)

  const cardData = [
    {
      image: data.image1.localFile.childImageSharp.gatsbyImageData,
      color: "brandGreen.600",
    },
    {
      image: data.image2.localFile.childImageSharp.gatsbyImageData,
      color: "brandBlue.400",
    },
    {
      image: data.image3.localFile.childImageSharp.gatsbyImageData,
      color: "brandYellow.600",
    },
    {
      image: data.image4.localFile.childImageSharp.gatsbyImageData,
      color: "brandChestnut.300",
    },

    {
      image: data.image1.localFile.childImageSharp.gatsbyImageData,
      color: "brandBlue.400",
    },
    {
      image: data.image2.localFile.childImageSharp.gatsbyImageData,
      color: "brandGreen.600",
    },

    {
      image: data.image3.localFile.childImageSharp.gatsbyImageData,
      color: "brandYellow.600",
    },

    {
      image: data.image4.localFile.childImageSharp.gatsbyImageData,
      color: "brandGreen.600",
    },
    {
      image: data.image1.localFile.childImageSharp.gatsbyImageData,
      color: "brandChestnut.300",
    },
  ]
  const cardData2 = [
    {
      image: data.image3.localFile.childImageSharp.gatsbyImageData,
      color: "brandBlue.400",
    },
    {
      image: data.image4.localFile.childImageSharp.gatsbyImageData,
      color: "brandYellow.600",
    },
    {
      image: data.image1.localFile.childImageSharp.gatsbyImageData,
      color: "brandGreen.600",
    },
    {
      image: data.image2.localFile.childImageSharp.gatsbyImageData,
      color: "brandChestnut.300",
    },
    {
      image: data.image3.localFile.childImageSharp.gatsbyImageData,
      color: "brandYellow.600",
    },
    {
      image: data.image4.localFile.childImageSharp.gatsbyImageData,
      color: "brandBlue.400",
    },
    {
      image: data.image1.localFile.childImageSharp.gatsbyImageData,
      color: "brandGreen.600",
    },
    {
      image: data.image2.localFile.childImageSharp.gatsbyImageData,
      color: "brandChestnut.300",
    },
  ]

  useEffect(() => {
    if (scrollAnimation.current) return
    const slowScroll = gsap.timeline({
      defaults: { yoyo: "true", repeat: -1, duration: 300 },
    })
    slowScroll
      .to(leftTrack.current, {
        y: "-200vh",
      })
      .to(
        rightTrack.current,
        {
          y: "200vh",
        },
        0
      )
    scrollAnimation.current = slowScroll
  }, [])

  useEffect(() => {
    if (currentSection === 6) {
      scrollAnimation.current.play()
    }
    if (!scrollAnimation.current._ps && currentSection !== 6) {
      scrollAnimation.current.restart()
      scrollAnimation.current.pause()
    }
  }, [currentSection])

  return (
    <Box className="section">
      <SectionWrapper
        h="100vh"
        overflow="hidden"
        className="white"
        pt={[0, 0, "unset"]}
      >
        <Stack
          direction={["column", "column", "row"]}
          width="full"
          height="full"
          align="center"
          justify={["flex-start", "flex-start", "center"]}
          wrap="nowrap"
          spacing={[0, 0, 32]}
        >
          <Center
            py={4}
            align="start"
            flex="1"
            h={["unset", "unset", "100%"]}
            bg={["white", "white", "unset"]}
            maxH={["40vh", "40vh", "unset"]}
            boxShadow={[
              "0px 0px 50px 23px #FFFFFF,0px 0px 50px 23px #FFFFFF,0px 0px 50px 23px #FFFFFF",
              "0px 0px 50px 23px #FFFFFF,0px 0px 50px 23px #FFFFFF,0px 0px 50px 23px #FFFFFF",
              "unset",
            ]}
          >
            <VStack
              spacing={3}
              py={4}
              pr={[0, 0, 32]}
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
              >
                The best part?
              </Heading>
              <Heading fontSize={["2xl", "3xl", "3xl", "3xl", "4xl"]}>
                Increased productivity is made of 1% gains
              </Heading>
              <Heading
                textStyle="fadeTextLeft"
                fontSize={["25vw", "25vw", "12vw"]}
              >
                05
              </Heading>
              <Text>
                And it doesn't take many 1% gains before a Tactic Space pays for
                itself.
              </Text>
              <Link to="/what-we-do">
                <Button variant={buttonColor} size={buttonSize}>
                  How we work
                </Button>
              </Link>
            </VStack>
          </Center>
          <HStack
            flex="1"
            spacing={[0, 0, 6]}
            wrap="nowrap"
            width={["100%", "100%", "unset"]}
            position={["absolute", "absolute", "relative"]}
            zIndex={[-1, -1, 0]}
          >
            {/* Left track */}
            <VStack
              w="50%"
              spacing={[12, 12, 6]}
              px={[6, 6, 0]}
              h="100vh"
              sx={{ transform: "translateY(50px)" }}
              ref={leftTrack}
              justify="flex-end"
              alignSelf="flex-end"
            >
              {cardData.map((card, i) => {
                return (
                  <AspectRatio ratio={3 / 4} w="100%" key={i}>
                    <Center bg={card.color} rounded="20px" py={6}>
                      <GatsbyImage
                        width="100%"
                        height="100%"
                        loading="lazy"
                        image={getImage(card.image)}
                        alt="card"
                      />
                    </Center>
                  </AspectRatio>
                )
              })}
            </VStack>
            {/* Right track */}
            <VStack
              w="50%"
              spacing={[12, 12, 6]}
              px={[6, 6, 0]}
              sx={{ transform: "translateY(-200px)" }}
              ref={rightTrack}
            >
              {cardData2.map((card, i) => {
                return (
                  <AspectRatio ratio={3 / 4} w="100%" key={i}>
                    <Center bg={card.color} rounded="20px" py={6}>
                      <GatsbyImage
                        width="100%"
                        height="100%"
                        loading="lazy"
                        alt="card"
                        image={getImage(card.image)}
                      />
                    </Center>
                  </AspectRatio>
                )
              })}
            </VStack>
          </HStack>
        </Stack>
      </SectionWrapper>
    </Box>
  )
}

export default SmallCardsRight
