import React from "react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, ButtonGroup } from "@chakra-ui/react"

function ControlButtons({
  currentQuestion,
  setCurrentQuestion,
  answers,
  direction,
  setDirection,
}) {
  function handleBackButton() {
    setCurrentQuestion(currentQuestion - 1)
    setDirection("down")
  }

  function handleNextButton() {
    setCurrentQuestion(currentQuestion + 1)
    setDirection("up")
  }

  return (
    <ButtonGroup
      w={["full", "full", "unset"]}
      justifyContent={["space-between", "space-between", "flex-start"]}
    >
      <Button
        variant="light"
        leftIcon={<ArrowBackIcon />}
        onClick={handleBackButton}
        isDisabled={currentQuestion === 1}
      >
        Back
      </Button>

      {currentQuestion !== answers.length - 1 && (
        <Button
          rightIcon={<ArrowForwardIcon />}
          onClick={handleNextButton}
          isDisabled={
            answers[currentQuestion].answer === "" ||
            currentQuestion === answers.length - 1
          }
        >
          Next
        </Button>
      )}
      {currentQuestion === answers.length - 1 && (
        <Button
          type="submit"
          isDisabled={currentQuestion !== answers.length - 1}
        >
          Submit
        </Button>
      )}
    </ButtonGroup>
  )
}

export default ControlButtons
