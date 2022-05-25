import React, { useContext, useState } from "react"
import {
  Button,
  HStack,
  Input,
  SimpleGrid,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react"

function ContactPageElements() {
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])

  return (
    <SimpleGrid spacing={4} columns={[1, 1, 2]} flex="1">
      <Input
        placeholder="Enter your first name"
        size="lg"
        w="full"
        fontSize={["xs", "sm", "md"]}
        bg="dark.50"
        id="firstName"
        name="firstName"
        isRequired
      />
      <Input
        placeholder="Enter your last name"
        w="full"
        size="lg"
        bg="dark.50"
        fontSize={["xs", "sm", "md"]}
        id="lastName"
        name="lastName"
        isRequired
      />
      <Input
        placeholder="Email address"
        size="lg"
        w="full"
        bg="dark.50"
        fontSize={["xs", "sm", "md"]}
        id="email"
        name="email"
        isRequired
      />
      <Input
        placeholder="Phone"
        size="lg"
        w="full"
        bg="dark.50"
        id="phone"
        name="phone"
        isRequired
        fontSize={["xs", "sm", "md"]}
      />
      <Textarea
        placeholder="What are you looking for?"
        size="lg"
        bg="dark.50"
        id="message"
        name="message"
        isRequired
        minH="200px"
        fontSize={["xs", "sm", "md"]}
        border="none"
        gridColumn={["1/ 2", "1/2", "1/3"]}
      />
      <HStack justify="flex-start" mt={4}>
        <Button size={buttonSize} type="submit">
          Submit
        </Button>
      </HStack>
    </SimpleGrid>
  )
}

export default ContactPageElements
