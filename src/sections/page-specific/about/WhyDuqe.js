import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"
import { useVariable } from "../../../hooks"
import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { Link } from "gatsby"

function WhyDuqe() {
  const { containerPaddingY, componentSpacing } = useVariable()
  return (
    <SectionWrapper
      className="light"
      containerSize="xl"
      containerStyles={{ py: 0, pt: containerPaddingY }}
    >
      <Stack direction={["column", "column", "row"]} spacing={[12, 12, 40]}>
        <Box flex="1" position="relative" h="768px">
          <Heading className="jumbo" position="absolute" right="5%" top="-3%">
            <YellowHeading>Why</YellowHeading>
            <br /> Duqe?
          </Heading>
          <Image
            src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651114618/DUQE/QImage.png"
            h="100%"
            w="100%"
            maxW="100vw"
            objectFit="cover"
          />
        </Box>
        <VStack spacing={componentSpacing} align="flex-start" flex="1">
          <Heading>
            REACH YOUR DREAMS. <br />
            <YellowHeading> CREATE YOUR LEGACY.</YellowHeading>
          </Heading>
          <Text>
            Equipped with a modern business centre that offers all-in-one
            support, DUQE is the ideal launchpad for both the budding
            entrepreneurs and seasoned business owners, for the freelancers and
            digital nomads, and for the hustlers and grinders.
          </Text>
          <Link to="/business-activities">
            <Button>See All Activities</Button>
          </Link>
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default WhyDuqe
