import React from "react"
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
    handleChange,
    answers,
    currentQuestion,
    setCurrentQuestion,
    showFrontPage,
    direction,
    setDirection,
  } = data

  return (
    <VStack
      align="flex-start"
      justify="space-between"
      spacing={8}
      data-slide-index={id}
      layerStyle="fillSpaceAbsolute"
    >
      <VStack align="flex-start" spacing={8}>
        <Heading textTransform="uppercase">{answers[id].question}</Heading>
        <Text>
          Please enter your details to get your business setup cost estimate on
          the next screen. We will also send the quote via email:
        </Text>

        <FormControl>
          <SimpleGrid spacing={4} columns={[1, 1, 2]} w="80%">
            <Input
              placeholder="Enter your first name"
              size="lg"
              w="full"
              name="first name"
              fontSize={["xs", "sm", "md"]}
              bg="dark.50"
              required
            />
            <Input
              placeholder="Enter your last name"
              w="full"
              size="lg"
              bg="dark.50"
              name="last name"
              fontSize={["xs", "sm", "md"]}
              required
            />

            <Input
              placeholder="Email address"
              size="lg"
              isRequired
              w="full"
              bg="dark.50"
              name="Company Name"
              fontSize={["xs", "sm", "md"]}
              required
            />
            <Input
              placeholder="Phone number"
              size="lg"
              isRequired
              w="full"
              bg="dark.50"
              name="Company Name"
              fontSize={["xs", "sm", "md"]}
              required
            />

            <input
              type="hidden"
              id="page"
              name="Page"
              value="Cost Calculator"
            ></input>
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
