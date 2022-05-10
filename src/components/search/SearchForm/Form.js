import { Box, VStack } from "@chakra-ui/react"
import React from "react"
import { SubmitButton } from "./SubmitButton"

export const Form = props => {
  const { children, ...rest } = props
  return (
    <Box mb={12}>
      <form {...rest}>
        <VStack alignItems="flex-start" spacing={4} w="100%">
          <Box w="full">{children}</Box>
          <SubmitButton />
        </VStack>
      </form>
    </Box>
  )
}
