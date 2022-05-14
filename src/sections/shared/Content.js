import React from "react"
import SectionWrapper from "../../components/SectionWrapper"
import { Container, VStack, Box } from "@chakra-ui/react"
import ParseWpContent from "../../components/post/ParseWpContent"

function Content({ content, width = "lg" }) {
  return (
    <VStack align="start" justify="start" spacing={8}>
      <Box className="wsywyg">{ParseWpContent(content)}</Box>
    </VStack>
  )
}

export default Content
