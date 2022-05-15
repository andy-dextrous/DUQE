import React from "react"
import ControlButtons from "./ControlButtons"
import { Heading, Select, Text, VStack } from "@chakra-ui/react"

function Q8({ data, id }) {
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
      pt={[8, 8, 0]}
      justify={["flex-start", "flex-start", "space-between"]}
      spacing={8}
      data-slide-index={id}
      layerStyle="fillSpaceAbsolute"
    >
      <VStack align="flex-start" spacing={8}>
        <Heading textTransform="uppercase">{answers[id].question}</Heading>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et minus nam
          numquam.
        </Text>
        <Select
          variant="filled"
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

export default Q8
