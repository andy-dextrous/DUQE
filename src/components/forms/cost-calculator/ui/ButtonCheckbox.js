import { Button, Checkbox } from "@chakra-ui/react"
import React from "react"

function ButtonCheckbox({ option, selectedOptions, onClick, handle = "" }) {
  return (
    <>
      <Button
        data-value={option}
        variant={
          selectedOptions.includes(option) ? "formActive" : "formInactive"
        }
        onClick={onClick}
      >
        {option}
      </Button>
      <Checkbox
        name={handle}
        value={option}
        visibility="hidden"
        position="absolute"
        isChecked={selectedOptions.includes(option)}
      />
    </>
  )
}

export default ButtonCheckbox
