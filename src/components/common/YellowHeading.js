import { Text } from "@chakra-ui/react"
import React from "react"

function YellowHeading({ children }) {
  return (
    <Text as="span" color="brandYellow.default">
      {children}
    </Text>
  )
}

export default YellowHeading
