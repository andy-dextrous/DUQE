import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"
import { useVariable } from "../../../hooks"
import { Heading, Stack, Text, VStack } from "@chakra-ui/react"

function IgnitingIdeas() {
  const { componentSpacing } = useVariable()

  return (
    <SectionWrapper
      bg="dark.default"
      containerSize="lg"
      zIndex={["2", "2", "unset"]}
    >
      <VStack spacing={componentSpacing}>
        <Heading className="jumbo" color="white" maxW="100%">
          Igniting Ideas. <br />
          Championing Dreams.
          <br />
          <YellowHeading>Empowering Entrepreneurs.</YellowHeading>
        </Heading>
        <Stack
          direction={["column", "column", "row"]}
          align="flex-start"
          spacing={[8, 8, 20]}
        >
          <Heading as="h3" className="thin-h3" color="white" flex="1">
            DUQE is the free zone for the brave, the focused and the ambitious.
            For the ones to watch, the changemakers, the visionaries – the ones
            who will make a world of difference.
          </Heading>
          <VStack flex="1" spacing={5} align="flex-start">
            <Text color="white">
              If you have single-minded determination and relentless drive, and
              you are searching for your tribe and someone to champion your
              dreams, then this is where you belong.
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
