import { Heading, Text, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"

function Choose() {
  return (
    <SectionWrapper bg="dark.default" containerSize="lg">
      <VStack spacing={12}>
        <Heading className="jumbo" color="white">
          FREEDOM TO CHOOSE FROM OVER{" "}
          <Text as="span" color="brandYellow.default">
            2,500 ACTIVITIES
          </Text>
        </Heading>
        <Heading as="h3" className="thin-h3" color="white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          corrupti nobis impedit!
        </Heading>
      </VStack>
    </SectionWrapper>
  )
}

export default Choose
