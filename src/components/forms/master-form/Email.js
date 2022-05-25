import { Input } from "@chakra-ui/react"
import React, { useState } from "react"
import data from "./data.json"

function Email({ handleChange, index }) {
  const [email, setEmail] = useState("")
  return (
    <Input
      placeholder="Email address"
      size="lg"
      w="full"
      bg="dark.50"
      fontSize={["xs", "sm", "md"]}
      id={data[index].name}
      name={data[index].name}
      value={email}
      onChange={e => {
        setEmail(e.target.value)
        handleChange(e.target.value, index)
      }}
      isRequired
    />
  )
}

export default Email
