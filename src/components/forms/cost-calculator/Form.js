import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "../../../gsap"
import axios from "axios"
import { useVariable } from "../../../hooks/useVariable"

import SectionWrapper from "../../SectionWrapper"
import Q1 from "./Q1"
import Q2 from "./Q2"
import Q3 from "./Q3"
import Q4 from "./Q4"
import Q5 from "./Q5"
import Q6 from "./Q6"
import Q7 from "./Q7"
import Q8 from "./Q8"
import Q9 from "./Q9"
import Sidebar from "./Sidebar"
import data from "../../../sections/page-specific/cost-calculator/data.json"
import animateSlides from "./animateSlides"
import { Center, Stack } from "@chakra-ui/react"

function Form() {
  const [answers, setAnswers] = useState(data)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [direction, setDirection] = useState("up")
  const [submitted, setSubmitted] = useState(false)
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const formRef = useRef()
  const { sectionPaddingX, sidebarMenuWidth, mobileNavHeight } = useVariable()

  function handleServerResponse(ok, msg, form) {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
      setSubmitted(true)
      console.log(serverState)
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: process.env.GATSBY_COST_CALCULATOR_ENDPOINT,
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  useLayoutEffect(() => {
    if (formRef.current) {
      const q = gsap.utils.selector(formRef.current)
      gsap.set(q(`[data-slide-index]`), { autoAlpha: 0 })
      gsap.set(q(`[data-slide-index="${currentQuestion}"]`), { autoAlpha: 1 })
    }
  }, [])

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
    handleChange,
    direction,
    setDirection,
  }

  return (
    <SectionWrapper
      h={["150vh", "150vh", "130vh", "100vh"]}
      width={["100vw", "100vw", "calc(100vw - 100px)"]}
      className="light"
      withContainer={false}
      ml={[0, 0, 0, sidebarMenuWidth]}
      px="0"
    >
      <Stack
        direction={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
        mt={mobileNavHeight}
        w="full"
        spacing="0"
      >
        <Center
          as="form"
          name="cost-calculator"
          flex={[14, 14, "7"]}
          m={sectionPaddingX}
          position="relative"
          maxH={["unset", "unset", "unset", "unset", "unset", "70vh", "60vh"]}
          onSubmit={handleOnSubmit}
          id="cost-calculator"
          ref={formRef}
        >
          <Q1 data={logic} id={1} />
          <Q2 data={logic} id={2} />
          <Q3 data={logic} id={3} />
          <Q4 data={logic} id={4} />
          <Q5 data={logic} id={5} />
          <Q6 data={logic} id={6} />
          <Q7 data={logic} id={7} />
          <Q8 data={logic} id={8} />
          <Q9 data={logic} id={9} />
        </Center>
        <Sidebar currentQuestion={currentQuestion} answers={answers} />
      </Stack>
    </SectionWrapper>
  )
}

export default Form
