import React from "react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { FormContext } from "./Context"

function ControlButtons({}) {
  const { currentQuestion, setCurrentQuestion, answers, setDirection } =
    React.useContext(FormContext)

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
      className="control"
      w={["full", "full", "unset"]}
      justifyContent={["space-between", "space-between", "flex-start"]}
      pt={[12, 12, 0]}
    >
      <Button
        variant="light"
        leftIcon={<ArrowBackIcon />}
        onClick={handleBackButton}
        isDisabled={currentQuestion === 0}
      >
        Back
      </Button>

      {currentQuestion !== 8 && (
        <Button
          rightIcon={<ArrowForwardIcon />}
          className="control"
          onClick={handleNextButton}
          isDisabled={
            answers[currentQuestion].answer === "" || currentQuestion === 8
          }
        >
          Next
        </Button>
      )}
      {currentQuestion === 8 && (
        <Button
          type="submit"
          className="control"
          isDisabled={currentQuestion !== 8}
        >
          Submit
        </Button>
      )}
    </ButtonGroup>
  )
}

export default ControlButtons
