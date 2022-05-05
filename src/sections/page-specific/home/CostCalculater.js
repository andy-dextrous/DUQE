import React from "react"

import SectionWrapper from "../../../components/SectionWrapper"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
  Button,
  Heading,
  HStack,
  Select,
  Stack,
  VStack,
} from "@chakra-ui/react"

function CostCalculator() {
  return (
    <SectionWrapper
      bg="dark.default"
      containerSize="lg"
      id="cost-calculator-start"
    >
      <VStack spacing={12}>
        <Heading color="white">
          How long do you want to license your business?
        </Heading>
        <Stack direction={["column", "column", "row"]}>
          <VStack>
            <Heading color="white" as="h6">
              Select the duration of your license
            </Heading>
            <HStack>
              <Select variant="filled" size="lg" _focus={{ bg: "white" }}>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
              </Select>
              <Button w="200px" h="100%" rightIcon={<ArrowForwardIcon />}>
                Continue
              </Button>
            </HStack>
          </VStack>
        </Stack>
      </VStack>
    </SectionWrapper>
  )
}

export default CostCalculator
