import React, { useState } from "react"
import data from "./data.json"

export const FormContext = React.createContext()

function Context({ children }) {
  // FORM STATE
  const [answers, setAnswers] = useState(data)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [direction, setDirection] = useState("up")

  const handleChange = (value, id) => {
    const updatedAnswers = [...answers]
    updatedAnswers[id].answer = value
    setAnswers(updatedAnswers)
  }

  return (
    <FormContext.Provider
      value={{
        answers,
        currentQuestion,
        setCurrentQuestion,
        direction,
        setDirection,
        handleChange,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default Context
