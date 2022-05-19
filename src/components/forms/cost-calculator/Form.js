// Dependencies
import React, { useRef, useContext } from "react"
import { useVariable } from "../../../hooks/useVariable"
import handleSubmit from "./handleSubmit"
import useAnimations from "./useAnimations.js"
import { FormContext } from "./Context"

// Components
import Q1 from "./Q1"
import Q2 from "./Q2"
import Q3 from "./Q3"
import Q4 from "./Q4"
import Q5 from "./Q5"
import Q6 from "./Q6"
import Q7 from "./Q7"
import Q8 from "./Q8"
import Q9 from "./Q9"
import { Center } from "@chakra-ui/react"

function Form() {
  const formRef = useRef()
  const { sectionPaddingX } = useVariable()
  const { answers, setFinalAmount, setSubmitted } = useContext(FormContext)

  // ANIMATION HOOK
  useAnimations(formRef)

  function submitForm(e, answers) {
    handleSubmit(e, answers, setSubmitted)
    const finalAmount =
      getAmountFromVisas(answers) + getAmountFromActivities(answers)
    setFinalAmount(finalAmount)
  }

  function getAmountFromVisas(answers) {
    switch (answers[0].answer) {
      case "1 year":
        return 12500
      case "2 years":
        return 14250
      case "3 years":
        return 16000
      case "4 years":
        return 17750
      case "5 years":
        return 19500
      case "6 years":
        return 21250
      case "7 years":
        return 23000
      default:
        return 12500
    }
  }

  function getAmountFromActivities(answers) {
    switch (answers[3].answer) {
      case "Activity 1":
        return 0
      case "Activity 2":
        return 0
      case "Activity 3":
        return 0
      case "Activity 4":
        return 0
      default:
        return 0
    }
  }

  return (
    <Center
      as="form"
      name="cost-calculator"
      id="cost-calculator"
      data-form-id="52b8d112-c8e3-4d57-9199-f8fbb373e066"
      data-portal-id="21692856"
      flex={[14, 14, "7"]}
      position="relative"
      maxH={{ base: "unset", "2xl": "70vh", "3xl": "60vh" }}
      m={sectionPaddingX}
      onSubmit={e => submitForm(e, answers)}
      ref={formRef}
    >
      <Q1 id={0} />
      <Q2 id={1} />
      <Q3 id={2} />
      <Q4 id={3} />
      <Q5 id={4} />
      <Q6 id={5} />
      <Q7 id={6} />
      <Q8 id={7} />
      <Q9 id={8} />
    </Center>
  )
}
export default Form
