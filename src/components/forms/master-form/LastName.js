import React, { useState } from "react"
import { Input } from "@chakra-ui/react"
import data from "./data.json"

function LastName({ handleChange, index }) {
  const [lastName, setLastName] = useState("")
  return (
    <Input
      placeholder="Enter your last name"
      gridColumnStart={[1, 1, 2]}
      gridColumnEnd={[3, 3, 3]}
      size="lg"
      bg="dark.50"
      fontSize={["xs", "sm", "md"]}
      value={lastName}
      id={data[index].name}
      name={data[index].name}
      isRequired
      onChange={e => {
        setLastName(e.target.value)
        handleChange(e.target.value, index)
      }}
    />
  )
}

export default LastName
