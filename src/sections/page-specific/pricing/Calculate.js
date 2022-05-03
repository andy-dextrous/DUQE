import { Button, Center, Heading, Image, Stack, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"

function Calculate() {
  return (
    <SectionWrapper
      bg="brandYellow.default"
      className="light"
      containerSize="xl"
      pb={0}
      containerStyles={{ pt: "224px", h: "full" }}
    >
      <Stack spacing={24} direction="row">
        <VStack spacing={12} align="flex-start" flex="1">
          <Heading>
            Use the DUQE Cost Calculator to get tailored pricing
          </Heading>
          <Heading as="h3" className="thin-h3">
            Do you need more visas? Looking for a more flexible package? Use our
            Cost Calculator to find out the cost of your business setup.
          </Heading>
          <Button>Calculate Cost</Button>
        </VStack>
        <Center mt={20} flex="1">
          <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650944008/DUQE/Calculator.png" />
        </Center>
      </Stack>
    </SectionWrapper>
  )
}

export default Calculate
