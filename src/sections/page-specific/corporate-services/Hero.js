import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import { Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"
import ScrollDown from "../../../assets/icons/ScrollDown"

function Hero() {
  return (
    <SectionWrapper
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651118247/DUQE/Corporate_Services.png"
      h="100vh"
      overlay
      isFirstSection
      overlayStyle={{
        bg: "linear-gradient(179.45deg, rgba(11, 11, 11, 0) 32.43%, #0B0B0B 99.75%),radial-gradient(84.77% 84.77% at 73.88% 44.21%, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%)",
      }}
      containerSize="xl"
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
            Set up your company in DUQE Free Zone, based on the prestigious QE2.
          </Heading>
        </VStack>
      </Stack>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651108536/DUQE/Q.svg"
        position="absolute"
        top="0"
        right="50px"
        opacity="50%"
      />
      <ScrollDown
        position="absolute"
        width="100px"
        height="100px"
        right="100px"
        bottom="100px"
        zIndex="10"
      />
    </SectionWrapper>
  )
}

export default Hero
