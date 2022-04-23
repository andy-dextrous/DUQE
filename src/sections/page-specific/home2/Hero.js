import React, { useEffect, useLayoutEffect, useRef } from "react"
import { graphql, Link } from "gatsby"
import { gsap, ScrollTrigger } from "../../../gsap"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import {
  Box,
  Button,
  Center,
  Heading,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"

export const query = graphql`
  fragment SLIDE1_QUERY on WpPage {
    ACF_homepage_fields {
      heroImages {
        slide1 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        slide1Mob {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

function Hero({ data }) {
  const image = {
    desktop: data?.heroImages.slide1?.localFile.childImageSharp.gatsbyImageData,
    mobile:
      data?.heroImages.slide1Mob?.localFile.childImageSharp.gatsbyImageData,
  }

  const { invisible, splitText } = gsap.effects
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  let backgroundRef = useRef(null)
  let contentRef = useRef(null)
  const slideTimeline = useRef(null)
  let buttonRef = useRef(null)
  let titleRef = useRef(null)
  let subTitleRef = useRef(null)
  let titleSplit = useRef(null)
  let subTitleSplit = useRef(null)

  useLayoutEffect(() => {
    if (!!titleSplit.current || !!subTitleSplit.current) return
    titleSplit.current = splitText(titleRef.current)
    subTitleSplit.current = splitText(subTitleRef.current)
    invisible([
      titleSplit.current.chars,
      subTitleSplit.current.chars,
      buttonRef.current,
    ])
    contentRef.current.style.visibility = "visible"
  }, [invisible, splitText])

  useEffect(() => {
    if (slideTimeline.current || !ScrollTrigger) return
    const tl = gsap.timeline({
      delay: 0.3,
      scrollTrigger: {
        trigger: backgroundRef.current,
        start: "top center",
        toggleActions: "play none none none",
      },
    })
    tl.slowZoomIn(backgroundRef.current)
      .typeText(subTitleSplit.current.chars, { speed: "fast" }, 0)
      .typeText(titleSplit.current.chars, { speed: "slow" }, 1.4)
      .fadeIn(buttonRef.current, {}, 2.9)
    slideTimeline.current = tl
  }, [])

  return (
    <SectionWrapper
      overlay={true}
      overlayOpacity={0.45}
      bgImage={image}
      minH={["85vh", "85vh", "100vh"]}
      h={["100%", "100%", "100vh"]}
      pt={0}
      pb={0}
      ref={backgroundRef}
      useGatsbyImage={true}
      eager={true}
      borderBottomLeftRadius="unset"
      sx={{
        ".titleReveal": {
          pb: ["8px", "8px", "8px", "8px", "12px", "12px"],
        },
        "@keyframes scroll": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translateY(15px)",
          },
        },
      }}
      overflow="hidden"
    >
      <Box
        className="icon-scroll"
        display={["none", "none", "block"]}
        h="35px"
        w="20px"
        position="absolute"
        bottom="5"
        left="calc(50% - 10px)"
        zIndex="30"
        boxShadow="inset 0 0 0 1.2px rgba(255,255,255,0.6)"
        rounded="25px"
        _before={{
          position: "absolute",
          left: "calc(50% - 15px)",
          content: "''",
          width: "4px",
          height: "4px",
          background: "rgba(255,255,255,0.6)",
          ml: "13px",
          top: "8px",
          borderRadius: "4px",
          animationDuration: "1.5s",
          animationIterationCount: "infinite",
          animationName: "scroll",
        }}
      />
      <Center layerStyle="fillSpace" zIndex="20">
        <VStack
          spacing={6}
          zIndex="20"
          style={{ visibility: "hidden" }}
          ref={contentRef}
        >
          <Heading
            as="h4"
            color="white"
            fontSize={["md", "md", "xl"]}
            fontWeight={["normal", "medium", "light"]}
            letterSpacing="wide"
            lineHeight="none"
            textAlign="center"
            ref={subTitleRef}
          >
            We are an end-to end solution for creating
          </Heading>
          <Heading
            as="h1"
            color="white"
            fontSize={["4xl", "5xl", "55px", "55px", "55px", "65px"]}
            lineHeight="none"
            textAlign="center"
            pb={2}
            ref={titleRef}
          >
            Workspaces that engage
          </Heading>

          <Link to="/about-us">
            <Button variant="green" size={buttonSize} ref={buttonRef}>
              About Us
            </Button>
          </Link>
        </VStack>
      </Center>
      <Box
        as="span"
        position="absolute"
        w="100%"
        zIndex="20"
        left="0"
        right="0"
        bottom="0"
        height="5vh"
        bg="brandBlue.900"
        roundedTop="30px"
        display={["block", "block", "none"]}
      />
    </SectionWrapper>
  )
}

export default Hero
