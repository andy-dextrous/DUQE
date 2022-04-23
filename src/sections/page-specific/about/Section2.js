import { Container, Heading, Text } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/layouts/SectionWrapper"

function Section2() {
  return (
    <SectionWrapper minH="unset" position="relative">
      <Container
        h="100%"
        maxW={["container.lg", "container.lg", "container.sm"]}
        mx="0"
        py={[32, 32, 40]}
        data-speed="1.1"
      >
        <Heading
          as="h4"
          textStyle="h4"
          fontSize="16px"
          fontWeight="semibold"
          mb={8}
        >
          Our vision
        </Heading>
        <Heading
          color="brandBlue.900"
          fontSize={["xl", "3xl", "2xl", "4xl", "5xl"]}
        >
          An end-to-end solution for the{" "}
          <Text as="span" color="brandGreen.500">
            workplaces of tomorrow
          </Text>
        </Heading>
      </Container>
    </SectionWrapper>
  )
}

export default Section2
