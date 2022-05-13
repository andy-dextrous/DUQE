import { Button, Heading, Image, Square, Stack, VStack } from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"

function Agent() {
  return (
    <SectionWrapper
      bg="brandYellow.default"
      containerSize="xl"
      className="light"
    >
      <Stack direction={["column", "column", "row"]} spacing={[8, 8, 20]}>
        <VStack
          spacing={[8]}
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
          <Link to="/agents">
            {" "}
            <Button>Become an agent</Button>
          </Link>
        </VStack>
        <Square flex="1" zIndex="2">
          <Image
            data-speed="1.1"
            src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650951344/DUQE/Cross_man.png"
          />
        </Square>
      </Stack>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650951373/DUQE/Circle.svg"
        position="absolute"
        data-speed="0.9"
        right="0"
        height={["50vh", "50vh", "50vh"]}
        top={["unset", "unset", "25%"]}
        bottom={["10%", "10%", "unset"]}
        zIndex="0"
      />
    </SectionWrapper>
  )
}

export default Agent
