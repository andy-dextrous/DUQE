import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"

function Choose() {
  return (
    <SectionWrapper bg="brandConcrete.default" className="light">
      <HStack spacing={12}>
        <Heading className="jumbo" flex="2">
          FREEDOM TO CHOOSE FROM OVER{" "}
          <Text as="span" color="brandYellow.default">
            2,500 ACTIVITIES
          </Text>
        </Heading>
        <VStack flex="1" align="flex-start" spacing={[8, 8, 12]}>
          <Heading as="h3" className="thin-h3">
            One of the first steps you'll need to take is to choose your
            business activity. Don't worry though, we've got you. The process is
            super simple (and you can even select multiple activities).
          </Heading>
          <Button>Download PDF</Button>
        </VStack>
      </HStack>
    </SectionWrapper>
  )
}

export default Choose
