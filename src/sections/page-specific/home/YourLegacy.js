import { Heading, HStack, Text, VStack } from "@chakra-ui/react"
import React from "react"
import Blurb from "../../../components/common/Blurb"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/YellowHeading"

function YourLegacy() {
  return (
    <SectionWrapper containerSize="lg" className="light">
      <VStack spacing={12} alignItems="start">
        <Heading as="h1">
          Your <YellowHeading>Legacy </YellowHeading>Starts at Duqe
        </Heading>
        <Heading as="h3" className="thin-h3">
          The only free zone found on the water, DUQE is based on the
          prestigious QE2. Equipped with a modern business centre that offers
          all-in-one support, DUQE Free Zone is the ideal launchpad for both the
          budding entrepreneurs and seasoned business owners.
        </Heading>
      </VStack>
      <HStack mt={20} spacing={20}>
        <Blurb />
        <Blurb />
        <Blurb />
      </HStack>
      <HStack mt={20} spacing={20}>
        <Blurb />
        <Blurb />
        <Blurb />
      </HStack>
    </SectionWrapper>
  )
}

export default YourLegacy
