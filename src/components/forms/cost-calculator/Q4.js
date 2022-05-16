import React, { useEffect, useState } from "react"
import ControlButtons from "./ControlButtons"
import { Heading, Text, VStack, Wrap } from "@chakra-ui/react"
import ButtonCheckbox from "./ui/ButtonCheckbox"

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
      spacing={8}
      data-slide-index={id}
      layerStyle="fillSpaceAbsolute"
      pt={[8, 8, 0]}
      justify={["flex-start", "flex-start", "space-between"]}
      visibility="hidden"
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
              <ButtonCheckbox
                key={index}
                option={option}
                selectedOptions={selectedOptions}
                onClick={handleSelection}
                handle={answers[id].handle}
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

export default Q4
