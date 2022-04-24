import React from "react"
import { useRgba } from "../hooks/useRgba"
import { Layout } from "../components/Layout"
import SectionWrapper from "../components/SectionWrapper"
import { Box } from "@chakra-ui/react"

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
