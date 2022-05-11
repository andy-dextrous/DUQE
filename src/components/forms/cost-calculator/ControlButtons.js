import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, ButtonGroup } from "@chakra-ui/react"
import React, { useEffect } from "react"

function ControlButtons({
  currentQuestion,
  setCurrentQuestion,
  answers,
  direction,
  setDirection,
}) {
  useEffect(() => {
    console.log(answers)
  }, [currentQuestion])

  function handleBackButton() {
    setCurrentQuestion(currentQuestion - 1)
    setDirection("down")
  }

  function handleNextButton() {
    setCurrentQuestion(currentQuestion + 1)
    setDirection("up")
  }

  return (
    <ButtonGroup pt={20}>
      <Button
        variant="light"
        leftIcon={<ArrowBackIcon />}
        onClick={handleBackButton}
        isDisabled={currentQuestion === 1}
      >
        Back
      </Button>

      <Button
        rightIcon={<ArrowForwardIcon />}
        onClick={handleNextButton}
        isDisabled={
          answers[currentQuestion].answer === "" ||
          currentQuestion === answers.length
        }
      >
        Next
      </Button>
    </ButtonGroup>
  )
}

export default ControlButtons
