import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import useInView from "react-cool-inview"
import { gsap } from "../../gsap"
import { GrLinkedinOption } from "react-icons/gr"

import {
  Box,
  Heading,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"

function TeamCard({ data }) {
  const personRef = useRef(null)
  const displayAnimation = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Load the reveal animation on the first render only. TODO - find a way to wait until DOM is ready before loading
  useEffect(() => {
    if (displayAnimation.current) return
    const tl = gsap.timeline({ paused: true })
    tl.to(personRef.current, {
      top: "5%",
      right: "5%",
      left: "unset",
      bottom: "unset",
      width: "40%",
      height: "40%",
      borderTopRightRadius: "50",
      ease: "Power3.in",
      duration: 0.2,
      onReverseComplete: () => {
        console.log("yo")
        setIsAnimating(false)
      },
    })
    displayAnimation.current = tl
  }, [])

  function handleHover() {
    if (!displayAnimation.current) return
    setIsAnimating(true)
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
    <Box layerStyle="fillSpace" ref={observe}>
      <VStack
        layerStyle="fillSpace"
        align="flex-start"
        justify="space-between"
        p={6}
        rounded="2xl"
        bg={isAnimating ? "brandBlue.900" : "transparent"}
        position="relative"
        overflow="hidden"
        mb={4}
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHoverExit()}
      >
        <VStack>
          <Link to={data.link} target="_blank">
            <IconButton
              variant="outline"
              color="white"
              _hover={{ color: "brandBlue.900", bg: "white" }}
              icon={<GrLinkedinOption />}
            />
          </Link>
        </VStack>
        <Box>
          <Heading color="brandGreen.600" as="h4" fontSize="lg">
            About
          </Heading>
          <Text color="white">{data.bio}</Text>
          <Box
            layerStyle="fillSpaceAbsolute"
            bg={data.bg}
            overflow="hidden"
            ref={personRef}
          >
            <Image
              height="100%"
              objectFit="cover"
              objectPosition="center"
              src={data.image}
            />
          </Box>
        </Box>
      </VStack>

      <Heading as="h4" fontSize="xl" color="brandBlue.900">
        {data.name}
      </Heading>
      <Text textStyle="featuredParagraph">{data.position}</Text>
    </Box>
  )
}

export default TeamCard
