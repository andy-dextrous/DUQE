import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import Blurb from "../../../components/common/Blurb"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"

function WhyDuqe() {
  return (
    <SectionWrapper
      className="light"
      containerSize="xl"
      containerStyles={{ py: 0, pt: [20, 20, 32, 48, 60] }}
    >
      <Stack direction="row" spacing={40}>
        <Box flex="1" position="relative" h="100%">
          <Heading className="jumbo" position="absolute" right="5%" top="-3%">
            <YellowHeading>Why</YellowHeading>
            <br /> Duqe?
          </Heading>
          <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651114618/DUQE/QImage.png" />
        </Box>
        <VStack spacing={12} align="start" flex="1">
          <Heading>
            REACH YOUR DREAMS.{" "}
            <YellowHeading> CREATE YOUR LEGACY.</YellowHeading>
          </Heading>
          <Text>
            Situated on the prestigious QE2, DUQE is a free zone specially
            designed to give you the freedom and power to transform your
            business ideas into reality. Equipped with a modern business centre
            that offers all-in-one support, DUQE Free Zone is the ideal
            launchpad for both the budding entrepreneurs and seasoned business
            owners, for the freelancers and digital nomads, and for the hustlers
            and grinders. DUQE is where you make things happen.
          </Text>
          <Button>See All Activities</Button>
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default WhyDuqe
