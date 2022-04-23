import { Center } from "@chakra-ui/react"
import React from "react"
import Content from "../../../components/Content"
import SectionWrapper from "../../../components/layouts/SectionWrapper"

function OneStopShop() {
  return (
    <SectionWrapper minH="50vh">
      <Center
        position="relative"
        w="100%"
        zIndex="20"
        h={["100px", "130px", "280px"]}
        sx={{ "*": { textAlign: "center !important", width: "100%" } }}
      >
        <Content
          theme="white"
          content="<h1>An End-to-End Solution</h1>"
          featuredWord="Tactic"
          width="lg"
          top={["-3%", "-3%", "-50px", "0", "-2%", "-35%"]}
        />
      </Center>
    </SectionWrapper>
  )
}

export default OneStopShop
