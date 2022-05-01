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
      sx={{ ".custom-font-size-1.chakra-text": { fontSize: "36px" } }}
    >
      <Flex h="full" align="center">
        <Spacer />
        <VStack w="50%" spacing={4} align="start">
          <Heading as="h3" className="thin-h3-caps">
            Do you have a vision the world needs to see?
          </Heading>
          <Text
            className="custom-font-size-1"
            color="brandYellow.default"
            fontWeight="300"
          >
            It starts with Duqe
          </Text>
        </VStack>
      </Flex>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651188880/DUQE/Vision.svg"
        position="absolute"
        left="120px"
        top="20%"
        width={["50%", "50%", "50%", "50%", "40%", "45%"]}
      />
    </SectionWrapper>
  )
}

export default Vision
