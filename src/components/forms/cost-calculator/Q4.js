import React, { useEffect, useState } from "react"
import ControlButtons from "./ControlButtons"
import { Button, Heading, Text, VStack, Wrap } from "@chakra-ui/react"

function Q4({ data, id }) {
  const {
    handleChange,
    answers,
    currentQuestion,
    setCurrentQuestion,
    showFrontPage,
    direction,
    setDirection,
  } = data
  const [selectedButtons, setSelectedButtons] = useState([])

  function handleSelection(value) {
    const updatedSelectedButtons = [...selectedButtons]
    if (updatedSelectedButtons.indexOf(value) === -1) {
      updatedSelectedButtons.push(value)
    } else {
      updatedSelectedButtons.splice(updatedSelectedButtons.indexOf(value), 1)
    }
    setSelectedButtons(updatedSelectedButtons)
  }

  useEffect(() => {
    if (selectedButtons.length > 0) {
      handleChange(selectedButtons, id)
    } else {
      handleChange("", id)
    }
  }, [selectedButtons])

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
          Choose up to 2 business activity groups free of charge to provide your
          business with the great flexibility. Additional activities will result
          in a higher cost.
        </Text>

        <Wrap>
          {answers[id]?.options?.map((option, index) => {
            return (
              <Button
                key={index}
                data-value={option}
                variant={
                  selectedButtons.includes(option)
                    ? "formActive"
                    : "formInactive"
                }
                onClick={e => {
                  handleSelection(e.target.dataset.value)
                }}
              >
                {option}
              </Button>
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

export default Q4
