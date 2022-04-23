import { Button } from "@chakra-ui/react"
import React from "react"
import { FiX } from "react-icons/fi"

export const ResetButton = props => {
  return (
    <Button
      variant="circle"
      className="reset-button"
      aria-label="Reset Search"
      {...props}
    >
      <FiX />
    </Button>
  )
}
