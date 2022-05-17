import React, { useEffect, useState } from "react"
import ControlButtons from "./ControlButtons"
import {
  FormControl,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"

function Q9({ data, id }) {
  const {
    answers,
    currentQuestion,
    setCurrentQuestion,
    showFrontPage,
    direction,
    setDirection,
    handleChange,
  } = data

  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <VStack
      align="flex-start"
      pt={[8, 8, 0]}
      justify={["flex-start", "flex-start", "space-between"]}
      spacing={8}
      data-slide-index={id}
      layerStyle="fillSpaceAbsolute"
      visibility="hidden"
    >
      <VStack align="flex-start" spacing={8}>
        <Heading textTransform="uppercase">{answers[id].question}</Heading>
        <Text>
          Please enter your details to get your business setup cost estimate on
          the next screen. We will also send the quote via email:
        </Text>

        <FormControl>
          <SimpleGrid
            spacing={4}
            columns={[1, 1, 2]}
            w={["100%", "100%", "80%"]}
          >
            <Input
              placeholder="Enter your first name"
              size="lg"
              w="full"
              name="firstname"
              fontSize={["xs", "sm", "md"]}
              bg="dark.50"
              required
              value={firstname}
              onChange={e => {
                setFirstName(e.target.value)
                handleChange(e.target.value, 8)
              }}
            />
            <Input
              placeholder="Enter your last name"
              name="lastname"
              w="full"
              size="lg"
              bg="dark.50"
              fontSize={["xs", "sm", "md"]}
              required
              value={lastname}
              onChange={e => {
                setLastName(e.target.value)
                handleChange(e.target.value, 9)
              }}
            />

            <Input
              placeholder="Email address"
              name="email"
              type="email"
              size="lg"
              isRequired
              w="full"
              bg="dark.50"
              fontSize={["xs", "sm", "md"]}
              required
              value={email}
              onChange={e => {
                setEmail(e.target.value)
                handleChange(e.target.value, 10)
              }}
            />

            <Input
              placeholder="Phone number"
              name="phone"
              type="tel"
              size="lg"
              isRequired
              w="full"
              bg="dark.50"
              fontSize={["xs", "sm", "md"]}
              required
              value={phone}
              onChange={e => {
                setPhone(e.target.value)
                handleChange(e.target.value, 11)
              }}
            />

            <input
              type="hidden"
              id="page"
              name="Page"
              value="Cost Calculator"
            />
          </SimpleGrid>
        </FormControl>
      </VStack>
      <ControlButtons
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        answers={answers}
        showFrontPage={showFrontPage}
        direction={direction}
        setDirection={setDirection}
      />
    </VStack>
  )
}

export default Q9
