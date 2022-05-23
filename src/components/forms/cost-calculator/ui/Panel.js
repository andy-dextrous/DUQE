import { VStack } from "@chakra-ui/react"
import React from "react"

function Panel({ children, id }) {
  return (
    <VStack
      align="flex-start"
      pt={[8, 8, 0]}
      justify={["flex-start", "flex-start", "center"]}
      h="full"
      spacing={8}
      data-slide-index={id}
      layerStyle="fillSpaceAbsolute"
      visibility="hidden"
    >
      {children}
    </VStack>
  )
}

export default Panel
