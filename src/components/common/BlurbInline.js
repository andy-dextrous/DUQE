import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import React from "react"

function BlurbInline({ img, title, text }) {
  return (
    <HStack
      align="start"
      flex="1"
      spacing={5}
      justifyContent="flex-start"
      sx={{ ".blurb-title": { textTransform: "unset" } }}
    >
      <Box h={["40px", "50px"]}>
        <Image src={img} h="100%" />
      </Box>
      <VStack align="flex-start">
        <Text>{title}</Text>
        <Heading as="h4" className="blurb-title">
          {text}
        </Heading>
      </VStack>
    </HStack>
  )
}

export default BlurbInline
