import { Flex, Heading, Spacer, Text, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import QIcon from "../../../assets/icons/QIcon"

function Vision() {
  return (
    <SectionWrapper
      bgImage="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650944781/DUQE/iStock-92036092_1.png"
      h="100vh"
      overlay
      containerSize="xl"
      sx={{
        ".custom-font-size-1.chakra-text": {
          fontSize: "36px",
          color: "brandYellow.default",
          fontWeight: "300",
        },
      }}
    >
      <Flex h="full" align="center">
        <Spacer />
        <VStack w="50%" spacing={4} align="start">
          <Heading as="h3" className="thin-h3-caps">
            Do you have a vision the world needs to see?
          </Heading>
          <Text className="custom-font-size-1">It starts with Duqe</Text>
        </VStack>
      </Flex>
      <QIcon
        width="44vw"
        height="44vw"
        position="absolute"
        left="100px"
        top="calc(50vh - 22vw)"
        color="#e0db2a"
        outline
        data-speed="1.1"
      />
    </SectionWrapper>
  )
}

export default Vision
