import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import { Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"

function Hero() {
  return (
    <SectionWrapper
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651121618/DUQE/Business_activities.png"
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
            Business
            <Text as="span" color="brandYellow.default">
              <br />
              Activities
            </Text>
          </Heading>
          <Heading as="h3" color="white" className="thin-h3">
            Setting up in DUQE means freedom. Freedom to chase your dreams.
            Freedom to explore new opportunities. And freedom to choose from
            over 3,500 business activities.
          </Heading>
        </VStack>
      </Stack>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651121616/DUQE/Activity_icon.svg"
        position="absolute"
        top="50px"
        right="0"
        opacity="50%"
      />
    </SectionWrapper>
  )
}

export default Hero
