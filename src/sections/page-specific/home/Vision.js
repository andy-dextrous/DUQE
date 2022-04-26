import { Flex, Heading, Image, Spacer, Text, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"

function Vision() {
  return (
    <SectionWrapper
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650944781/DUQE/iStock-92036092_1.png"
      h="100vh"
      overlay
      containerSize="xl"
    >
      <Flex h="full" align="center">
        <Spacer />
        <VStack w="50%" spacing={4} align="start">
          <Heading
            as="h3"
            fontSize="60px"
            fontWeight="300"
            letterSpacing="-0.02em"
            color="white"
            textTransform="uppercase"
          >
            Do you have a vision the world needs to see?
          </Heading>
          <Text fontSize="36px" color="brandYellow.default" fontWeight="300">
            It starts with Duqe
          </Text>
        </VStack>
      </Flex>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650945063/DUQE/Q.svg"
        position="absolute"
        left="200px"
        top="20%"
      />
    </SectionWrapper>
  )
}

export default Vision
