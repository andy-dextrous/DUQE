import React, { useState } from "react"
import { FormControl, Input } from "@chakra-ui/react"
import data from "./data.json"

function LastName({ handleChange, index }) {
  const [lastName, setLastName] = useState("")
  return (
    <FormControl>
      <Input
        placeholder="Enter your last name"
        w="full"
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
    </FormControl>
  )
}

export default LastName
