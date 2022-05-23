// Dependencies
import React, { useRef, useContext } from "react"
import { useVariable } from "../../../hooks/useVariable"
import handleSubmit from "./handleSubmit"
import useAnimations from "./useAnimations.js"
import { FormContext } from "./Context"
import Cookies from "js-cookie"

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
    Cookies.remove("cost-calculator")
    const finalAmount =
      getAmountFromVisas(answers) + getAmountFromActivities(answers)
    setFinalAmount(finalAmount)
  }

  function getAmountFromVisas(answers) {
    switch (answers[3].answer) {
      case "1":
        return 12500
      case "2":
        return 14250
      case "3":
        return 16000
      case "4":
        return 17750
      case "5":
        return 19500
      case "6":
        return 21250
      case "7":
        return 23000
      default:
        return 12500
    }
  }

  function getAmountFromActivities(answers) {
    switch (answers[1].answer) {
      case "2":
        return 0
      case "3":
        return 1000
      case "4":
        return 2000
      case "5 or More":
        return 3000
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
      maxH={{ base: "unset", "2xl": "70vh", "3xl": "50vh" }}
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
