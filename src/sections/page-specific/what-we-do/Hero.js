import React, { useRef } from "react"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import { Container, Heading } from "@chakra-ui/react"

function Hero({ title, black, overlay }) {
  const imageRef = useRef()
  return (
    <SectionWrapper
      overlay={overlay ? true : false}
      minH="100vh"
      fullImage={false}
      overflow="hidden"
      ref={imageRef}
    >
      <Container
        maxW={["container.lg", "container.lg", "container.md"]}
        h="full"
      >
        <Heading
          as="h1"
          color={black ? "brandBlue.900" : "white"}
          fontSize={{ base: "4xl", xl: "5xl", "2xl": "6xl" }}
          textAlign="center"
        >
          {title}
        </Heading>
      </Container>
    </SectionWrapper>
  )
}
export default Hero
