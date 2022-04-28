import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import { Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"

function Hero() {
  return (
    <SectionWrapper
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651131479/DUQE/Pricing.png"
      h="100vh"
      overlay
      overlayStyle={{
        bg: "linear-gradient(179.45deg, rgba(11, 11, 11, 0) 32.43%, #0B0B0B 99.75%),radial-gradient(84.77% 84.77% at 73.88% 44.21%, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%)",
      }}
      containerSize="xl"
    >
      <Stack h="full" w="full" align="center" direction="row">
        <VStack spacing={12} alignItems="start" w="full" width="50%">
          <Heading as="h1" color="white">
            DUQE Business setup
            <Text as="span" color="brandYellow.default">
              <br />
              packages
            </Text>
          </Heading>
          <Heading as="h3" color="white" className="thin-h3">
            With DUQE, you have the freedom to shape your business and scale it
            according to your needs.
          </Heading>
        </VStack>
      </Stack>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651131475/DUQE/Pricing_vector.svg"
        position="absolute"
        top="0"
        right="0"
        zIndex="2"
        opacity="50%"
      />
    </SectionWrapper>
  )
}

export default Hero
