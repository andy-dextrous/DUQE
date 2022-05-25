import React from "react"
import { SmartLink } from "./../../components/SmartLink"
import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"

function BlurbInline({ img, title, text, link }) {
  return (
    <HStack
      align="start"
      flex="1"
      justifyContent="flex-start"
      spacing={5}
      sx={{
        ".blurb-title": { textTransform: "unset" },
        _hover: { ".blurb-title": { color: "brandBlue.default" } },
      }}
    >
      <SmartLink url={link}>
        <Box h={["40px", "50px"]}>
          <Image src={img} h="100%" />
        </Box>
        <VStack align="flex-start">
          <Text>{title}</Text>
          <Heading as="h4" className="blurb-title">
            {text}
          </Heading>
        </VStack>
      </SmartLink>
    </HStack>
  )
}

export default BlurbInline
