import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import { Box, FormControl, Heading, Text } from "@chakra-ui/react"

function GetForm({ formElements, ...props }) {
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
      url: process.env.GETFORM_ENDPOINT,
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
      {...props}
    >
      <input type="hidden" name="form-name" value="contact" />
      <FormControl>{formElements}</FormControl>
    </Box>
  ) : (
    <Box height={formHeight}>
      <Heading>Success</Heading>
      <Text>Thank you for your enquiry, we'll be in touch soon.</Text>
    </Box>
  )
}

export default GetForm
