import { Button, Checkbox } from "@chakra-ui/react"
import React from "react"

function ButtonCheckbox({
  key,
  option,
  selectedOptions,
  onClick,
  handle = "",
}) {
  return (
    <>
      <Button
        key={key}
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
