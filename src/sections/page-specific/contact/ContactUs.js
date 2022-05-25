import React from "react"
import { useVariable } from "../../../hooks/useVariable"

import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"
import MasterForm from "../../../components/forms/master-form/Form"

import BlurbInline from "../../../components/common/BlurbInline"
import { Box, Container, Heading, Stack, VStack } from "@chakra-ui/react"

function ContactUs() {
  const mapHtml = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d462557.59355948615!2d54.9452475!3d25.0770982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f454aa34dacbf%3A0xc807568e929e8477!2sDUQE!5e0!3m2!1sen!2sau!4v1653520630023!5m2!1sen!2sau" width="100%" height="500" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  const { componentSpacing } = useVariable()
  return (
    <SectionWrapper minH="100vh" containerSize="lg" className="light" id="form">
      <VStack spacing={12} align="flex-start">
        <Heading className="jumbo">
          Contact Us <YellowHeading>Now!</YellowHeading>
        </Heading>
        <Heading as="h3" className="thin-h3">
          Come and drop by our office for a chat, have a cup of coffee (on us!).
        </Heading>
      </VStack>
      <Container maxW="720" mt={20}>
        <MasterForm />
      </Container>
      <Box
        dangerouslySetInnerHTML={{ __html: mapHtml }}
        width="full"
        mt={20}
        rounded="10px"
        overflow="hidden"
      />
      <Stack
        direction={["column", "column", "row"]}
        mt={20}
        spacing={componentSpacing}
      >
        <BlurbInline
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1652495013/DUQE/Address_Icon.png"
          title="Address"
          text="Quarter Deck, QE2, Mina Rashid, P.O. Box 554789, Dubai, UAE"
          link="https://goo.gl/maps/7c4zhEtNhGK425AG6"
        />
        <BlurbInline
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1652495012/DUQE/Phone_Icon.png"
          title="Phone Number"
          text="+971 4 871 6555"
          link="tel:+97148716555"
        />
      </Stack>
    </SectionWrapper>
  )
}

export default ContactUs
