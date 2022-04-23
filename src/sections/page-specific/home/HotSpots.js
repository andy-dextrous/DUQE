import React, { useEffect, useRef, useState, useContext } from "react"
import { gsap } from "../../../gsap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CurrentSectionContext } from "../../../components/Layout"
import { graphql } from "gatsby"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import {
  VStack,
  Box,
  AspectRatio,
  Heading,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react"

export const query = graphql`
  fragment HOTSPOT_QUERY on WpPage {
    ACF_homepage_fields {
      hotspotBackground {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        altText
        databaseId
        title
      }
      cards {
        card1 {
          benefits
          title
          x
          y
          image {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        card2 {
          benefits
          title
          x
          y
          image {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        card3 {
          benefits
          title
          x
          y
          image {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        card4 {
          benefits
          title
          x
          y
          image {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

function HotSpots({ data }) {
  const bgImage =
    data.hotspotBackground.localFile.childImageSharp.gatsbyImageData

  const { cards } = data
  const cardsArray = Object.values(cards)
  //Refs
  const computerHSRef = useRef()
  const greeneryHSRef = useRef()
  const ergonomicsHSRef = useRef()
  const lightHSRef = useRef()
  const cardRef = useRef()
  const pulse = useRef(null)
  const openingTimeline = useRef(null)
  //State
  const [isActive, setIsActive] = useState(greeneryHSRef.current)
  const [cardDataState, setCardDataState] = useState(cardsArray[0])
  const usingLargeScreen = useBreakpointValue([false, false, true])
  //Context
  const { currentSection } = useContext(CurrentSectionContext)

  useEffect(() => {
    if (pulse.current) return
    pulse.current = gsap.to(
      [
        computerHSRef.current,
        greeneryHSRef.current,
        ergonomicsHSRef.current,
        lightHSRef.current,
      ],
      {
        scale: 1.1,

        yoyo: true,
        repeat: -1,
        ease: "circ",
      }
    )
  }, [])

  useEffect(() => {
    if (!usingLargeScreen) {
      cardRef.current.style.removeProperty("top")
      cardRef.current.style.removeProperty("left")
    }
  }, [usingLargeScreen])

  useEffect(() => {
    switch (isActive) {
      case computerHSRef.current:
        setCardDataState(cardsArray[1])
        break
      case greeneryHSRef.current:
        setCardDataState(cardsArray[0])
        break
      case ergonomicsHSRef.current:
        setCardDataState(cardsArray[2])
        break
      case lightHSRef.current:
        setCardDataState(cardsArray[3])
        break
      default:
        setCardDataState(cardsArray[0])
        break
    }
  }, [isActive, cardsArray])

  useEffect(() => {
    if (!usingLargeScreen) return
    gsap.to(cardRef.current, {
      left: `${cardDataState.x}%`,
      top: `${cardDataState.y}%`,
      ease: "Power3.inOut",
      duration: 0.3,
    })
  }, [cardDataState, usingLargeScreen])

  useEffect(() => {
    if (openingTimeline.current) return
    const tl = gsap.timeline({ paused: true })
    tl.from(
      [
        greeneryHSRef.current,
        lightHSRef.current,
        computerHSRef.current,
        ergonomicsHSRef.current,
      ],
      {
        opacity: 0,
        y: 200,
        stagger: 0.1,
        ease: "Power3.inOut",
      }
    )
    tl.from(
      cardRef.current,
      {
        opacity: 0,
        y: 200,
        stagger: 0.1,
        ease: "Power3.inOut",
      },
      0
    )
    openingTimeline.current = tl
  }, [usingLargeScreen])

  useEffect(() => {
    if (currentSection === 5) {
      openingTimeline.current.play()
    }
    if (!openingTimeline.current._ps && currentSection !== 5) {
      openingTimeline.current.restart()
      openingTimeline.current.pause()
    }
  }, [currentSection])

  function toggleActive(e) {
    const targets = [
      computerHSRef.current,
      greeneryHSRef.current,
      ergonomicsHSRef.current,
      lightHSRef.current,
    ]
    targets.forEach(target => {
      target.children[0].classList.remove("active")
    })
    e.target.classList.add("active")
  }

  return (
    <Box
      className="section"
      sx={{
        ".card-image": {
          height: ["80px", "80px", "100%"],
          width: ["80px", "80px", "15vh"],
          rounded: ["full", "full", "2xl"],
        },
      }}
    >
      <SectionWrapper
        overlay={false}
        minH="100vh"
        h="100vh"
        fullW
        borderBottomLeftRadius={["unset", "unset", "200"]}
      >
        <AspectRatio
          ratio={1350 / 764}
          h={["50%", "50%", "100%"]}
          w="100%"
          position="relative"
          _before={{
            content: "''",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "30px",
            width: "100%",
            bg: "brandGreen.600",
            borderTopRadius: "50",
            display: ["block", "block", "none"],
          }}
        >
          <Box>
            <GatsbyImage
              image={getImage(bgImage)}
              imgStyle={{ width: "100%", height: "100%" }}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: -2,
              }}
              className="test"
              alt="change"
            />
            <Box position="absolute" left="28%" top="46%" ref={computerHSRef}>
              <Box
                layerStyle={"hotSpotButton"}
                className="pulse "
                onClick={e => {
                  setIsActive(computerHSRef.current)
                  toggleActive(e)
                }}
              />
            </Box>
            <Box position="absolute" left="35%" top="20%" ref={greeneryHSRef}>
              <Box
                layerStyle={"hotSpotButton"}
                className="pulse active"
                onClick={e => {
                  setIsActive(greeneryHSRef.current)
                  toggleActive(e)
                }}
              />
            </Box>
            <Box position="absolute" left="70%" top="80%" ref={ergonomicsHSRef}>
              <Box
                layerStyle={"hotSpotButton"}
                className="pulse"
                onClick={e => {
                  setIsActive(ergonomicsHSRef.current)
                  toggleActive(e)
                }}
              />
            </Box>
            <Box position="absolute" left="82%" top="30%" ref={lightHSRef}>
              <Box
                layerStyle={"hotSpotButton"}
                className="pulse"
                onClick={e => {
                  setIsActive(lightHSRef.current)
                  toggleActive(e)
                }}
              />
            </Box>
          </Box>
        </AspectRatio>
        <Stack
          ref={cardRef}
          direction={["column", "column", "row"]}
          position={["relative", "relative", "absolute"]}
          rounded={["unset", "unset", "xl"]}
          overflow="hidden"
          bg="brandGreen.600"
          h={["50%", "50%", "unset"]}
          py={[8, 8, 2]}
          px={[2]}
          align={["flex-start", "flex-start", "center"]}
        >
          <Box height={["unset", "unset", "20vh"]} px={[8, 8, 0]}>
            {cardDataState?.image?.localFile.childImageSharp
              .gatsbyImageData && (
              <GatsbyImage
                image={getImage(
                  cardDataState?.image?.localFile.childImageSharp
                    .gatsbyImageData
                )}
                className="card-image"
                alt={cardDataState.title}
              />
            )}
          </Box>
          <VStack
            align="start"
            color="brandBlue.900"
            flex="3"
            spacing={3}
            px={8}
          >
            <Heading
              as="h4"
              fontSize={{ base: "2xl", xl: "2xl", "2xl": "2xl" }}
              mt={[4, 4, "unset"]}
              color="white"
            >
              {cardDataState.title}
            </Heading>
            <Box
              spacing={2}
              color="brandBlue.900"
              pl={[4, 4, 0]}
              fontSize={{ base: "sm", xl: "sm", "2xl": "md" }}
              dangerouslySetInnerHTML={{ __html: cardDataState.benefits }}
            />
          </VStack>
        </Stack>
      </SectionWrapper>
    </Box>
  )
}

export default HotSpots
