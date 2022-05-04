import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import { Heading, Image, Stack, VStack } from "@chakra-ui/react"
import ScrollDown from "../../../assets/icons/ScrollDown"
import YellowHeading from "../../../components/common/YellowHeading"

function Hero() {
  return (
    <SectionWrapper
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651108469/DUQE/Agents.png"
      h="100vh"
      overlay
      overlayStyle={{
        bg: "linear-gradient(179.45deg, rgba(11, 11, 11, 0) 32.43%, #0B0B0B 99.75%),radial-gradient(84.77% 84.77% at 73.88% 44.21%, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%)",
      }}
      containerSize="xl"
    >
      <Stack layerStyle="fillSpace" align="center" direction="row">
        <VStack
          spacing={[6, 6, 12]}
          alignItems="start"
          width={["full", "full", "50%"]}
        >
          <Heading as="h1" color="white">
            Got Questions?
            <YellowHeading>
              <br />
              Need more info?
            </YellowHeading>
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
        right={[0, 0, "50px"]}
        opacity="50%"
      />
      <ScrollDown />
    </SectionWrapper>
  )
}

export default Hero
