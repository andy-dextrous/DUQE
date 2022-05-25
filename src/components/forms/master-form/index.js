import React, { useEffect, useRef, useState } from "react"
import { Box, FormControl, Heading, Text } from "@chakra-ui/react"
import handleSubmit from "./handleSubmit"

function Form({ ...props }) {
  const [submitted, setSubmitted] = useState(false)
  const [formHeight, setFormHeight] = useState("50vh")

  const formRef = useRef()
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  const { fields, setFields } = useContext(FormContext)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

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
      name={label}
      data-form-id={formId}
      data-portal-id="21692856"
      onSubmit={e => handleSubmit(e, fields, setSubmitted, formId)}
      ref={formRef}
      {...props}
    >
      <FormContext.Provider value={{ fields, setFields }}>
        <FormControl>
          <SimpleGrid spacing={4} columns={[1, 1, 2]} flex="1">
            <Input
              placeholder="Enter your first name"
              size="lg"
              w="full"
              fontSize={["xs", "sm", "md"]}
              bg="dark.50"
              value={firstName}
              onChange={e => {
                setFirstName(e.target.value)
                handleChange(e.target.value, 0)
              }}
              id="firstName"
              name="firstName"
              isRequired
            />
            <Input
              placeholder="Enter your last name"
              w="full"
              size="lg"
              bg="dark.50"
              fontSize={["xs", "sm", "md"]}
              value={lastName}
              onChange={e => {
                setLastName(e.target.value)
                handleChange(e.target.value, 1)
              }}
              id="lastName"
              name="lastName"
              isRequired
            />
            <Input
              placeholder="Email address"
              size="lg"
              w="full"
              bg="dark.50"
              fontSize={["xs", "sm", "md"]}
              value={email}
              onChange={e => {
                setEmail(e.target.value)
                handleChange(e.target.value, 2)
              }}
              id="email"
              name="email"
              isRequired
            />
            <Input
              placeholder="Phone"
              size="lg"
              w="full"
              bg="dark.50"
              value={phone}
              onChange={e => {
                setPhone(e.target.value)
                handleChange(e.target.value, 3)
              }}
              id="phone"
              name="phone"
              isRequired
              fontSize={["xs", "sm", "md"]}
            />
            <Textarea
              placeholder="What are you looking for?"
              size="lg"
              bg="dark.50"
              value={message}
              onChange={e => {
                setMessage(e.target.value)
                handleChange(e.target.value, 4)
              }}
              id="message"
              name="message"
              isRequired
              minH="200px"
              fontSize={["xs", "sm", "md"]}
              border="none"
              gridColumn={["1/ 2", "1/2", "1/3"]}
            />
            <HStack justify="flex-start" mt={4}>
              <Button size={buttonSize} type="submit">
                Submit
              </Button>
            </HStack>
          </SimpleGrid>
        </FormControl>
      </FormContext.Provider>
    </Box>
  ) : (
    <Box height={formHeight} {...props}>
      <Heading>Success</Heading>
      <Text>Thank you for your enquiry, we'll be in touch soon.</Text>
    </Box>
  )
}

export default Form
