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
          One of the first steps you'll need to take is to choose your business
          activity. Don't worry though, we've got you. The process is super
          simple (and you can even select multiple activities).
        </Heading>
      </VStack>
    </SectionWrapper>
  )
}

export default Choose
