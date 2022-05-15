import React, { useEffect, useRef, useState } from "react"
import { gsap } from "../../../gsap"

import { Box, Heading, Progress, Text, VStack } from "@chakra-ui/react"
import { useVariable } from "../../../hooks/useVariable"

function Sidebar({ currentQuestion, answers }) {
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
    const newProgress = Math.round(
      (currentQuestion / (answers.length - 1)) * 100
    )
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
          Q{currentQuestion}
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
      </VStack>
    </Box>
  )
}

export default Sidebar
