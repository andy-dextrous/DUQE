import React, { useState } from "react"
import { FormControl, Input, Select } from "@chakra-ui/react"
import data from "./data.json"

function HowWeCanHelp({ handleChange, index }) {
  const [selection, setSelection] = useState("")
  return (
    <Select
      bg="dark.50"
      fontSize={["xs", "sm", "md"]}
      color="gray.400"
      value={selection}
      size="lg"
      name={data[index].name}
      id={data[index].name}
      gridColumnStart={1}
      gridColumnEnd={3}
      onChange={e => {
        setSelection(e.target.value)
        handleChange(e.target.value, index)
      }}
    >
      <option value="">How can we help?</option>
      <option value="Business Setup">Business Setup</option>
      <option value="Corporate Services">Corporate Services</option>
      <option value="General Enquiry">General Enquiry</option>
    </Select>
  )
}

export default HowWeCanHelp
