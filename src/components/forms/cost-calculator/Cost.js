import { Heading, Image, Text, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../SectionWrapper"
import { FormContext } from "./Context"

function Cost() {
  const { submitted, finalAmount } = React.useContext(FormContext)
  return submitted ? (
    <SectionWrapper
      h="100%"
      w="100%"
      bg="brandYellow.default"
      position="absolute"
      left={[0, 0, "-100px"]}
      top="0"
      zIndex="10"
      className="light"
      py={[20, 20, 0]}
    >
      <VStack
        h="full"
        align="flex-start"
        justify={["flex-start", "flex-start", "center"]}
      >
        <Heading>Thanks for your submission.</Heading>
        <Text>Please check your email for a printable copy of your quote.</Text>
        <Text pt={12}>Total cost</Text>
        <Heading as="h3" color="white" className="jumbo">
          AED {finalAmount}
        </Heading>
      </VStack>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1652932818/DUQE/Man.png"
        position="absolute"
        bottom="-2px"
        right="10%"
        h={["auto", "auto", "60vh"]}
      />
    </SectionWrapper>
  ) : null
}

export default Cost
