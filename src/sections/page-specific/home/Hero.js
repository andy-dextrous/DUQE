import React from "react"
import { Link } from "gatsby"
import SectionWrapper from "../../../components/SectionWrapper"
import { Button, Center, Heading, HStack, Text, VStack } from "@chakra-ui/react"

function Hero() {
  return (
    <SectionWrapper
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1650858611/DUQE/DUQE_Hero.jpg"
      h="100vh"
      overlay
      containerSize="xl"
    >
      <Center h="full" w="full">
        <VStack spacing={12} alignItems="start">
          <Heading as="h1" color="white">
            Duqe is for the{" "}
            <Text as="span" color="brandYellow.default">
              disrupters
            </Text>
          </Heading>
          <Heading
            as="h3"
            color="white"
            fontSize="36px"
            fontWeight="light"
            textTransform="unset"
          >
            Set up your company in DUQE Free Zone, based on the prestigious QE2.
          </Heading>
          <HStack w="full">
            <Link to="#">
              <Button>Start your business</Button>
            </Link>
            <Link to="#">
              <Button variant="outlineWhite">How much does it cost?</Button>
            </Link>
          </HStack>
        </VStack>
      </Center>
    </SectionWrapper>
  )
}

export default Hero
