import { Heading, Text, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"

function PerksText() {
  return (
    <SectionWrapper bg="black" containerSize="lg">
      <VStack spacing={12}>
        <Heading as="h1" color="white">
          The perks of Dubai's only free zone{" "}
          <Text as="span" color="brandYellow.default">
            on a ship
          </Text>
        </Heading>
        <Heading as="h3" className="thin-h3" color="white">
          Make your mark in Dubai, the start-up capital of the world. and bring
          your venture to the forefront of the global market. Be in the hotspot
          for entrepreneurship & next-level ideas where quality of life is
          second to none. Launch a free zone company in DUQE and enjoy all the
          perks Dubai has to offer.
        </Heading>
      </VStack>
    </SectionWrapper>
  )
}

export default PerksText
