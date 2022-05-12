import React from "react"
import ControlButtons from "./ControlButtons"
import { Heading, Select, Text, VStack } from "@chakra-ui/react"

function Q3({ data, id }) {
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
      spacing={8}
      data-slide-index={id}
      layerStyle="fillSpaceAbsolute"
      justify="space-between"
    >
      <VStack align="flex-start" spacing={8}>
        <Heading textTransform="uppercase">{answers[id].question}</Heading>
        <Text>
          The number of owners/shareholders your company will have can help in
          identifying the most suitable legal structure for your company, as
          well as the number of residence visas you will require.
        </Text>
        <Select
          variant="filled"
          size="lg"
          name={answers[id].question}
          w="50%"
          onChange={e => {
            handleChange(e.target.value, id)
          }}
        >
          <option value="">Select</option>

          {answers[id]?.options?.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            )
          })}
        </Select>
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

export default Q3
