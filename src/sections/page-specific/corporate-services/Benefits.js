import { Heading, Image, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"
import CorporateServices from "../../page-specific/home/Benefits"

function Benefits() {
  return (
    <SectionWrapper
      className="light"
      withContainer={false}
      flexDirection="column"
      pt={[2, 4, 6, 8, 60]}
      align="center"
      _before={{
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "calc(100% - 250px)",
        zIndex: "-2",
        bg: "brandConcrete.default",
      }}
    >
      <VStack spacing={12} mb={20} w="full" maxW="container.lg">
        <Heading className="jumbo">
          Business setup with <YellowHeading>Benefits</YellowHeading>
        </Heading>
        <Heading as="h3" className="thin-h3">
          You don’t have time to stop and count the beans. Your head needs to be
          in the game. Making sales, hustling, working on your idea. At DUQE, we
          take care of the small stuff with our complete spectrum of value-added
          services that make sure you focus on what matters.
        </Heading>
      </VStack>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650946954/DUQE/white_cross.svg"
        position="absolute"
        left="0"
        top="28%"
      />
      <CorporateServices />
    </SectionWrapper>
  )
}

export default Benefits
