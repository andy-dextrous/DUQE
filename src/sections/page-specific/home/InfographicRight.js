import React, { useEffect, useRef, useContext, useLayoutEffect } from "react"
import { Link } from "gatsby"
import { useBreakpointValue } from "@chakra-ui/react"
import { CurrentSectionContext } from "../../../components/Layout"
import { DrawSVGPlugin, gsap } from "../../../gsap"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import {
  Center,
  Stack,
  Heading,
  Button,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react"

function InfographicRight() {
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  const buttonColor = useBreakpointValue(["yellow", "yellow", "green"])
  const { currentSection } = useContext(CurrentSectionContext)

  const dottedLineRef = useRef(null)
  const yellowDot1Ref = useRef(null)
  const yellowDot2Ref = useRef(null)
  const yellowDot3Ref = useRef(null)
  const yellowDot4Ref = useRef(null)
  const leasingRef = useRef(null)
  const strategyRef = useRef(null)
  const designRef = useRef(null)
  const fitoutsRef = useRef(null)
  const leasingLineRef = useRef(null)
  const strategyLineRef = useRef(null)
  const designLineRef = useRef(null)
  const fitoutsLineRef = useRef(null)
  const animationRef = useRef(null)

  useLayoutEffect(() => {
    gsap.set(
      [
        yellowDot1Ref.current,
        yellowDot2Ref.current,
        yellowDot3Ref.current,
        yellowDot4Ref.current,
        leasingRef.current,
        strategyRef.current,
        designRef.current,
        fitoutsRef.current,

        leasingLineRef.current,
        strategyLineRef.current,
        designLineRef.current,
        fitoutsLineRef.current,
      ],
      { autoAlpha: 0 }
    )
  }, [])

  useEffect(() => {
    if (animationRef.current || !DrawSVGPlugin) return
    const tl = gsap.timeline()
    tl.to(dottedLineRef.current, {
      drawSVG: 0,
      duration: 0.8,
      ease: "Power3.out",
    })
      .to(
        [
          yellowDot4Ref.current,
          yellowDot3Ref.current,
          yellowDot2Ref.current,
          yellowDot1Ref.current,
        ],
        { autoAlpha: 1, duration: 0.2, stagger: 0.2 },
        0
      )
      .to(leasingLineRef.current, {
        autoAlpha: 1,
        duration: 0.2,
        ease: "Power3.inOut",
      })
      .fromTo(
        leasingRef.current,
        { y: 20 },
        { y: 0, autoAlpha: 1, duration: 0.2, ease: "Power3.inOut" },
        "-=0.2"
      )
      .to(strategyLineRef.current, {
        autoAlpha: 1,
        duration: 0.2,
        ease: "Power3.inOut",
      })
      .fromTo(
        strategyRef.current,
        { y: 20 },
        { y: 0, autoAlpha: 1, duration: 0.2, ease: "Power3.inOut" },
        "-=0.2"
      )
      .to(designLineRef.current, {
        autoAlpha: 1,
        duration: 0.2,
        ease: "Power3.inOut",
      })
      .fromTo(
        designRef.current,
        { y: 20 },
        { y: 0, autoAlpha: 1, duration: 0.2, ease: "Power3.inOut" },
        "-=0.2"
      )
      .to(fitoutsLineRef.current, {
        autoAlpha: 1,
        duration: 0.2,
        ease: "Power3.inOut",
      })
      .fromTo(
        fitoutsRef.current,
        { y: 20 },
        { y: 0, autoAlpha: 1, duration: 0.2, ease: "Power3.inOut" },
        "-=0.2"
      )
    animationRef.current = tl
  }, [])

  useEffect(() => {
    if (currentSection === 3) {
      animationRef.current.play()
    }
    if (!animationRef.current._ps && currentSection !== 3) {
      animationRef.current.restart()
      animationRef.current.pause()
    }
  }, [currentSection])

  return (
    <Box className="section">
      <SectionWrapper
        className="white"
        h="100vh"
        sx={{
          ".swiper-slide.card": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "18px",
            fontSize: "22px",
            fontWight: "bold",
            color: "#fff",
          },
          ".swiper.cards": {
            width: "45vh",
            height: "60vh",
          },
        }}
      >
        <Stack
          direction={["column", "column", "row"]}
          flex="1"
          align="center"
          spacing={[0, 0, 20]}
          height="100%"
        >
          <VStack
            spacing={[3, 3, 3, 3, 3, 4]}
            py={4}
            align={["center", "center", "start"]}
            position="relative"
            flex={["1", "1", "3"]}
            textAlign={["center", "center", "left"]}
          >
            <Heading
              as="h4"
              textStyle="h4"
              fontSize="16px"
              fontWeight="semibold"
            >
              We deliver
            </Heading>
            <Heading fontSize={["2xl", "3xl", "3xl", "3xl", "4xl"]}>
              An end to end solution
            </Heading>
            <Heading
              textStyle="fadeTextLeft"
              fontSize={["25vw", "25vw", "12vw"]}
            >
              02
            </Heading>
            <Text>
              Thriving in the changing face of today's business landscape means
              challenging conventional thinking about what ‘work’ is and how it
              should be performed.
            </Text>
            <Link to="/about-us">
              <Button variant={buttonColor} size={buttonSize}>
                About Us
              </Button>
            </Link>
          </VStack>

          <Center
            flex={["2", "2", "7"]}
            h={["100%", "100%", "55%", "75%", "75%", "55%"]}
            w={["100%", "100%", "unset"]}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 780.22 592.95"
              height="100%"
            >
              <defs>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tactic-1,.cls-3{fill:none;stroke:#e5f0ed}.tactic-1{stroke-linecap:round;stroke-linejoin:round;stroke-width:3.45px}.cls-3{stroke-miterlimit:10;stroke-width:2.59px;stroke-dasharray:9.27}.cls-5{fill:var(--tactic-colors-brandGreen-700)}.cls-6{fill:var(--tactic-colors-brandYellow-600)}.cls-7{isolation:isolate}.cls-8{fill:#212121}.tactic-13{fill:#181818}.tactic-15{fill:#0d1f2e}",
                  }}
                />
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    d="M119.49 67.48C238.76 76.27 332.8 175.83 332.8 297.34c0 123.26-96.75 223.92-218.45 230.19"
                    strokeDasharray="10.29 10.29"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3.45"
                    fill="none"
                    stroke="#e5f0ed"
                  />
                  <path
                    d="M119.49 67.48C238.76 76.27 332.8 175.83 332.8 297.34c0 123.26-96.75 223.92-218.45 230.19"
                    strokeWidth="10"
                    fill="transparent"
                    stroke="white"
                    ref={dottedLineRef}
                  />
                  <path
                    className="cls-3"
                    d="m249.09 118.28 77.07-72.6"
                    ref={leasingLineRef}
                  />
                  <path
                    className="cls-3"
                    d="m323.93 228.86 106.1-17.87"
                    ref={strategyLineRef}
                  />
                  <path
                    className="cls-3"
                    d="m322.81 370.71 59.2 11.17"
                    ref={designLineRef}
                  />
                  <path
                    className="cls-3"
                    d="m255.79 484.63 35.33 29.44"
                    ref={fitoutsLineRef}
                  />
                  <path
                    d="M265 297.77A154.54 154.54 0 0 1 110.5 452.3a3.11 3.11 0 0 1-.43 0c-4 0-7.34-7.54-7.34-16.84s3.29-16.83 7.34-16.83a3.11 3.11 0 0 1 .43 0 120.86 120.86 0 0 0 120.86-120.86Z"
                    fill="var(--tactic-colors-brandGreen-500)"
                  />
                  <path
                    className="cls-5"
                    d="M265 297.77h-33.64A120.86 120.86 0 0 0 110.5 176.91c-3.85-.51-6.91-7.84-6.91-16.8s3.06-16.3 6.91-16.81a2.56 2.56 0 0 1 .39 0h.11a154.54 154.54 0 0 1 154 154.47Z"
                  />
                  <path
                    className="cls-5"
                    d="M110.89 143.24a2.56 2.56 0 0 0-.39 0Z"
                  />
                  <circle
                    className="cls-6"
                    cx="249.06"
                    cy="119.51"
                    r="10.79"
                    ref={yellowDot1Ref}
                  />
                  <circle
                    className="cls-6"
                    cx="323.6"
                    cy="228.41"
                    r="10.79"
                    ref={yellowDot2Ref}
                  />
                  <circle
                    className="cls-6"
                    cx="321.74"
                    cy="370.78"
                    r="10.79"
                    ref={yellowDot3Ref}
                  />
                  <g id="Leasing" ref={leasingRef}>
                    <rect
                      className="cls-5"
                      x="276.15"
                      width="403.59"
                      height="94.1"
                      rx="47.05"
                    />
                    <g className="cls-7">
                      <path
                        className="cls-8"
                        d="M557.44 35.06v15.15H564v4.17h-11.17V35.06Z"
                      />
                      <path
                        className="cls-8"
                        d="M573.86 55.1c-5.65 0-9-3.44-9-8.15a8.16 8.16 0 1 1 16.31 0v1.12h-11.79c.36 2.33 1.91 3.57 4.53 3.57a6.73 6.73 0 0 0 4.71-1.74l2.38 2.59a10.28 10.28 0 0 1-7.14 2.61Zm-4.35-9.89h7a3.58 3.58 0 0 0-7 0Z"
                      />
                      <path
                        className="cls-8"
                        d="M591.21 53a5.58 5.58 0 0 1-4.32 1.89 4.66 4.66 0 0 1-4.9-4.79c0-2.67 2-4.82 5.26-4.82a6 6 0 0 1 3.62 1.06v-.7c0-2.41-1.08-3-3.16-3a19.74 19.74 0 0 0-3.67.49l-.08-3.5a20.37 20.37 0 0 1 4.53-.46c4.46 0 6.66 2 6.66 5.38v9.87h-3.94Zm-.31-3a2.26 2.26 0 0 0-4.51 0 2.26 2.26 0 1 0 4.51 0Z"
                      />
                      <path
                        className="cls-8"
                        d="M605.87 39.59v3.6a7.89 7.89 0 0 0-3.08-.77c-1 0-1.53.36-1.53.93s.54.9 1.76 1.71c3.52 2.33 4.38 3.73 4.38 5.38 0 2.54-2.08 4.4-5.75 4.43a12.78 12.78 0 0 1-4.46-.93v-3.6a10 10 0 0 0 3.86 1.09c1.27 0 1.76-.5 1.76-1.07s-.39-1-2.38-2.25c-3.11-2.07-3.68-3.21-3.68-4.94 0-2.1 1.61-4.2 5.65-4.17a10.45 10.45 0 0 1 3.47.59Z"
                      />
                      <path
                        className="cls-8"
                        d="M613.22 37.62h-4.35v-3.44h4.35Zm-.05 16.76h-4.27V39.52h4.27Z"
                      />
                      <path
                        className="cls-8"
                        d="M619.57 54.38h-4.27V39.52h4.06v1.81a6.33 6.33 0 0 1 4.87-2.2 5.14 5.14 0 0 1 5.33 5.51v9.74h-4.29v-8.44c0-2.2-1.25-3-2.8-3a2.85 2.85 0 0 0-2.9 2.77Z"
                      />
                      <path
                        className="cls-8"
                        d="M638.63 60.28a24.18 24.18 0 0 1-4.92-.49v-3.68a21.36 21.36 0 0 0 4.79.55c2.64 0 4.45-1 4.45-4.28v-.77a7 7 0 0 1-4.86 2.12 7.12 7.12 0 0 1-7.09-7.35 7.14 7.14 0 0 1 7.05-7.46 7 7 0 0 1 5 2.36v-1.76h4.12v12.71c.06 5.77-2.79 8.05-8.54 8.05ZM643 46.4a3.72 3.72 0 0 0-3.7-3.75 3.72 3.72 0 1 0 0 7.43 3.69 3.69 0 0 0 3.7-3.68Z"
                      />
                    </g>
                    <circle
                      cx="322.97"
                      cy="47.04"
                      r="46.82"
                      fill="var(--tactic-colors-brandGreen-500)"
                    />
                    <g className="cls-7">
                      <path
                        className="cls-8"
                        d="M325.25 46.48v1.16c0 5.45-2.55 8.26-6 8.26s-6-2.81-6-8.26v-1.16c0-5.52 2.57-8.31 6-8.31s6 2.83 6 8.31Zm-2.48 0c0-4.22-1.43-6.19-3.53-6.19s-3.53 2-3.53 6.19v1.16c0 4.2 1.52 6.14 3.53 6.14s3.53-1.94 3.53-6.14Z"
                      />
                      <path
                        className="cls-8"
                        d="M332.69 55.37h-2.46v-13L327 45.7v-3.18l3.75-3.82h1.93Z"
                      />
                    </g>
                  </g>
                  <g
                    id="Interior_Design"
                    data-name="Interior Design"
                    ref={designRef}
                  >
                    <rect
                      x="375.41"
                      y="334.76"
                      width="403.59"
                      height="94.1"
                      rx="47.05"
                      fill="var(--tactic-colors-brandBlue-400)"
                    />
                    <g id="Word" className="cls-7">
                      <path
                        className="cls-8"
                        d="M561.51 370h4.61v19.32h-4.61Z"
                      />
                      <path
                        className="cls-8"
                        d="M572.64 389.28h-4.27v-14.87h4.06v1.82a6.33 6.33 0 0 1 4.87-2.2 5.14 5.14 0 0 1 5.34 5.51v9.74h-4.3v-8.44c0-2.2-1.25-3-2.8-3a2.86 2.86 0 0 0-2.9 2.77Z"
                      />
                      <path
                        className="cls-8"
                        d="M590 378v11.27h-4.28V378H584v-3.6h1.73v-3.6l4.27-.8v4.37h1.73V378Z"
                      />
                      <path
                        className="cls-8"
                        d="M601.34 390c-5.65 0-9-3.44-9-8.15a8.16 8.16 0 1 1 16.31 0V383h-11.79c.36 2.33 1.91 3.57 4.53 3.57a6.73 6.73 0 0 0 4.71-1.74l2.41 2.57a10.28 10.28 0 0 1-7.17 2.6Zm-4.34-9.89h7a3.58 3.58 0 0 0-7 0Z"
                      />
                      <path
                        className="cls-8"
                        d="M614.36 389.28h-4.27v-14.87h4.07v3.22c.51-1.14 2.09-3.29 4.3-3.29h.54V379a2.89 2.89 0 0 0-.83-.13c-2.28 0-3.76 1.58-3.76 2.7Z"
                      />
                      <path
                        className="cls-8"
                        d="M624.67 372.52h-4.35v-3.44h4.35Zm0 16.76h-4.27v-14.87h4.27Z"
                      />
                      <path
                        className="cls-8"
                        d="M643.7 381.85c0 4.55-3.72 8.15-8.75 8.15s-8.72-3.6-8.72-8.15 3.73-8.16 8.72-8.16 8.75 3.6 8.75 8.16Zm-13 0a4.26 4.26 0 1 0 4.24-4.48 4.29 4.29 0 0 0-4.23 4.48Z"
                      />
                      <path
                        className="cls-8"
                        d="M649.53 389.28h-4.27v-14.87h4.07v3.22c.51-1.14 2.09-3.29 4.29-3.29h.5V379a2.89 2.89 0 0 0-.83-.13c-2.28 0-3.76 1.58-3.76 2.7Z"
                      />
                      <path
                        className="cls-8"
                        d="M660.05 370h5.82c5.34 0 10.26 2.88 10.26 9.63s-4.82 9.69-10.2 9.69h-5.88Zm4.61 15.15h1.47a5.49 5.49 0 0 0 0-11h-1.47Z"
                      />
                      <path
                        className="cls-8"
                        d="M686.39 390c-5.65 0-9-3.44-9-8.15a8.16 8.16 0 1 1 16.31 0V383h-11.79c.36 2.33 1.91 3.57 4.53 3.57a6.73 6.73 0 0 0 4.71-1.74l2.41 2.57a10.28 10.28 0 0 1-7.17 2.6Zm-4.39-9.89h7a3.58 3.58 0 0 0-7 0Z"
                      />
                      <path
                        className="cls-8"
                        d="M703.79 374.49v3.6a7.94 7.94 0 0 0-3.08-.78c-1 0-1.53.37-1.53.94s.54.9 1.76 1.71c3.52 2.33 4.38 3.72 4.38 5.38 0 2.54-2.07 4.4-5.75 4.43a12.67 12.67 0 0 1-4.45-.93v-3.6a9.88 9.88 0 0 0 3.85 1.09c1.27 0 1.76-.5 1.76-1.07s-.38-.95-2.38-2.25c-3.1-2.07-3.68-3.21-3.68-4.94 0-2.1 1.61-4.2 5.65-4.17a10.45 10.45 0 0 1 3.47.59Z"
                      />
                      <path
                        className="cls-8"
                        d="M711.15 372.52h-4.36v-3.44h4.36Zm-.06 16.76h-4.27v-14.87h4.27Z"
                      />
                      <path
                        className="cls-8"
                        d="M720.26 395.18a24.18 24.18 0 0 1-4.92-.49V391a21.36 21.36 0 0 0 4.79.55c2.64 0 4.46-1 4.46-4.28v-.77a7 7 0 0 1-4.87 2.12 7.41 7.41 0 0 1 0-14.81 7 7 0 0 1 5 2.36v-1.77h4.12v12.72c.02 5.76-2.84 8.06-8.58 8.06Zm4.33-13.88a3.72 3.72 0 1 0-3.71 3.68 3.73 3.73 0 0 0 3.71-3.68Z"
                      />
                      <path
                        className="cls-8"
                        d="M735.21 389.28h-4.28v-14.87H735v1.82a6.32 6.32 0 0 1 4.87-2.2 5.14 5.14 0 0 1 5.33 5.51v9.74h-4.3v-8.44c0-2.2-1.24-3-2.8-3a2.85 2.85 0 0 0-2.89 2.77Z"
                      />
                    </g>
                    <g id="Circle">
                      <circle
                        cx="422.33"
                        cy="381.81"
                        r="46.92"
                        fill="var(--tactic-colors-brandBlue-300)"
                      />
                      <g className="cls-7">
                        <path
                          className="cls-8"
                          d="M422.51 381.25v1.16c0 5.45-2.54 8.26-6 8.26s-6-2.81-6-8.26v-1.16c0-5.52 2.57-8.31 6-8.31s6 2.79 6 8.31Zm-2.48 0c0-4.23-1.43-6.19-3.53-6.19s-3.53 2-3.53 6.19v1.16c0 4.2 1.52 6.14 3.53 6.14s3.53-1.94 3.53-6.14Z"
                        />
                        <path
                          className="cls-8"
                          d="M427.79 390.67a9.35 9.35 0 0 1-3.89-.82v-2.26a7.62 7.62 0 0 0 3.3 1c2.66 0 4.49-1.38 4.49-3.37s-1.76-3.17-4.17-3.17h-1.21l.07-2.1h1.14c1.87 0 3.24-1.19 3.24-2.59s-1.26-2.28-3-2.28a6 6 0 0 0-2.81.6l.22-2.23a8.12 8.12 0 0 1 3-.47c2.84 0 5.07 1.76 5.07 4.11a4.54 4.54 0 0 1-2.32 3.71 4.75 4.75 0 0 1 3.26 4.51c-.03 3.04-2.64 5.39-6.39 5.36Z"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="Strategy" ref={strategyRef}>
                    <rect
                      className="cls-6"
                      x="376.63"
                      y="166.86"
                      width="403.59"
                      height="94.1"
                      rx="47.05"
                    />
                    <path
                      className="cls-8"
                      d="M651.94 205.61a9.44 9.44 0 0 0-3.73-.78c-1.68 0-2.46.57-2.46 1.48s1 1.68 3 3.13c3 2.25 4.48 3.75 4.48 6.16 0 3.47-3.21 5.52-7.28 5.52a15.79 15.79 0 0 1-4.71-.7v-4a13.11 13.11 0 0 0 4.66 1c1.64 0 2.57-.8 2.57-1.71s-1.09-1.81-3.24-3.34c-3.31-2.36-4.3-3.81-4.3-6 0-2.7 2.18-5.21 7.07-5.21a12.13 12.13 0 0 1 4 .6Z"
                    />
                    <path
                      className="cls-8"
                      d="M660.07 209.54v11.27h-4.27v-11.27h-1.74v-3.6h1.74v-3.6l4.27-.77v4.37h1.74v3.6Z"
                    />
                    <path
                      className="cls-8"
                      d="M667.45 220.81h-4.27v-14.87h4.07v3.21c.51-1.14 2.09-3.28 4.29-3.28h.5v4.68a2.63 2.63 0 0 0-.83-.13c-2.28 0-3.76 1.58-3.76 2.7Z"
                    />
                    <path
                      className="cls-8"
                      d="M681.15 219.43a5.53 5.53 0 0 1-4.32 1.89 4.66 4.66 0 0 1-4.9-4.79c0-2.66 2-4.81 5.26-4.81a6 6 0 0 1 3.63 1.06v-.7c0-2.41-1.09-3.06-3.16-3.06a20 20 0 0 0-3.68.5l-.08-3.5a20.4 20.4 0 0 1 4.53-.47c4.46 0 6.66 2 6.66 5.39v9.87h-3.94Zm-.31-3a2.25 2.25 0 1 0-4.5 0 2.26 2.26 0 1 0 4.5 0Z"
                    />
                    <path
                      className="cls-8"
                      d="M692.47 209.54v11.27h-4.27v-11.27h-1.74v-3.6h1.74v-3.6l4.27-.77v4.37h1.74v3.6Z"
                    />
                    <path
                      className="cls-8"
                      d="M703.84 221.53c-5.65 0-9-3.44-9-8.16a8.16 8.16 0 1 1 16.32 0v1.11h-11.8c.36 2.33 1.92 3.58 4.53 3.58a6.73 6.73 0 0 0 4.71-1.74l2.41 2.57a10.28 10.28 0 0 1-7.17 2.64Zm-4.35-9.89h7a3.58 3.58 0 0 0-7 0Z"
                    />
                    <path
                      className="cls-8"
                      d="M719.64 226.71a24.11 24.11 0 0 1-4.92-.49v-3.68a21.29 21.29 0 0 0 4.79.54c2.64 0 4.45-1 4.45-4.27V218a7 7 0 0 1-4.87 2.12 7.41 7.41 0 0 1 0-14.81 7 7 0 0 1 5 2.35v-1.76h4.11v12.72c.03 5.79-2.81 8.09-8.56 8.09Zm4.36-13.88a3.73 3.73 0 0 0-3.7-3.75 3.72 3.72 0 1 0 0 7.43 3.7 3.7 0 0 0 3.7-3.68Z"
                    />
                    <path
                      className="cls-8"
                      d="M738.57 226.5h-4.4l1.91-5.31-6.83-15.25h4.84l4.09 10.28 3.65-10.28h4.46Z"
                    />
                    <ellipse
                      cx="424.94"
                      cy="213.83"
                      rx="48.3"
                      ry="47.19"
                      fill="var(--tactic-colors-brandYellow-500)"
                    />
                    <path
                      className="tactic-13"
                      d="M424.58 213.27v1.16c0 5.45-2.54 8.27-6 8.27s-6-2.82-6-8.27v-1.16c0-5.52 2.57-8.31 6-8.31s6 2.79 6 8.31Zm-2.48 0c0-4.22-1.43-6.19-3.53-6.19s-3.53 2-3.53 6.19v1.16c0 4.2 1.52 6.15 3.53 6.15s3.53-2 3.53-6.15Z"
                    />
                    <path
                      className="tactic-13"
                      d="M436.42 222.16h-10.77l-.11-.29c.74-.91 5.72-6.7 6.5-7.68 1.45-1.77 2-2.75 2-4.11a3.11 3.11 0 0 0-3.24-3 5.58 5.58 0 0 0-3.8 1.52v-2.52a7.71 7.71 0 0 1 4.07-1.12c3.31 0 5.56 2.26 5.56 5 0 2.06-.94 3.33-2.66 5.39-.6.74-2.63 3-4.2 4.71h7.53Z"
                    />
                  </g>
                  <g id="Fitouts" ref={fitoutsRef}>
                    <rect
                      x="277.2"
                      y="498.85"
                      width="403.59"
                      height="94.1"
                      rx="47.05"
                      fill="#cdbeb6"
                    />
                    <path
                      className="tactic-15"
                      d="M565.06 535.67h11.78v4.06h-7.17v4.12H576v4.06h-6.29V555h-4.61Z"
                    />
                    <path
                      className="tactic-15"
                      d="M582.93 538.23h-4.35v-3.44h4.35Zm0 16.75h-4.27v-14.86h4.27Z"
                    />
                    <path
                      className="tactic-15"
                      d="M590.31 543.72V555H586v-11.28h-1.7v-3.6h1.7v-3.6l4.27-.78v4.38h1.74v3.6Z"
                    />
                    <path
                      className="tactic-15"
                      d="M610.12 547.55c0 4.56-3.73 8.16-8.75 8.16s-8.73-3.6-8.73-8.16 3.73-8.15 8.73-8.15 8.75 3.6 8.75 8.15Zm-13 0a4.27 4.27 0 1 0 4.25-4.48 4.3 4.3 0 0 0-4.25 4.48Z"
                    />
                    <path
                      className="tactic-15"
                      d="M621.83 553.17a6.33 6.33 0 0 1-4.87 2.2 5.13 5.13 0 0 1-5.31-5.51v-9.74h4.27v8.44c0 2.2 1.25 3 2.8 3a2.84 2.84 0 0 0 2.9-2.77v-8.7h4.27V555h-4.06Z"
                    />
                    <path
                      className="tactic-15"
                      d="M633.28 543.72V555H629v-11.28h-1.73v-3.6H629v-3.6l4.28-.78v4.38H635v3.6Z"
                    />
                    <path
                      className="tactic-15"
                      d="M645 540.2v3.6a7.86 7.86 0 0 0-3-.8c-1 0-1.53.36-1.53.93s.55.91 1.77 1.71c3.52 2.33 4.37 3.73 4.37 5.39 0 2.53-2.07 4.4-5.75 4.43a12.73 12.73 0 0 1-4.45-.94v-3.6a9.71 9.71 0 0 0 3.86 1.09c1.27 0 1.76-.49 1.76-1.06s-.39-1-2.38-2.25c-3.11-2.07-3.68-3.21-3.68-5 0-2.1 1.6-4.19 5.64-4.17a10.19 10.19 0 0 1 3.39.67Z"
                    />
                    <circle cx="323.82" cy="545.9" r="46.62" fill="#ded4ce" />
                    <path
                      className="tactic-13"
                      d="M322.66 545.34v1.17c0 5.45-2.55 8.26-6 8.26s-6-2.81-6-8.26v-1.17c0-5.51 2.57-8.31 6-8.31s6 2.8 6 8.31Zm-2.48 0c0-4.22-1.43-6.18-3.53-6.18s-3.53 2-3.53 6.18v1.17c0 4.2 1.51 6.14 3.53 6.14s3.53-1.94 3.53-6.14Z"
                    />
                    <path
                      className="tactic-13"
                      d="M334.83 550.93v3.31h-2.48v-3.31h-8.18l-.15-.38 8.8-13h2v11.28H337l-.6 2.08Zm-2.48-2.08v-7.15l-4.83 7.15Z"
                    />
                  </g>
                  {/* Logo */}
                  <g id="Layer_2-2" data-name="Layer 2">
                    <g id="Layer_2-2-2" data-name="Layer 2-2">
                      <path
                        className="tactic-13"
                        d="M9.68 282.85H0v-6.1h26.54v6.1h-9.68v24.74H9.68v-24.74z"
                      />
                      <path
                        className="tactic-13"
                        d="m52.24 296.83-4.5-13.62h-.42l-4.59 13.62Zm-9.84-20.08h10.27l10.24 30.48h-7.29l-1.86-5.38H41.22l-1.86 5.38h-7.29Z"
                      />
                      <path
                        className="tactic-13"
                        d="M70.78 292.14c0-9.48 6.82-16.08 16.31-16.08 7.64 0 13.94 4.8 15.1 11.66l-6.65.79a8.48 8.48 0 0 0-8.32-6.51c-5.49 0-9.33 4.12-9.33 10.12s3.86 10.17 9.33 10.17a8.6 8.6 0 0 0 8.32-6.29l6.69.9c-1.07 6.71-7.37 11.37-15.14 11.37-9.48 0-16.31-6.6-16.31-16.09Z"
                      />
                      <path
                        className="tactic-13"
                        d="M120.5 282.85h-9.68v-6.1h26.53v6.1h-9.68v24.74h-7.17v-24.74z"
                      />
                      <path
                        className="tactic-13"
                        d="M147.75 276.75h7.18v30.48h-7.18v-30.48z"
                      />
                      <path
                        className="tactic-13"
                        d="M166.63 292.14c0-9.48 6.82-16.08 16.31-16.08 7.64 0 13.94 4.8 15.1 11.66l-6.65.79a8.48 8.48 0 0 0-8.32-6.49c-5.49 0-9.33 4.12-9.33 10.12s3.86 10.17 9.33 10.17a8.6 8.6 0 0 0 8.32-6.35l6.7.9c-1.08 6.71-7.38 11.37-15.15 11.37-9.48 0-16.31-6.6-16.31-16.09Z"
                      />
                      <path
                        className="tactic-13"
                        d="M141 322.3h1.83c0 .9.7 1.46 1.9 1.46 1 0 1.58-.39 1.58-1.05s-.85-.94-1.83-1.08c-1.44-.21-3.39-.46-3.39-2.44 0-1.58 1.31-2.61 3.41-2.61s3.48 1.13 3.48 2.85h-1.77c0-.89-.63-1.4-1.67-1.4s-1.53.41-1.53 1c0 .79.92.93 2 1.08 1.44.22 3.24.53 3.24 2.48 0 1.59-1.37 2.62-3.55 2.62s-3.7-1.16-3.7-2.91Z"
                      />
                      <path
                        className="tactic-13"
                        d="M151.34 316.92h3.47c1.95 0 3.21 1 3.2 2.68s-1.27 2.7-3.21 2.7h-1.67v2.87h-1.79Zm3.29 3.94c.91 0 1.47-.5 1.47-1.26s-.57-1.25-1.47-1.25h-1.5v2.51Z"
                      />
                      <path
                        className="tactic-13"
                        d="M162.81 316.92h2.66l2.65 7.89h-1.82l-.5-1.44h-3.35l-.5 1.44h-1.81Zm2.55 5-1.18-3.59h-.11l-1.21 3.59Z"
                      />
                      <path
                        className="tactic-13"
                        d="M170.42 320.9a4.16 4.16 0 0 1 4.36-4.3 3.93 3.93 0 0 1 4 3.12l-1.8.21a2.25 2.25 0 0 0-2.22-1.73 2.72 2.72 0 0 0 0 5.42 2.29 2.29 0 0 0 2.22-1.69l1.8.24a3.88 3.88 0 0 1-4.06 3 4.15 4.15 0 0 1-4.3-4.27Z"
                      />
                      <path
                        className="tactic-13"
                        d="M181.82 316.92h6.1v1.43h-4.3v1.79h3.94v1.44H184v1.79h3.94v1.8h-6.1Z"
                      />
                      <path
                        className="tactic-13"
                        d="M190.91 322.3h1.8c0 .9.69 1.46 1.89 1.46 1 0 1.59-.39 1.59-1.05s-.85-.94-1.83-1.08c-1.44-.21-3.39-.46-3.39-2.44 0-1.58 1.31-2.61 3.4-2.61s3.49 1.13 3.49 2.85h-1.77c0-.89-.63-1.4-1.67-1.4s-1.53.41-1.53 1c0 .79.92.93 2 1.08 1.44.22 3.24.53 3.24 2.48 0 1.59-1.37 2.62-3.55 2.62s-3.66-1.16-3.67-2.91Z"
                      />
                    </g>
                  </g>
                  <circle
                    className="cls-6"
                    cx="249.06"
                    cy="476.99"
                    r="10.79"
                    ref={yellowDot4Ref}
                  />
                </g>
              </g>
            </svg>
          </Center>
        </Stack>
      </SectionWrapper>
    </Box>
  )
}

export default InfographicRight
