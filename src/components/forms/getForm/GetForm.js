import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import { Box, FormControl, Heading, Text, VStack } from "@chakra-ui/react"

function GetForm({ formElements, width = "100%", ...props }) {
  const [submitted, setSubmitted] = useState(false)
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const [formHeight, setFormHeight] = useState("50vh")
  const formRef = useRef()

  function handleServerResponse(ok, msg, form) {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
      setSubmitted(true)
      console.log(serverState)
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/e90aebc9-f492-4a83-aa3d-e66a510b389f",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  useEffect(() => {
    const height = formRef.current?.getBoundingClientRect().height
    setFormHeight(`${height}px`)
  }, [])

  return !submitted ? (
    <Box
      as="form"
      name="contact"
      onSubmit={handleOnSubmit}
      ref={formRef}
      width={width}
      {...props}
    >
      <input type="hidden" name="form-name" value="contact" />
      <VStack spacing={4}>
        <FormControl>{formElements}</FormControl>
      </VStack>
    </Box>
  ) : (
    <Box height={formHeight}>
      <Heading color="brandGreen.500">Success</Heading>
      <Text color="gray.50">
        Thank you for your enquiry, we'll be in touch soon.
      </Text>
    </Box>
  )
}

export default GetForm
