import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "../../../gsap"

import SectionWrapper from "../../SectionWrapper"
import { Center, Stack } from "@chakra-ui/react"
import Q1 from "./Q1"
import Q2 from "./Q2"
import Q3 from "./Q3"
import Q4 from "./Q4"
import Q5 from "./Q5"
import Sidebar from "./Sidebar"
import data from "../../../sections/page-specific/cost-calculator/data.json"
import animateSlides from "./animateSlides"

function Form() {
  const showFrontPage = false
  const [answers, setAnswers] = useState(data)
  const [currentQuestion, setCurrentQuestion] = useState(showFrontPage ? 0 : 1)
  const [direction, setDirection] = useState("up")
  const [progress, setProgress] = useState(0)
  const formRef = useRef()

  useEffect(() => {
    const q = gsap.utils.selector(formRef.current)
    gsap.set(q(`[data-slide-index]`), { autoAlpha: 0 })
    gsap.set(q(`[data-slide-index="${currentQuestion}"]`), { autoAlpha: 1 })
  }, [])

  useEffect(() => {
    setProgress(Math.round((currentQuestion / answers.length) * 100))
  }, [answers, currentQuestion])

  useEffect(() => {
    animateSlides(
      gsap.utils.selector(formRef.current),
      currentQuestion,
      direction
    )
  }, [currentQuestion])

  const handleChange = (value, id) => {
    const updatedAnswers = [...answers]
    updatedAnswers[id].answer = value
    setAnswers(updatedAnswers)
  }

  const logic = {
    answers,
    currentQuestion,
    setCurrentQuestion,
    showFrontPage,
    handleChange,
    direction,
    setDirection,
  }

  return (
    <SectionWrapper
      h="100vh"
      width="calc(100vw - 100px)"
      className="light"
      withContainer={false}
      ml="100px"
      px="0"
    >
      <Stack direction="row" w="full" spacing="0">
        <Center as="form" flex="7" m="200px" ref={formRef} position="relative">
          <Q1 data={logic} id={1} />
          <Q2 data={logic} id={2} />
          <Q3 data={logic} id={3} />
          <Q4 data={logic} id={4} />
          <Q5 data={logic} id={5} />
        </Center>
        <Sidebar progress={progress} currentQuestion={currentQuestion} />
      </Stack>
    </SectionWrapper>
  )
}

export default Form
