import { Heading, Stack, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import Form from "../../../components/forms/Form"
import CorpServicesElements from "../../../components/forms/CorpServicesElements"
import MasterForm from "../../../components/forms/master-form/Form"

function Apply() {
  return (
    <SectionWrapper
      mt={[20, 20, 40]}
      bg="brandYellow.default"
      className="light"
      containerSize="xl"
      pb={[0, 0, 40]}
    >
      <Stack
        direction={["column", "column", "row"]}
        spacing={[12, 12, 40]}
        align="center"
      >
        <VStack spacing={5} flex="1">
          <Heading className="jumbo" flex="1">
            To Start, Apply Now!
          </Heading>
          <Heading as="h3" className="thin-h3" color="dark.default">
            Want to focus on what you do best while we cross your t's and dot
            your i's? Good plan. Simply fill out this form to get started.
          </Heading>
        </VStack>
        <VStack spacing={12} align="start" flex="1" w="full">
          <MasterForm flex="1" />
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default Apply
