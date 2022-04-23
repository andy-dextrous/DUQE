import React, { useEffect, useRef } from "react"
import useInView from "react-cool-inview"
import gsap from "gsap"

import {
  Box,
  Button,
  Heading,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function YoutubeCard({ data, onClick }) {
  const imageRef = useRef(null)
  const cardRef = useRef(null)
  const displayAnimation = useRef(null)
  const { localThumbnail } = data

  // Load the reveal animation on the first render only. TODO - find a way to wait until DOM is ready before loading
  useEffect(() => {
    if (displayAnimation.current) return
    const tl = gsap.timeline({
      paused: true,
      onReverseComplete: () => cardRef.current.classList.remove("hover"),
    })
    tl.to(imageRef.current, {
      top: "0",
      right: "0",
      left: "unset",
      bottom: "unset",
      width: "50%",
      height: "50%",
      borderBottomLeftRadius: "50",
      ease: "Power3.inOut",
      duration: 0.2,
    })
    displayAnimation.current = tl
  }, [])

  function handleHover() {
    if (!displayAnimation.current) return
    cardRef.current.classList.add("hover")
    displayAnimation.current.play()
  }

  function handleHoverExit() {
    if (!displayAnimation.current) return

    displayAnimation.current.reverse()
  }

  // On mobile detect when the card is on screen and toggle open state
  const usingMobile = useBreakpointValue([true, true, false])
  const { observe } = useInView({
    threshold: 0.8,
    onEnter: () => {
      usingMobile && handleHover()
    },
    onLeave: () => {
      usingMobile && handleHoverExit()
    },
  })

  return (
    <Box
      layerStyle="fillSpace"
      ref={observe}
      sx={{ ".hover": { bg: "brandGreen.600" } }}
      cursor="pointer"
      my={0}
    >
      <VStack
        layerStyle="fillSpace"
        align="flex-start"
        justify="flex-start"
        rounded="50"
        bg="transparent"
        position="relative"
        overflow="hidden"
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHoverExit()}
        ref={cardRef}
        my={0}
      >
        {/* Content */}
        <VStack
          align="flex-start"
          justify="flex-end"
          p={8}
          h="100%"
          w="100%"
          spacing={8}
        >
          <Box>
            <Heading as="h3" fontSize="3xl" color="brandBlue.900">
              {data.title}
            </Heading>
            <Text fontWeight="semibold" color="white">
              {data.publishedAt}
            </Text>
            <Text noOfLines={2}>{data.description}</Text>
          </Box>
          <Button onClick={onClick} size="lg" variant="yellow">
            Watch Episode
          </Button>
        </VStack>

        {/* Absolute image */}
        <Box
          layerStyle="fillSpaceAbsolute"
          zIndex="20"
          overflow="hidden"
          ref={imageRef}
          sx={{ mt: "0 !important" }}
        >
          <GatsbyImage
            height="100%"
            width="100%"
            objectFit="cover"
            objectPosition="center"
            style={{ pointerEvents: "none", height: "100%" }}
            image={getImage(localThumbnail)}
          />
        </Box>
      </VStack>
    </Box>
  )
}

export default YoutubeCard
