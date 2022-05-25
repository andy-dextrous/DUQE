import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import { useVariable } from "../../../hooks"
import { Heading, VStack } from "@chakra-ui/react"
import YellowHeading from "../../../components/common/YellowHeading"

function PerksText() {
  const { containerPaddingY, componentSpacing } = useVariable()
  return (
    <SectionWrapper
      bg="dark.default"
      containerSize="lg"
      containerStyles={{ py: 0, pt: containerPaddingY }}
    >
      <VStack spacing={componentSpacing}>
        <Heading className="jumbo" color="white">
          NOT JUST ANOTHER <YellowHeading>DUBAI FREE ZONE </YellowHeading>
        </Heading>
        <Heading as="h3" className="thin-h3" color="white">
          Make your mark in Dubai, the start-up capital of the world, and bring
          your venture to the forefront of the global market. Be in the hotspot
          for entrepreneurship & next-level ideas where quality of life is
          second to none. Launch your company in DUQE and enjoy all the perks
          Dubai has to offer.
        </Heading>
      </VStack>
    </SectionWrapper>
  )
}

export default PerksText
