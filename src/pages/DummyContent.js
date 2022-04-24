import { Box } from "@chakra-ui/react"
import React from "react"
import { Layout } from "../components/Layout"
import SectionWrapper from "../components/SectionWrapper"
import { useRgba } from "../hooks/useRgba"

function DummyContent() {
  return (
    <Layout>
      <SectionWrapper bg={useRgba("brandYellow.default", 0.9)} zIndex="1">
        <Box bg="red" w="200px" h="200px" transform="translateY(200px)">
          Yo
        </Box>
      </SectionWrapper>
      <SectionWrapper bg={useRgba("brandYellow.default", 0.95)}>
        Yo
      </SectionWrapper>
    </Layout>
  )
}

export default DummyContent
