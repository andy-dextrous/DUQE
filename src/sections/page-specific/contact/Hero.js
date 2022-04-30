import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import { Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"

function Hero() {
  return (
    <SectionWrapper
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651107901/Rectangle_4.png"
      h="100vh"
      overlay
      containerSize="xl"
    >
      <Stack h="full" w="full" align="center" direction="row">
        <VStack spacing={12} alignItems="start" w="full" width="50%">
          <Heading as="h1" color="white">
            Got Questions?
            <Text as="span" color="brandYellow.default">
              <br></br>Need more info?
            </Text>
          </Heading>
          <Heading as="h3" color="white" className="thin-h3">
            Set up your company in DUQE Free Zone, based on the prestigious QE2.
          </Heading>
        </VStack>
      </Stack>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651107899/Chevron.svg"
        position="absolute"
        top="0"
        right="50px"
        opacity="50%"
      />
    </SectionWrapper>
  )
}

export default Hero
