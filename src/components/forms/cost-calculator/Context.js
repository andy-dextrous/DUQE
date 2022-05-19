import React, { useEffect, useState } from "react"
import data from "./data.json"

export const FormContext = React.createContext()

function Context({ children }) {
  // FORM STATE
  const [answers, setAnswers] = useState(data)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [direction, setDirection] = useState("up")
  const [submitted, setSubmitted] = useState(false)
  const [finalAmount, setFinalAmount] = useState("12,500")

  const handleChange = (value, id) => {
    const updatedAnswers = [...answers]
    updatedAnswers[id].answer = value
    setAnswers(updatedAnswers)
  }

  useEffect(() => {
    if (submitted) {
      setCurrentQuestion(0)
      setDirection("up")
      setAnswers(data)
    }
  }, [submitted])

  return (
    <FormContext.Provider
      value={{
        answers,
        currentQuestion,
        setCurrentQuestion,
        direction,
        setDirection,
        handleChange,
        submitted,
        setSubmitted,
        finalAmount,
        setFinalAmount,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default Context
