import React, { useEffect, useRef, useState } from "react"
import handleSubmit from "./handleSubmit"
import { Box, FormControl } from "@chakra-ui/react"
import FirstName from "./FirstName"
import LastName from "./LastName"
import Email from "./Email"
import Phone from "./Phone"
import Message from "./Message"
import SubmitButton from "./SubmitButton"
import SuccessMessage from "./SuccessMessage"
import data from "./data.json"
import Grid from "./Grid"
import HowWeCanHelp from "./HowWeCanHelp"
import CorpServices from "./CorpServices"
import HowSoon from "./HowSoon"
import Industry from "./Industry"

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
      <FormControl>
        <Grid>
          <FirstName handleChange={handleChange} index={0} />
          <LastName handleChange={handleChange} index={1} />
          <Email handleChange={handleChange} index={2} />
          <Phone handleChange={handleChange} index={[3, 4]} />
          <HowWeCanHelp handleChange={handleChange} index={5} />
          {fields[5].value === "Corporate Services" && (
            <>
              <HowSoon handleChange={handleChange} index={6} />
              <CorpServices handleChange={handleChange} index={7} />
            </>
          )}
          {fields[5].value === "Business Setup" && (
            <>
              <HowSoon handleChange={handleChange} index={6} />
              <Industry handleChange={handleChange} index={8} />
            </>
          )}
          <Message handleChange={handleChange} index={9} />
          <SubmitButton />
        </Grid>
      </FormControl>
    </Box>
  ) : (
    <SuccessMessage formHeight={formHeight} />
  )
}

export default MasterForm
