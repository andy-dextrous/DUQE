import React, { useEffect, useRef, useState } from "react"
import { gsap } from "../../../gsap"

import { useVariable } from "../../../hooks/useVariable"
import { FormContext } from "./Context"
import {
  Box,
  Heading,
  HStack,
  Progress,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react"

function Sidebar() {
  const { currentQuestion, answers } = React.useContext(FormContext)
  const [progress, setProgress] = useState(0)
  const { sectionPaddingX } = useVariable()
  const questionRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      questionRef.current,
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 0.05,
        ease: "Power2.in",
      }
    )
  }, [currentQuestion])

  useEffect(() => {
    const prevProgress = { x: progress }
    const newProgress = Math.round(((currentQuestion + 1) / 9) * 100)
    gsap.to(prevProgress, {
      x: newProgress,
      ease: "Power2.in",
      onUpdate: () => {
        setProgress(prevProgress.x)
      },
    })
  }, [answers, currentQuestion])

  return (
    <Box
      flex={[1, 1, "3"]}
      bg="brandYellow.default"
      py={sectionPaddingX}
      px={[4, 4, "100px"]}
      position="relative"
    >
      <VStack w="full" align="flex-start" spacing={[4, 4, 4, 8]}>
        <Heading className="jumbo" opacity="0.05" w="full" ref={questionRef}>
          Q{currentQuestion + 1}
        </Heading>
        <Progress
          w="full"
          h="5px"
          value={progress}
          sx={{
            "div[role=progressbar]": {
              bg: "brandBlue.default",
            },
          }}
        />
        <Heading
          as="h3"
          textTransform="uppercase"
          display={["none", "none", "block"]}
        >
          Cost Calculator
        </Heading>
        <Text display={["none", "none", "block"]}>
          Our licences are designed to be scalable, so you can easily add or
          remove users as your business grows or changes
        </Text>
        <VStack
          align="flex-start"
          spacing={4}
          display={["none", "none", "block"]}
        >
          {answers
            .filter(answer => {
              return answer.answer !== ""
            })
            .map((answer, index) => {
              return (
                <HStack key={index}>
                  <Text fontSize="sm">{answer.summary}</Text>{" "}
                  <Tag bg="brandYellow.300">{answer.answer}</Tag>
                </HStack>
              )
            })}
        </VStack>
      </VStack>
    </Box>
  )
}

export default Sidebar
