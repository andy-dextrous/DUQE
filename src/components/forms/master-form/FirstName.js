import React, { useState } from "react"
import { FormControl, Input } from "@chakra-ui/react"
import data from "./data.json"

function FirstName({ handleChange, index }) {
  const [firstName, setFirstName] = useState("")
  return (
    <FormControl>
      <Input
        placeholder="Enter your first name"
        size="lg"
        w="full"
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
    </FormControl>
  )
}

export default FirstName
