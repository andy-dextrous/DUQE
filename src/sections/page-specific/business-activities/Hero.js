import React, { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "../../../gsap"

import SectionWrapper from "../../../components/SectionWrapper"
import ScrollDown from "../../../assets/icons/ScrollDown"
import { Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"
import YellowHeading from "../../../components/common/YellowHeading"

function Hero() {
  const img = useRef()
  const img2 = useRef()
  const animation = useRef()

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
      isFirstSection
      overlay
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651121618/DUQE/Business_activities.png"
      h="100vh"
      zIndex="1"
      darkBackground
      overlayStyle={{
        bg: "linear-gradient(179.45deg, rgba(11, 11, 11, 0) 32.43%, #0B0B0B 99.75%),radial-gradient(84.77% 84.77% at 73.88% 44.21%, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%)",
      }}
      ref={img}
    >
      <Stack layerStyle="fillSpace" align="center" direction="row">
        <VStack
          spacing={[8, 8, 12]}
          alignItems="start"
          width={["full", "full", "50%"]}
        >
          <Heading as="h1" color="white">
            Business
            <YellowHeading>
              <br />
              Activities
            </YellowHeading>
          </Heading>
          <Heading as="h3" color="white" className="thin-h3">
            Setting up in DUQE means freedom. Freedom to chase your dreams.
            Freedom to explore new opportunities. And freedom to choose from
            over 3,500 business activities.
          </Heading>
        </VStack>
      </Stack>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651121616/DUQE/Activity_icon.svg"
        position="absolute"
        top="50px"
        right="0"
        opacity="50%"
        ref={img2}
      />
      <ScrollDown />
    </SectionWrapper>
  )
}

export default Hero
