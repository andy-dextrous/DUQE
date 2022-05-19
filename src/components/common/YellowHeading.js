import React from "react"
import { Text } from "@chakra-ui/react"

function YellowHeading({ children }) {
  return (
    <Text as="span" color="brandYellow.default">
      {children}
    </Text>
  )
}

export default YellowHeading
