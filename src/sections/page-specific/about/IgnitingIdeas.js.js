import { Heading, Stack, Text, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"

function IgnitingIdeas() {
  return (
    <SectionWrapper bg="dark.default" containerSize="lg" zIndex="2">
      <VStack spacing={12}>
        <Heading className="jumbo" color="white" maxW="100%">
          Igniting Ideas. <br />
          Championing Dreams.
          <br />
          <Text as="span" color="brandYellow.default">
            Empowering Entrepreneurs.
          </Text>
        </Heading>
        <Stack
          direction={["column", "column", "row"]}
          spacing={[8, 8, 20]}
          align="flex-start"
        >
          <Heading as="h3" className="thin-h3" color="white" flex="1">
            DUQE is the free zone for the brave, the focused and the ambitious.
            For the ones to watch, the changemakers, the visionaries – the ones
            who will make a world of difference.
          </Heading>
          <VStack flex="1" spacing={5}>
            <Text color="white">
              If you have single-minded determination and relentless drive, and
              you are searching for your tribe and someone to champion your
              dreams, then this is where you belong. This is where you get in
              the zone.
            </Text>
            <Heading as="h4" color="brandYellow.default">
              This is where you get in the zone.
            </Heading>
          </VStack>
        </Stack>
      </VStack>
    </SectionWrapper>
  )
}

export default IgnitingIdeas
