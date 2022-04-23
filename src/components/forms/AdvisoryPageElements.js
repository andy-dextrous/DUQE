import {
  Button,
  HStack,
  Input,
  Textarea,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import React from "react"

function ContactPageElements({ pageName = "advisory", theme = "blue" }) {
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])

  return (
    <>
      <VStack spacing={4} w="full" mb={4}>
        <Input
          placeholder="Enter your full name"
          size="lg"
          variant="filled"
          name="first name"
          fontSize={["xs", "sm", "md"]}
          _focus={{ bg: "gray.100" }}
        />

        <Input
          placeholder="Your email address"
          mb={4}
          variant="filled"
          isRequired
          size="lg"
          name="Email"
          fontSize={["xs", "sm", "md"]}
          _focus={{ bg: "gray.100" }}
        />
        <Input
          placeholder="Preferred contact number"
          isRequired
          size="lg"
          name="Phone"
          mb={4}
          variant="filled"
          fontSize={["xs", "sm", "md"]}
          _focus={{ bg: "gray.100" }}
        />
        <Textarea
          placeholder="What are you looking for?"
          size="lg"
          variant="filled"
          isRequired
          name="Message"
          minH="200px"
          fontSize={["xs", "sm", "md"]}
          _focus={{ bg: "gray.100" }}
        />
        <input type="hidden" id="page" name="Page" value={pageName}></input>
      </VStack>
      <HStack justify="flex-end" mb={8}>
        <Button
          variant={theme === "blue" ? "green" : "dark"}
          size={buttonSize}
          type="submit"
        >
          Submit
        </Button>
      </HStack>
    </>
  )
}

export default ContactPageElements
