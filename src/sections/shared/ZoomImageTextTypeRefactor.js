import React, { useRef, useContext, useEffect, useLayoutEffect } from "react"
import { Link } from "gatsby"
import { useBreakpointValue } from "@chakra-ui/react"
import { CurrentSectionContext } from "../../components/Layout"
import SectionWrapper from "../../components/layouts/SectionWrapper"
import { Box, Button, Center, Heading, VStack } from "@chakra-ui/react"

function ZoomImageTextType({
  sectionIndex,
  link,
  subtitle,
  title,
  buttonText,
  image,
  rounded,
  playOnLoad,
}) {
  const { currentSection } = useContext(CurrentSectionContext)
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  const buttonColor = useBreakpointValue(["yellow", "yellow", "green"])
  let backgroundRef = useRef(null)
  let contentRef = useRef(null)
  const slideTimeline = useRef(null)
  let buttonRef = useRef(null)
  let titleRef = useRef(null)
  let subTitleRef = useRef(null)
  let titleSplit = useRef(null)
  let subTitleSplit = useRef(null)

  useLayoutEffect(() => {
    import("../../gsap").then(({ gsap }) => {
      const { invisible, splitText } = gsap.effects

      if (!titleSplit.current || !subTitleSplit.current) {
        titleSplit.current = splitText(titleRef.current)
        subTitleSplit.current = splitText(subTitleRef.current)
        invisible([
          titleSplit.current.chars,
          subTitleSplit.current.chars,
          buttonRef.current,
        ])
        contentRef.current.style.visibility = "visible"
      }
      if (!slideTimeline.current) {
        const tl = gsap.timeline({ paused: true, delay: 0.3 })
        tl.slowZoomIn(backgroundRef.current)
          .typeText(subTitleSplit.current.chars, { speed: "fast" }, 0)
          .typeText(titleSplit.current.chars, { speed: "slow" }, 1.4)
          .fadeIn(buttonRef.current, {}, 2.9)
        slideTimeline.current = tl
        playOnLoad && slideTimeline.current.play()
      }
    })
  }, [])

  useEffect(() => {
    if (!slideTimeline.current) return
    if (currentSection === sectionIndex || !sectionIndex) {
      slideTimeline.current.play()
    }
    if (!slideTimeline.current._ps && currentSection !== sectionIndex) {
      slideTimeline.current.restart()
      slideTimeline.current.pause()
    }
  }, [currentSection, sectionIndex])

  return (
    <Box className="section">
      <SectionWrapper
        overlay={true}
        bgImage={image}
        minH={["85vh", "85vh", "100vh"]}
        h={["100%", "100%", "100vh"]}
        pt={0}
        pb={0}
        ref={backgroundRef}
        useGatsbyImage={true}
        eager={true}
        borderBottomLeftRadius={["unset", "unset", rounded ? "200" : "unset"]}
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
              {subtitle}
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
              {title}
            </Heading>
            {link && (
              <Link to={link}>
                <Button variant={buttonColor} size={buttonSize} ref={buttonRef}>
                  {buttonText || "Learn More"}
                </Button>
              </Link>
            )}
          </VStack>
        </Center>
      </SectionWrapper>
    </Box>
  )
}

export default ZoomImageTextType
