import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import Form from "../../../components/forms/Form"
import { Container, Heading, VStack } from "@chakra-ui/react"
import ContactPageElements from "../../../components/forms/ContactPageElements"

function ContactUs() {
  return (
    <SectionWrapper minH="100vh" containerSize="lg" pb={60} className="light">
      <VStack spacing={12} align="flex-start">
        <Heading className="jumbo">Contact Us Now!</Heading>
        <Heading as="h3" className="thin-h3">
          Come and drop by our office for a chat, have a cup of coffee (on us!)
          and enjoy the <strong>spectacular views from the QE2.</strong> Fill
          out the form below to book a meeting with one of our experts.
        </Heading>
      </VStack>
      <Container maxW="720" mt={20}>
        <Form formElements={<ContactPageElements />} />
      </Container>
    </SectionWrapper>
  )
}

export default ContactUs
