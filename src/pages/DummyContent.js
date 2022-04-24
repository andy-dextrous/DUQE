import { Box } from "@chakra-ui/react"
import React from "react"
import { Layout } from "../components/Layout"
import SectionWrapper from "../components/SectionWrapper"

function DummyContent() {
  return (
    <Layout>
      <SectionWrapper bg="purple" zIndex="2">
        <Box bg="red" w="200px" h="200px" transform="translateY(200px)">
          Yo
        </Box>
      </SectionWrapper>
      <SectionWrapper bg="brandYellow.default">Yo</SectionWrapper>
    </Layout>
  )
}

export default DummyContent
