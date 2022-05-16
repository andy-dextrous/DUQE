import React, { useEffect, useState } from "react"
import ControlButtons from "./ControlButtons"
import { Heading, Text, VStack, Wrap } from "@chakra-ui/react"
import ButtonCheckbox from "./ui/ButtonCheckbox"

function Q7({ data, id }) {
  const {
    handleChange,
    answers,
    currentQuestion,
    setCurrentQuestion,
    showFrontPage,
    direction,
    setDirection,
  } = data

  const [selectedOptions, setSelectedOptions] = useState([])

  function handleSelection(e) {
    const value = e.target.dataset.value
    const updatedSelectedOptions = [...selectedOptions]
    if (updatedSelectedOptions.indexOf(value) === -1) {
      updatedSelectedOptions.push(value)
    } else {
      updatedSelectedOptions.splice(updatedSelectedOptions.indexOf(value), 1)
    }
    setSelectedOptions(updatedSelectedOptions)
  }

  useEffect(() => {
    if (selectedOptions.length > 0) {
      handleChange(selectedOptions, id)
    } else {
      handleChange("", id)
    }
  }, [selectedOptions])

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
          What is the current or forecasted annual turn-over for your business
          in the next 12 months?
        </Text>

        <Wrap>
          {answers[id]?.options?.map((option, index) => {
            return (
              <ButtonCheckbox
                key={index}
                option={option}
                selectedOptions={selectedOptions}
                onClick={handleSelection}
              />
            )
          })}
        </Wrap>
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

export default Q7
