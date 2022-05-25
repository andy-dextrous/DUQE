import { Box, Heading, Text } from "@chakra-ui/react"
import React from "react"

function SuccessMessage({ formHeight, ...props }) {
  return (
    <Box flex="1" height={formHeight} {...props}>
      <Heading>Success</Heading>
      <Text>Thank you for your enquiry, we'll be in touch soon.</Text>
    </Box>
  )
}

export default SuccessMessage
