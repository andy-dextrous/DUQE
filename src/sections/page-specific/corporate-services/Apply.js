import { Heading, Image, Stack, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            magnam laudantium quisquam?
          </Heading>
        </VStack>
        <VStack spacing={12} align="start" flex="1">
          <Image
            w="100%"
            src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651121125/DUQE/Screen_Shot_2022-04-28_at_2.45.08_pm.png"
          />
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default Apply
