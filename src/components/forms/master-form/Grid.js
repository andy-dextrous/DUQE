import { SimpleGrid } from "@chakra-ui/react"
import React from "react"

function Grid({ children }) {
  return (
    <SimpleGrid spacing={4} columns={[1, 1, 2]} layerStyle="fillSpace">
      {children}
    </SimpleGrid>
  )
}

export default Grid
