import React from "react"
import { Heading, VStack } from "@chakra-ui/react"
import SectionWrapper from "../../components/layouts/SectionWrapper"

function ImageFullW({ data }) {
  return (
    <SectionWrapper overlay={true} bgImage={data} minH="100vh">
      <VStack spacing={6}>
        <Heading
          as="h4"
          color="white"
          fontSize={["lg", "xl"]}
          fontWeight={["normal", "medium", "light"]}
          letterSpacing="wide"
          lineHeight="none"
          textAlign="center"
        >
          An end-to end solution for creating
        </Heading>
        <Heading
          as="h1"
          color="white"
          fontSize={["4xl", "5xl", "55px", "55px", "55px", "65px"]}
          lineHeight="none"
          textAlign="center"
          pb={2}
        >
          Workspaces that engage
        </Heading>
      </VStack>
    </SectionWrapper>
  )
}

export default ImageFullW
