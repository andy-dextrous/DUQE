import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "../../../gsap"
import { useVariable } from "../../../hooks/useVariable"
import axios from "axios"
import Cookies from "js-cookie"

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
import data from "./data.json"
import animateSlides from "./animateSlides"
import { Center, Stack } from "@chakra-ui/react"

function Form() {
  // FORM STATE
  const [answers, setAnswers] = useState(data)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [direction, setDirection] = useState("up")

  // REFS
  const formRef = useRef()

  // CONSTANTS
  const { sectionPaddingX, sidebarMenuWidth, mobileNavHeight } = useVariable()

  // ANIMATION HOOK
  useEffect(() => {
    animateSlides(
      gsap.utils.selector(formRef.current),
      currentQuestion,
      direction
    )
  }, [currentQuestion])

  function handleOnSubmit(e) {
    e.preventDefault()
    const isBrowser = typeof window !== "undefined"
    const hutk = isBrowser ? Cookies.get("hubspotutk") : null
    const pageUri = isBrowser ? window.location.href : null
    const body = {
      submittedAt: Date.now(),
      fields: answers.map(answer => {
        return {
          name: answer.handle,
          value:
            typeof answer.answer === "string"
              ? answer.answer
              : answer.answer.join(", "),
        }
      }),
      context: {
        hutk,
        pageUri,
      },
    }

    const data = JSON.stringify(body)
    console.log(body)
    const config = {
      method: "post",
      url: process.env.GATSBY_COST_CALCULATOR_ENDPOINT,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
        window.location = "/"
      })
      .catch(function (error) {
        alert(error)
      })
  }

  useLayoutEffect(() => {
    if (formRef.current) {
      const q = gsap.utils.selector(formRef.current)
      gsap.set(q(`[data-slide-index]`), { autoAlpha: 0 })
      gsap.set(q(`[data-slide-index="${currentQuestion}"]`), { autoAlpha: 1 })
    }
  }, [])

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
          data-form-id="52b8d112-c8e3-4d57-9199-f8fbb373e066"
          data-portal-id="21692856"
          name="cost-calculator"
          flex={[14, 14, "7"]}
          m={sectionPaddingX}
          position="relative"
          maxH={["unset", "unset", "unset", "unset", "unset", "70vh", "60vh"]}
          onSubmit={handleOnSubmit}
          id="cost-calculator"
          ref={formRef}
        >
          <Q1 data={logic} id={0} />
          <Q2 data={logic} id={1} />
          <Q3 data={logic} id={2} />
          <Q4 data={logic} id={3} />
          <Q5 data={logic} id={4} />
          <Q6 data={logic} id={5} />
          <Q7 data={logic} id={6} />
          <Q8 data={logic} id={7} />
          <Q9 data={logic} id={8} />
        </Center>
        <Sidebar currentQuestion={currentQuestion} answers={answers} />
      </Stack>
    </SectionWrapper>
  )
}

export default Form
