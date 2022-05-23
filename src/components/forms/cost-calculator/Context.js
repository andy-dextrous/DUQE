import React, { useEffect, useState } from "react"
import data from "./data.json"
import Cookies from "js-cookie"

export const FormContext = React.createContext()

function Context({ children }) {
  // FORM STATE
  const cookieData = Cookies.get("cost-calculator")
  const initialData = cookieData !== undefined ? JSON.parse(cookieData) : data
  let upTo = 0
  if (cookieData !== undefined) {
    upTo = initialData.filter(q => {
      return q.answer !== ""
    }).length
  }

  const [answers, setAnswers] = useState(initialData)
  const [currentQuestion, setCurrentQuestion] = useState(upTo)
  const [direction, setDirection] = useState("up")
  const [submitted, setSubmitted] = useState(false)
  const [finalAmount, setFinalAmount] = useState("12,500")

  const handleChange = (value, id) => {
    const updatedAnswers = [...answers]
    updatedAnswers[id].answer = value
    setAnswers(updatedAnswers)
    Cookies.set("cost-calculator", JSON.stringify(updatedAnswers), {
      expires: 1,
    })
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
