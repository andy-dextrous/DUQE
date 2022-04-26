import { Button, Heading, Image, Square, Stack, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"

function Agent() {
  return (
    <SectionWrapper
      bg="brandYellow.default"
      containerSize="xl"
      className="light"
    >
      <Stack direction="row" spacing={40}>
        <VStack
          spacing={12}
          mb={20}
          w="full"
          maxW="container.lg"
          align="start"
          flex="1"
        >
          <Heading className="jumbo">Become an agent</Heading>
          <Heading as="h3" className="thin-h3">
            Be part of DUQE’s vibrant start-up community. Connect with aspiring
            founders, CEOs, freelancers and digital nomads and let them know why
            DUQE is the ideal launchpad for their business.
            <br />
            <br /> Sign up to be a DUQE agent now and inspire other
            entrepreneurs to act on their dreams and business goals.
          </Heading>
          <Button>Become an agent</Button>
        </VStack>
        <Square flex="1" zIndex="2">
          <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650951344/DUQE/Cross_man.png" />
        </Square>
      </Stack>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650951373/DUQE/Circle.svg"
        position="absolute"
        right="0"
        top="25%"
        zIndex="0"
      />
    </SectionWrapper>
  )
}

export default Agent
