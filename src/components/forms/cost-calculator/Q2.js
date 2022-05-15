import React from "react"
import ControlButtons from "./ControlButtons"
import { Heading, Select, Text, VStack } from "@chakra-ui/react"

function Q2({ data, id }) {
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
      pt={[8, 8, 0]}
      justify={["flex-start", "flex-start", "space-between"]}
      layerStyle="fillSpaceAbsolute"
      visibility="hidden"
    >
      <VStack align="flex-start" spacing={8}>
        <Heading textTransform="uppercase">{answers[id].question}</Heading>
        <Text>
          In addition to residence visas for your shareholders, you can apply
          for residence visas for your employees.
        </Text>
        <Select
          variant="filled"
          size="lg"
          name={answers[id].question}
          w={["full", "full", "50%"]}
          onChange={e => {
            handleChange(e.target.value, id)
          }}
        >
          <option value="" selected={answers[id].answer === ""}>
            Select
          </option>

          {answers[id]?.options?.map((option, index) => {
            return (
              <option
                key={index}
                value={option}
                selected={option === answers[id].answer}
              >
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

export default Q2
