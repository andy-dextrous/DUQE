import { Select } from "@chakra-ui/react"
import React from "react"
import { FormContext } from "../Context"

function DropDown({ id }) {
  const { handleChange, answers } = React.useContext(FormContext)
  return (
    <Select
      variant="filled"
      size="lg"
      name={answers[id].handle}
      value={answers[id].answer}
      w={["full", "full", "50%"]}
      onChange={e => {
        handleChange(e.target.value, id)
      }}
    >
      <option value="">Select</option>
      {answers[id]?.options?.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        )
      })}
    </Select>
  )
}

export default DropDown
