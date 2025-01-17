import React, { useRef, useEffect } from "react"
import { gsap, ScrollTrigger } from "../../../gsap"

import SectionWrapper from "../../../components/SectionWrapper"
import ScrollDown from "../../../assets/icons/ScrollDown"
import YellowHeading from "../../../components/common/YellowHeading"
import QIcon from "../../../assets/icons/QIcon"
import { Heading, Stack, VStack } from "@chakra-ui/react"

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
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651108469/DUQE/Agents.png"
      h="100vh"
      isFirstSection
      overlay
      darkBackground
      overlayStyle={{
        bg: "linear-gradient(179.45deg, rgba(11, 11, 11, 0) 32.43%, #0B0B0B 95%),radial-gradient(84.77% 84.77% at 73.88% 44.21%, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%)",
      }}
      ref={img}
      zIndex="1"
    >
      <Stack layerStyle="fillSpace" align="center" direction="row">
        <VStack
          spacing={[6, 6, 12]}
          alignItems="start"
          width={["full", "full", "50%"]}
        >
          <Heading as="h1" color="white">
            BECOME A
            <YellowHeading>
              <br />
              DUQE AGENT
            </YellowHeading>
          </Heading>
          <Heading as="h3" color="white" className="thin-h3">
            Be part of DUQE’s vibrant start-up community. Connect with aspiring
            founders, CEOs, freelancers and digital nomads and let them know why
            DUQE is the ideal launchpad for their business.
          </Heading>
        </VStack>
      </Stack>
      <QIcon
        position="absolute"
        top="0"
        outline
        color="#e0db2a"
        right={["-40vw", "-40vw", "-5%"]}
        opacity="50%"
        width={["100vw", "100vw", "50vw"]}
        height="auto"
        ref={img2}
      />
      <ScrollDown />
    </SectionWrapper>
  )
}

export default Hero
