import React, { useEffect, useState } from "react"
import ControlButtons from "./ControlButtons"
import { Button, Heading, Text, VStack, Wrap } from "@chakra-ui/react"

function Q6({ data, id }) {
  const {
    handleChange,
    answers,
    currentQuestion,
    setCurrentQuestion,
    showFrontPage,
    direction,
    setDirection,
  } = data
  const [liveUae, setLiveUae] = useState(null)

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          laudantium veritatis nulla!
        </Text>

        <Wrap>
          {answers[id]?.options?.map((option, index) => {
            return (
              <Button
                key={index}
                data-value={option}
                variant={liveUae === option ? "formActive" : "formInactive"}
                onClick={e => {
                  setLiveUae(e.target.dataset.value)
                  handleChange(option, id)
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

export default Q6
