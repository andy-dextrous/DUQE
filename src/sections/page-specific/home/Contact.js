import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import Form from "../../../components/forms/Form"
import ContactPageElements from "../../../components/forms/ContactPageElements"
import { Heading, Stack, VStack } from "@chakra-ui/react"
import { useVariable } from "../../../hooks"

function Contact() {
  const { newsletterOffset } = useVariable()
  return (
    <SectionWrapper className="light" mb={newsletterOffset}>
      <Stack direction={["column", "column", "row"]} spacing={[20, 20, 40]}>
        <VStack spacing={7} align="start" flex="1">
          <Heading className="jumbo">Contact Us now</Heading>
          <Heading as="h3" className="thin-h3">
            Make your mark in Dubai – the start-up capital of the world – and
            bring your venture to the forefront of the global market.
          </Heading>
        </VStack>
        <Form formElements={<ContactPageElements />} flex="1" />
      </Stack>
    </SectionWrapper>
  )
}

export default Contact
