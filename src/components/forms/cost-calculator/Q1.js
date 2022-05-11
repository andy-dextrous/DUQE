import React from "react"
import ControlButtons from "./ControlButtons"
import { Heading, Select, Text, VStack } from "@chakra-ui/react"

function Q1({ data, id }) {
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
    >
      <Heading textTransform="uppercase">{answers[id].question}</Heading>
      <Heading as="h6">Select the duration of your license</Heading>
      <Text>
        Whether you want a license for one year or you’re planning a long-term
        business, we have it. With our multi-year license setup deals, you not
        only save on time but also on money.
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
      <Text>
        * All packages include an LLC-FZ trade license, 3 groups of business
        activities and a shared desk facility, located inside The Meydan Hotel.
      </Text>
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

export default Q1
