import React, { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "../../../gsap"

import SectionWrapper from "../../../components/SectionWrapper"
import ScrollDown from "../../../assets/icons/ScrollDown"
import YellowHeading from "../../../components/common/YellowHeading"
import { Heading, Image, Stack, VStack } from "@chakra-ui/react"

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
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651140760/DUQE/Licenses.png"
      h="100vh"
      overlay
      isFirstSection
      zIndex="1"
      darkBackground
      overlayStyle={{
        bg: "linear-gradient(179.45deg, rgba(11, 11, 11, 0) 32.43%, #0B0B0B 95%),radial-gradient(84.77% 84.77% at 73.88% 44.21%, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%)",
      }}
      ref={img}
    >
      <Stack h="full" w="full" align="center" direction="row" zIndex="3">
        <VStack
          spacing={[8, 8, 12]}
          alignItems="start"
          w="full"
          width={["full", "full", "50%"]}
        >
          <Heading as="h1" color="white">
            DUQE BUSINESS
            <br />
            <YellowHeading>LICENCES</YellowHeading>
          </Heading>
          <Heading as="h3" color="white" className="thin-h3">
            At DUQE, we make your path to entrepreneurship as easy as possible.
            That is why we offer a simple and straightforward process for you to
            get a trade licence in Dubai.
          </Heading>
        </VStack>
      </Stack>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651140758/DUQE/License_vector.svg"
        position="absolute"
        top={"0"}
        right="0"
        opacity="50%"
        zIndex="2"
        ref={img2}
      />
      <ScrollDown />
    </SectionWrapper>
  )
}

export default Hero
