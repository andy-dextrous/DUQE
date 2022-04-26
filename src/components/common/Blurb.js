import { Heading, Image, Text, VStack } from "@chakra-ui/react"
import React from "react"

function Blurb() {
  return (
    <VStack align="start" flex="1">
      <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650943373/DUQE/easy_process.png" />
      <Heading as="h4">Swift & Easy Process</Heading>
      <Text>
        DUQE is where you can get everything done for your business – from setup
        and beyond. Having everything done in-house means you get to enjoy
        significant savings in time and money.
      </Text>
    </VStack>
  )
}

export default Blurb
