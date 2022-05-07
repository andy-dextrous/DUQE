import React, { useEffect, useRef } from "react"
import SectionWrapper from "../../components/SectionWrapper"
import { Button, Center, Heading, Stack, Text } from "@chakra-ui/react"
import { SmartLink } from "../../components/SmartLink"
import { gsap, ScrollTrigger } from "../../gsap"
import ScrollDown from "../../assets/icons/ScrollDown"
import { useVariable } from "../../hooks"

function Hero() {
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
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto,w_1920/v1650925763/Home-Hero.jpg"
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
            Duqe is for the{" "}
            <Text as="span" color="brandYellow.default">
              disrupters
            </Text>
          </Heading>
          <Heading as="h3" color="white" className="thin-h3">
            Set up your company in DUQE Free Zone, based on the prestigious QE2.
          </Heading>
          <Stack
            direction={["column", "column", "row"]}
            w="full"
            spacing={[5, 5, 6]}
          >
            <SmartLink url="/contact-us">
              <Button>Start your business</Button>
            </SmartLink>
            <SmartLink url="/cost-calculator">
              <Button variant="outlineWhite">How much does it cost?</Button>
            </SmartLink>
          </Stack>
        </Stack>
      </Center>

      <ScrollDown />
    </SectionWrapper>
  )
}

export default Hero
