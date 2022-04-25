import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import { Button, Center, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { SmartLink } from "../../../components/SmartLink"

function Hero() {
  return (
    <SectionWrapper
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650882721/DUQE-Hero-crop.png"
      h="100vh"
      overlay
      containerSize="xl"
    >
      <Center h="full" w="full">
        <VStack spacing={12} alignItems="start">
          <Heading as="h1" color="white">
            Duqe is for the{" "}
            <Text as="span" color="brandYellow.default">
              disrupters
            </Text>
          </Heading>
          <Heading as="h3" color="white" className="thin-h3">
            Set up your company in DUQE Free Zone, based on the prestigious QE2.
          </Heading>
          <HStack w="full">
            <SmartLink url="/">
              <Button>Start your business</Button>
            </SmartLink>
            <SmartLink url="/">
              <Button variant="outlineWhite">How much does it cost?</Button>
            </SmartLink>
          </HStack>
        </VStack>
      </Center>
    </SectionWrapper>
  )
}

export default Hero
