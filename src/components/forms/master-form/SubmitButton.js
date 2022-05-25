import { Button, HStack, useBreakpointValue } from "@chakra-ui/react"
import React from "react"

function SubmitButton() {
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  return (
    <HStack justify="flex-start" mt={4}>
      <Button size={buttonSize} type="submit">
        Submit
      </Button>
    </HStack>
  )
}

export default SubmitButton
