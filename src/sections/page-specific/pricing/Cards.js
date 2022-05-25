import { Link } from "gatsby"
import React, { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "../../../gsap"
import { useThemeOptions } from "../../../hooks/useThemeOptions"
import { useVariable } from "../../../hooks"
import { cardData } from "./cardData"
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
  const { sidebarMenuMargin } = useThemeOptions()
  const { containerPaddingY, sectionPaddingX, componentSpacing } = useVariable()

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
        py={containerPaddingY}
      >
        <VStack
          align="flex-start"
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
            px={[0, 0, "200px"]}
          >
            <VStack
              width={["100vw", "100vw", "40vw"]}
              spacing={componentSpacing}
              mx={sectionPaddingX}
            >
              <Heading className="jumbo" color="white" width="100%">
                <Text as="span" color="brandYellow.default">
                  Freedom
                </Text>{" "}
                to shape your business{" "}
              </Heading>
              <Heading as="h3" className="thin-h3" color="white">
                Explore a range of business solutions tailored to give you the
                most competitive edge and value for money.
              </Heading>
            </VStack>
            {cardData.map((card, i) => {
              return (
                <VStack
                  h={["60vh", "60vh", "500px"]}
                  w={["90vw", "90vw", "500px"]}
                  rounded="30px"
                  bg="white"
                  key={i}
                  p={12}
                  spacing={4}
                >
                  <Heading as="h3" className="lower-case">
                    {card.title}
                  </Heading>
                  <Heading
                    as="h4"
                    className="lower-case"
                    sx={{ "&.lower-case": { textTransform: "unset" } }}
                    color="brandBlue.default"
                  >
                    {card.price}
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
                    {card.contents.map((item, i) => {
                      return (
                        <Heading as="li" className="thin-h3" textAlign="center">
                          {item}
                        </Heading>
                      )
                    })}
                  </Box>
                  <Link to="/contact-us#form">
                    <Button>Buy Now</Button>
                  </Link>
                </VStack>
              )
            })}
            <VStack
              spacing={8}
              align={["center", "center", "start"]}
              width={["100vw", "100vw", "50vw"]}
              px={[8, 8, "10vw"]}
            >
              <Heading
                as="h4"
                textStyle="h4"
                fontSize="16px"
                fontWeight="semibold"
                textAlign={["center", "center", "left"]}
                color="white"
              >
                Looking for the ultimate free zone?
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
