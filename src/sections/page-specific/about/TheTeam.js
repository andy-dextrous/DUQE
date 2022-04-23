import {
  VStack,
  Box,
  Heading,
  Stack,
  Center,
  Container,
  Button,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import React, { useEffect, useRef } from "react"
import TeamCard from "../../../components/cards/TeamCard"
import { sidebarWidth } from "../../../components/Layout"
import { gsap, ScrollTrigger } from "../../../gsap"
import { data } from "./teamData"

function TheTeam() {
  const scrollSection = useRef()
  const pinSection = useRef()
  const scrollAnimation = useRef(null)

  useEffect(() => {
    if (scrollAnimation.current || !ScrollTrigger) return

    const sectionWidth = scrollSection.current.getBoundingClientRect().width
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: pinSection.current,
        start: "top top",
        end: "",
        pin: true,
        toggleActions: "start none none restart",
        scrub: 0.5,
        anticipatePin: true,
      },
    })
    tl.to(scrollSection.current, {
      x: 0 - sectionWidth + window.innerWidth,
      ease: "none",
    })
    scrollAnimation.current = tl
  }, [])

  return (
    <Center
      as="section"
      width={["100vw", "100vw", `calc(100vw - ${sidebarWidth}px)`]}
      position="relative"
      ml={[0, 0, sidebarWidth + "px"]}
      pb={[10, 10, 24]}
      pt={[10, 10, 24]}
      minH={["100vh", "100vh", "100vh"]}
      overflowX="hidden"
      overflowY="hidden"
      ref={pinSection}
    >
      <Container
        maxW={"1480px"}
        h="100%"
        w={["95%", "95%", "82%"]}
        p="0"
        pl={[0, 0, sidebarWidth + "px"]}
      >
        <VStack
          align="start"
          h="100%"
          position="absolute"
          left="0"
          top="0"
          bottom="0"
          px="0"
          borderBottomLeftRadius={[null, null, "200"]}
          ref={scrollSection}
          bg="brandGreen.600"
        >
          <Stack
            direction="row"
            w="auto"
            h="full"
            align="center"
            justify="flex-start"
            spacing={8}
            pl={[8, 8, 40]}
          >
            <Box w={["100vw", "100vw", "40vw"]}>
              <Heading
                as="h4"
                textStyle="h4"
                fontSize="16px"
                fontWeight="semibold"
                color="white"
                mb={8}
              >
                Meet The Team
              </Heading>
              <Heading
                color="brandBlue.900"
                fontSize={["4xl", "4xl", "4xl", "4xl", "5xl", "6xl"]}
                maxW={["80%", "80%", "50%"]}
              >
                Bringing your vision to life
              </Heading>
            </Box>
            {data.map((person, i) => {
              return (
                <Box
                  h={{ base: "70vh", "2xl": "60vh" }}
                  minH="600px"
                  minW="400px"
                  width={{
                    base: "80vw",
                    lg: "50vh",
                    xl: "46.67vh",
                    "2xl": "40vh",
                  }}
                  key={i}
                >
                  <TeamCard data={person} />
                </Box>
              )
            })}
            <VStack
              spacing={8}
              align={["center", "center", "start"]}
              width={["100vw", "100vw", "50vw"]}
              pl={[0, 0, "10vw"]}
            >
              <Heading
                as="h4"
                textStyle="h4"
                fontSize="16px"
                fontWeight="semibold"
                textAlign={["center", "center", "left"]}
                color="white"
              >
                Looking for the ultimate workspace?
              </Heading>
              <Heading
                color="brandBlue.900"
                fontSize={["4xl", "4xl", "4xl", "4xl", "5xl", "6xl"]}
                width="100%"
                textAlign={["center", "center", "left"]}
              >
                Let's do this
              </Heading>
              <Link to="/contact-us">
                <Button variant="dark" size="lg">
                  Book a free consultation
                </Button>
              </Link>
            </VStack>
          </Stack>
        </VStack>
      </Container>
    </Center>
  )
}

export default TheTeam
