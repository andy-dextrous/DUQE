import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import React from "react"

function CardMeta({ bg }) {
  return (
    <VStack
      as="article"
      spacing={8}
      bg={bg ? bg : "brandgreen.500"}
      w="100%"
      align="start"
      p={12}
      rounded="2xl"
    >
      <Box>
        <Text>Author</Text>
        <Heading as="h4" fontSize="18px" fontWeight="semibold">
          Mel Pikos
        </Heading>
      </Box>
      <Box>
        <Text>Author</Text>
        <Heading as="h4" fontSize="18px" fontWeight="semibold">
          Mel Pikos
        </Heading>
      </Box>
      <Box>
        <Text>Author</Text>
        <Heading as="h4" fontSize="18px" fontWeight="semibold">
          Mel Pikos
        </Heading>
      </Box>
    </VStack>
  )
}

export default CardMeta
