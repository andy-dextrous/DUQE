import React from "react"
import { useVariable } from "../../../hooks/useVariable"

import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"
import Form from "../../../components/forms/Form"
import ContactPageElements from "../../../components/forms/ContactPageElements"
import Blurb from "../../../components/common/Blurb"
import { Box, Container, Heading, Stack, VStack } from "@chakra-ui/react"

function ContactUs() {
  const mapHtml = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.6509516108!2d54.94729613679833!3d25.07575945545691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sau!4v1651720481315!5m2!1sen!2sau" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  const { containerPaddingY, componentSpacing } = useVariable()
  return (
    <SectionWrapper
      minH="100vh"
      containerSize="lg"
      pb={containerPaddingY}
      className="light"
    >
      <VStack spacing={12} align="flex-start">
        <Heading className="jumbo">
          Contact Us <YellowHeading>Now!</YellowHeading>
        </Heading>
        <Heading as="h3" className="thin-h3">
          Come and drop by our office for a chat, have a cup of coffee (on us!)
          and enjoy the <strong>spectacular views from the QE2.</strong> Fill
          out the form below to book a meeting with one of our experts.
        </Heading>
      </VStack>
      <Container maxW="720" mt={20}>
        <Form formElements={<ContactPageElements />} />
      </Container>
      <Box dangerouslySetInnerHTML={{ __html: mapHtml }} width="full" mt={20} />
      <Stack
        direction={["column", "column", "row"]}
        mt={20}
        spacing={componentSpacing}
      >
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972190/DUQE/swift-easy.svg"
          title="Address"
          text="P.O. Box: 60085, Dubai, UAE"
        />
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972190/DUQE/swift-easy.svg"
          title="Phone Number"
          text="P.O. Box: 60085, Dubai, UAE"
        />
      </Stack>
    </SectionWrapper>
  )
}

export default ContactUs
