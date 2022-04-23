import React, { useEffect, useRef } from "react"
import { sidebarWidth } from "../../../components/Layout"
import { gsap, ScrollTrigger } from "../../../gsap"
import YoutubeCard from "../../../components/cards/YoutubeCard"

import {
  VStack,
  Box,
  Heading,
  Stack,
  Center,
  Container,
} from "@chakra-ui/react"

function Hero({ changeVideo, allYoutubeVideo }) {
  const videoArray = allYoutubeVideo.edges.filter(
    video => !video?.node?.title?.includes("#shorts")
  )
  const scrollSection = useRef()
  const pinSection = useRef()
  const scrollAnimation = useRef(null)

  useEffect(() => {
    if (scrollAnimation.current || !ScrollTrigger) return
    const timer = setTimeout(() => {
      const sectionWidth = scrollSection.current.getBoundingClientRect().width
      const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: pinSection.current,
          start: "top top",
          end: "",
          pin: true,
          toggleActions: "start none none restart",
          scrub: 1,
          anticipatePin: true,
        },
      })
      tl.to(scrollSection.current, {
        x: 0 - sectionWidth + window.innerWidth / 2,
        ease: "none",
      })
      scrollAnimation.current = tl
    }, 1000)
    return function cleanup() {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Center
      as="section"
      width={["100vw", "100vw", `calc(100vw - ${sidebarWidth}px)`]}
      position="relative"
      ml={[0, 0, sidebarWidth + "px"]}
      pb={[10, 10, 24]}
      pt={[10, 10, 24]}
      minH={["100vh", "100vh", "100vh"]}
      overflowX="hidden"
      overflowY="hidden"
      ref={pinSection}
      _before={{
        content: "''",
        width: { base: "58vw", "2xl": "60vw" },
        height: "100vh",
        position: "absolute",
        left: "0",
        top: "0",
        borderBottomRightRadius: "200",
        zIndex: "-2",
        bg: "brandBlue.900",
        display: ["none", "none", "block"],
      }}
    >
      <Container
        maxW={"1480px"}
        h="100%"
        w={["95%", "95%", "82%"]}
        p="0"
        pl={[0, 0, sidebarWidth + "px"]}
      >
        <VStack
          align="start"
          h="100%"
          position="absolute"
          left="0"
          top="0"
          bottom="0"
          px="9%"
          ref={scrollSection}
        >
          <Stack
            direction="row"
            w="auto"
            h="full"
            align="center"
            justify="flex-start"
            spacing={20}
          >
            <Box w={["100vw", "100vw", "28vw"]}>
              <Heading
                color="brandYellow.500"
                fontSize={["4xl", "4xl", "4xl", "4xl", "5xl", "6xl"]}
                maxW={["80%", "80%", "50%"]}
                mb={8}
              >
                Talking Spaces
              </Heading>
              <Heading
                as="h4"
                textStyle="h4"
                fontSize="16px"
                fontWeight="semibold"
                color="white"
              >
                With Mel Pikos
              </Heading>
            </Box>

            {videoArray.map((video, i) => {
              if (i <= 4) {
                return (
                  <Box
                    h={{ base: "70vh", "2xl": "70vh" }}
                    width={{
                      base: "80vw",
                      lg: "50vh",
                      xl: "70vh",
                      "2xl": "100vh",
                    }}
                    key={i}
                  >
                    <YoutubeCard
                      onClick={() =>
                        changeVideo(video.node.videoId, allYoutubeVideo.edges)
                      }
                      data={video.node}
                    />
                  </Box>
                )
              } else {
                return <></>
              }
            })}
          </Stack>
        </VStack>
      </Container>
    </Center>
  )
}

export default Hero
