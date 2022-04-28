import { Link } from "gatsby"
import React, { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "../../../gsap"
import { useThemeOptions } from "../../../hooks/useThemeOptions"
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"

function Cards() {
  const scrollSection = useRef()
  const pinSection = useRef()
  const scrollAnimation = useRef(null)
  const { sidebarMenuMargin, topBarHeight } = useThemeOptions()
  const data = [1, 2, 3, 4, 5, 6, 7]

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
      h="100vh"
      width={["100%", "100%", `calc(100vw - ${sidebarMenuMargin}px)`]}
      position="relative"
      ml={[0]}
      pt={0}
      ref={pinSection}
    >
      <Container
        maxW="container.xl"
        w="container.xl"
        h="full"
        py={[20, 20, 32, 48, 60]}
      >
        <VStack
          align="start"
          h="100%"
          position="absolute"
          left="0"
          top="0"
          bottom="0"
          px="0"
          bg="dark.default"
          ref={scrollSection}
        >
          <Stack
            direction="row"
            w="auto"
            h="full"
            align="center"
            justify="flex-start"
            spacing={8}
            px={["200px"]}
          >
            <VStack w="660px" mr={40} spacing={12}>
              <Heading className="jumbo" color="white">
                <Text as="span" color="brandYellow.default">
                  Freedom
                </Text>{" "}
                to shape your business{" "}
              </Heading>
              <Heading as="h3" className="thin-h3" color="white">
                With DUQE, you have the freedom to shape your business and scale
                it according to your needs.
              </Heading>
            </VStack>
            {data.map((person, i) => {
              return (
                <VStack
                  h="545px"
                  w="660px"
                  rounded="30px"
                  bg="white"
                  key={i}
                  p={12}
                  spacing={4}
                >
                  <Heading as="h3" className="lower-case">
                    {i} VISA Package
                  </Heading>
                  <Heading
                    as="h4"
                    className="lower-case"
                    sx={{ "&.lower-case": { textTransform: "unset" } }}
                    color="brandBlue.default"
                  >
                    AED 12,500.00
                  </Heading>
                  <Divider />
                  <Text
                    color="brandYellow.default"
                    fontSize="18px"
                    fontWeight="extrabold"
                  >
                    What you'll get
                  </Text>
                  <Box
                    as="ul"
                    sx={{
                      "li.thin-h3": {
                        listStyle: "initial",
                        listStylePosition: "inside",
                      },
                    }}
                  >
                    <Heading as="li" className="thin-h3" textAlign="center">
                      Free Zone Trade License
                    </Heading>
                    <Heading as="li" className="thin-h3" textAlign="center">
                      0 Visa Quota
                    </Heading>
                    <Heading as="li" className="thin-h3" textAlign="center">
                      XX Business Activities
                    </Heading>
                    <Heading as="li" className="thin-h3" textAlign="center">
                      Flexi-desk
                    </Heading>
                  </Box>
                  <Button>Buy Now</Button>
                </VStack>
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
                Looking for the ultimate Free Zone?
              </Heading>
              <Heading
                color="brandYellow.default"
                className="jumbo"
                textAlign={["center", "center", "left"]}
              >
                Let's do this
              </Heading>
              <Link to="/contact-us">
                <Button>Start now</Button>
              </Link>
            </VStack>
          </Stack>
        </VStack>
      </Container>
    </Center>
  )
}

export default Cards
