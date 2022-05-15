import React, { useEffect, useState } from "react"
import ControlButtons from "./ControlButtons"
import { Button, Heading, Text, VStack, Wrap } from "@chakra-ui/react"

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
      pt={[8, 8, 0]}
      justify={["flex-start", "flex-start", "space-between"]}
      spacing={8}
      data-slide-index={id}
      layerStyle="fillSpaceAbsolute"
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

export default Q7
