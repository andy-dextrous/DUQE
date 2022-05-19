import React from "react"
import { Link } from "gatsby"
import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"

function BlurbInline({ img, title, text, link }) {
  return (
    <HStack
      align="start"
      flex="1"
      justifyContent="flex-start"
      spacing={5}
      sx={{ ".blurb-title": { textTransform: "unset" } }}
    >
      <Link to={link}>
        <Box h={["40px", "50px"]}>
          <Image src={img} h="100%" />
        </Box>
        <VStack align="flex-start">
          <Text>{title}</Text>
          <Heading as="h4" className="blurb-title">
            {text}
          </Heading>
        </VStack>
      </Link>
    </HStack>
  )
}

export default BlurbInline
