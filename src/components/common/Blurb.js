import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react"
import React from "react"

function Blurb({ img, title, text }) {
  return (
    <VStack
      align="start"
      flex="1"
      spacing={5}
      justifyContent="flex-start"
      sx={{ ".blurb-title": { textTransform: "unset" } }}
    >
      <Box h="80px">
        <Image src={img} h="100%" />
      </Box>
      <Heading as="h4" class="blurb-title">
        {title}
      </Heading>
      <Text fontSize="20px">{text}</Text>
    </VStack>
  )
}

export default Blurb
