import React, { useEffect, useRef } from "react"
import { gsap } from "../../../gsap"

import { Box, Heading, Progress, Text, VStack } from "@chakra-ui/react"

function Sidebar({ progress, currentQuestion }) {
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

  return (
    <Box
      flex="3"
      bg="brandYellow.default"
      py="200px"
      px="100px"
      position="relative"
    >
      <VStack w="full" align="flex-start" spacing={8}>
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
        <Heading as="h3" textTransform="uppercase">
          Cost Calculator
        </Heading>
        <Text>
          Our licences are designed to be scalable, so you can easily add or
          remove users as your business grows or changes
        </Text>
      </VStack>
    </Box>
  )
}

export default Sidebar
