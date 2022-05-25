import React, { useEffect, useRef, useState } from "react"
import { Box, FormControl, Heading, Text } from "@chakra-ui/react"

function Form({
  label = "contact",
  formElements,
  formId = "",
  initialState = {},
  ...props
}) {
  const [submitted, setSubmitted] = useState(false)
  const [formHeight, setFormHeight] = useState("50vh")

  const formRef = useRef()

  useEffect(() => {
    const height = formRef.current?.getBoundingClientRect().height
    setFormHeight(`${height}px`)
  }, [])

  return !submitted ? (
    <Box
      as="form"
      name={label}
      data-form-id={formId}
      data-portal-id="21692856"
      ref={formRef}
      {...props}
    >
      <FormControl>{formElements}</FormControl>
    </Box>
  ) : (
    <Box height={formHeight} {...props}>
      <Heading>Success</Heading>
      <Text>Thank you for your enquiry, we'll be in touch soon.</Text>
    </Box>
  )
}

export default Form
