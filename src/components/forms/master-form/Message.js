import { Textarea } from "@chakra-ui/react"
import React, { useState } from "react"

function Message({ handleChange, index }) {
  const [message, setMessage] = useState("")
  return (
    <Textarea
      placeholder="What are you looking for?"
      size="lg"
      bg="dark.50"
      id="message"
      name="message"
      minH="200px"
      fontSize={["xs", "sm", "md"]}
      border="none"
      gridColumn={["1/ 2", "1/2", "1/3"]}
      value={message}
      isRequired
      onChange={e => {
        setMessage(e.target.value)
        handleChange(e.target.value, index)
      }}
    />
  )
}

export default Message
