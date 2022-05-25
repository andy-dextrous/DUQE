import React, { useEffect, useRef, useState } from "react"
import handleSubmit from "./handleSubmit"
import { Box } from "@chakra-ui/react"
import FirstName from "./FirstName"
import LastName from "./LastName"
import Email from "./Email"
import Phone from "./Phone"
import Message from "./Message"
import SubmitButton from "./SubmitButton"
import SuccessMessage from "./SuccessMessage"
import data from "./data.json"
import Grid from "./Grid"

function MasterForm({ ...props }) {
  const [submitted, setSubmitted] = useState(false)
  const [formHeight, setFormHeight] = useState("50vh")
  const [fields, setFields] = useState(data)
  const formRef = useRef()

  const handleChange = (value, id) => {
    const updatedFields = [...fields]
    updatedFields[id].value = value
    setFields(updatedFields)
  }

  useEffect(() => {
    const height = formRef.current?.getBoundingClientRect().height
    setFormHeight(`${height}px`)
  }, [])

  return !submitted ? (
    <Box
      as="form"
      data-form-id="b6427cc6-9a06-47f1-90a9-e880bf825417"
      data-portal-id="21692856"
      onSubmit={e => handleSubmit(e, fields, setSubmitted)}
      ref={formRef}
      {...props}
    >
      <Grid>
        <FirstName handleChange={handleChange} index={0} />
        <LastName handleChange={handleChange} index={1} />
        <Email handleChange={handleChange} index={2} />
        <Phone handleChange={handleChange} index={[3, 4]} />
        <Message handleChange={handleChange} index={5} />
        <SubmitButton />
      </Grid>
    </Box>
  ) : (
    <SuccessMessage formHeight={formHeight} />
  )
}

export default MasterForm
