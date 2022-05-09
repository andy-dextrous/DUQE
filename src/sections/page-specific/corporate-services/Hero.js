import React, { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "../../../gsap"

import SectionWrapper from "../../../components/SectionWrapper"
import { Heading, Stack, Text, VStack } from "@chakra-ui/react"
import ScrollDown from "../../../assets/icons/ScrollDown"
import QIcon from "../../../assets/icons/QIcon"

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
        rotate: -10,
        x: 100,
        y: -60,
      },
      0
    )
  }, [])

  return (
    <SectionWrapper
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651118247/DUQE/Corporate_Services.png"
      h="100vh"
      overlay
      isFirstSection
      darkBackground
      overflow="hidden"
      overlayStyle={{
        bg: "linear-gradient(179.45deg, rgba(11, 11, 11, 0) 32.43%, #0B0B0B 95%),radial-gradient(84.77% 84.77% at 73.88% 44.21%, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%)",
      }}
      ref={img}
    >
      <Stack h="full" w="full" align="center" direction="row">
        <VStack
          spacing={[8, 8, 12]}
          alignItems="start"
          w="full"
          width={["full", "full", "50%"]}
        >
          <Heading as="h1" color="white">
            Beyond Business
            <Text as="span" color="brandYellow.default">
              <br />
              Setup
            </Text>
          </Heading>
          <Heading as="h3" color="white" className="thin-h3">
            Need to open a bank account? Manage your accounting? Or register for
            VAT? No worries. We take care of the most difficult and tiring tasks
            beyond the business setup stage to save you the headache.
          </Heading>
        </VStack>
      </Stack>
      <QIcon
        ref={img2}
        position="absolute"
        color="#e0db2a"
        outline
        opacity="0.6"
        width={["100vw", "100vw", "80vw", "40vw", "40vw", "42vw", "47vw"]}
        height="auto"
        top={["10%", "10%", "-25%", "-25%", "-25%", "-25%", "-25%"]}
        right={["-50%", "-50%", "-40%", "-5%", "-5%", "-5%", "-5%"]}
        zIndex="3"
      />
      <ScrollDown />
    </SectionWrapper>
  )
}

export default Hero
