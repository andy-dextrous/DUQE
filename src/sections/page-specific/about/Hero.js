import React, { useEffect, useRef } from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import { gsap, ScrollTrigger } from "../../../gsap"
import ScrollDown from "../../../assets/icons/ScrollDown"
import YellowHeading from "../../../components/common/YellowHeading"
import { useVariable } from "../../../hooks/useVariable"
import { Heading, Image, Stack, VStack } from "@chakra-ui/react"

function Hero() {
  const { componentSpacing } = useVariable()
  const img = useRef()
  const img2 = useRef()
  const animation = useRef()

  useEffect(() => {
    gsap.from(img.current, { opacity: 0, duration: 0.3, ease: "Power3.in" })

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
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651111950/DUQE/About_Us.png"
      h="100vh"
      zIndex="1"
      overlay
      overlayStyle={{
        bg: "linear-gradient(179.45deg, rgba(11, 11, 11, 0) 32.43%, #0B0B0B 99.75%),radial-gradient(84.77% 84.77% at 73.88% 44.21%, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%)",
      }}
      containerSize="xl"
      ref={img}
    >
      <Stack h="full" w="full" align="center" direction="row">
        <VStack
          spacing={componentSpacing}
          alignItems="start"
          width={["100%", "100%", "50%"]}
        >
          <Heading as="h1" color="white">
            Got Questions?
            <br />
            <YellowHeading>Need more info?</YellowHeading>
          </Heading>
          <Heading as="h3" color="white" className="thin-h3">
            Set up your company in DUQE Free Zone, based on the prestigious QE2.
          </Heading>
        </VStack>
      </Stack>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651111970/DUQE/star.svg"
        position="absolute"
        top="100px"
        right="50px"
        opacity="30%"
        zIndex="-1"
        ref={img2}
      />
      <ScrollDown />
    </SectionWrapper>
  )
}

export default Hero
