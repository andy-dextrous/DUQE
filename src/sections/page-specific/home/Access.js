import { Button, Heading, Stack, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"

function Access() {
  return (
    <SectionWrapper className="light" containerSize="xl">
      <Stack direction="row" spacing={40}>
        <Heading flex="1" className="upper-case">
          Get access to over <YellowHeading>2,500 Activities</YellowHeading>{" "}
        </Heading>
        <VStack spacing={12} align="start" flex="1">
          <Heading as="h3" className="thin-h3" color="dark.default">
            Setting up in DUQE means freedom. Freedom to chase your dreams.
            Freedom to explore new opportunities. And freedom to choose from
            over 2,500 business activities.
          </Heading>
          <Button>See All Activities</Button>
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default Access
