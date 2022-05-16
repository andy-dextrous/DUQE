import React, { useEffect, useState } from "react"
import ControlButtons from "./ControlButtons"
import { Button, Heading, Text, VStack, Wrap } from "@chakra-ui/react"
import ButtonCheckbox from "./ui/ButtonCheckbox"

function Q5({ data, id }) {
  const {
    handleChange,
    answers,
    currentQuestion,
    setCurrentQuestion,
    showFrontPage,
    direction,
    setDirection,
  } = data
  const [hasPlan, setHasPlan] = useState([])

  function handleClick(e, option) {
    setHasPlan([e.target.dataset.value])
    handleChange(option, id)
  }

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
          A business plan is required by banks and some free zones when
          establishing your company and business bank account. If you don't have
          one, we can help.
        </Text>

        <Wrap>
          {answers[id]?.options?.map((option, index) => {
            return (
              <ButtonCheckbox
                key={index}
                option={option}
                selectedOptions={hasPlan}
                onClick={e => handleClick(e, option)}
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

export default Q5
