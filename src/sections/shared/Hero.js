import React, { useEffect, useRef } from "react"
import SectionWrapper from "../../components/SectionWrapper"
import { Center, Heading, Stack } from "@chakra-ui/react"
import { gsap, ScrollTrigger } from "../../gsap"
import ScrollDown from "../../assets/icons/ScrollDown"
import { useVariable } from "../../hooks"

function Hero({ title = "", bgImage = "" }) {
  const { componentSpacing } = useVariable()
  const img = useRef()
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
  }, [])

  return (
    <SectionWrapper
      bgImage={bgImage}
      overlay
      darkBackground
      h="100vh"
      overflow="hidden"
      containerSize="xl"
      zIndex="1"
      ref={img}
    >
      <Center layerStyle="fillSpace">
        <Stack
          direction={["column", "column", "reverse"]}
          spacing={componentSpacing}
          alignItems="start"
          width="100%"
        >
          <Heading as="h1" color="white" maxW="100%">
            {title}
          </Heading>
        </Stack>
      </Center>

      <ScrollDown />
    </SectionWrapper>
  )
}

export default Hero
