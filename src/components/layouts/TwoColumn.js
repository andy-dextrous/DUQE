import { Stack, VStack } from "@chakra-ui/react"
import React from "react"

function TwoColumn({ child1, child2, flexLeft = 1, flexRight = 1, ...props }) {
  return (
    <Stack
      direction={["column", "column", "row"]}
      flex={1}
      align="center"
      spacing={[0, 0, 20]}
      layerStyle="fillSpace"
      {...props}
    >
      <VStack
        spacing={{ base: 3, "2xl": 4 }}
        py={4}
        align={["center", "center", "start"]}
        position="relative"
        flex={flexLeft}
        textAlign={["center", "center", "left"]}
      >
        {child1}
      </VStack>
      <VStack
        spacing={{ base: 3, "2xl": 4 }}
        py={4}
        align={["center", "center", "start"]}
        position="relative"
        flex={flexRight}
        textAlign={["center", "center", "left"]}
      >
        {child2}
      </VStack>
    </Stack>
  )
}

export default TwoColumn
