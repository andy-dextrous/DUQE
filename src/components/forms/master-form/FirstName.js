import React, { useState } from "react"
import { FormControl, Input } from "@chakra-ui/react"
import data from "./data.json"

function FirstName({ handleChange, index }) {
  const [firstName, setFirstName] = useState("")
  return (
    <Input
      placeholder="Enter your first name"
      gridColumnStart={1}
      gridColumnEnd={[3, 3, 2]}
      size="lg"
      fontSize={["xs", "sm", "md"]}
      bg="dark.50"
      value={firstName}
      id={data[index].name}
      name={data[index].name}
      onChange={e => {
        setFirstName(e.target.value)
        handleChange(e.target.value, 0)
      }}
      isRequired
    />
  )
}

export default FirstName
