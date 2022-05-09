import React, { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "../../../gsap"
import { useVariable } from "../../../hooks/useVariable"

import SectionWrapper from "../../../components/SectionWrapper"
import ScrollDown from "../../../assets/icons/ScrollDown"
import { Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"

function Hero() {
  const img = useRef()
  const img2 = useRef()
  const animation = useRef()
  const { componentSpacing } = useVariable()

  useEffect(() => {
    gsap.from(img.current, {
      opacity: 0,
      delay: 0.2,
      duration: 0.35,
      ease: "Power3.in",
    })

    if (!ScrollTrigger || animation.current) return
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: img.current,
        toggleActions: "play none reverse none",
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    })
    tl.to(img.current, {
      scale: 1.4,
      ease: "linear",
    })
    tl.to(
      img2.current,
      {
        rotate: 10,
        x: 100,
        y: 120,
      },
      0
    )
  }, [])

  return (
    <SectionWrapper
      overlay
      isFirstSection
      darkBackground
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651107901/Rectangle_4.png"
      h="100vh"
      ref={img}
      zIndex="1"
    >
      <Stack layerStyle="fillSpace" align="center" direction="row">
        <VStack
          spacing={componentSpacing}
          alignItems="start"
          w="full"
          width={["full", "full", "50%"]}
        >
          <Heading as="h1" color="white">
            Got Questions?
            <Text as="span" color="brandYellow.default">
              <br></br>Need more info?
            </Text>
          </Heading>
          <Heading as="h3" color="white" className="thin-h3">
            We’re here to listen to what you really need and give you the best
            advice.
          </Heading>
        </VStack>
      </Stack>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651107899/Chevron.svg"
        position="absolute"
        top="0"
        right="50px"
        opacity="50%"
        ref={img2}
      />
      <ScrollDown />
    </SectionWrapper>
  )
}

export default Hero
