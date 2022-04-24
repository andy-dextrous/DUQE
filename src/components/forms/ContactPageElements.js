import {
  Button,
  HStack,
  Input,
  Select,
  Textarea,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import React from "react"

function ContactPageElements() {
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  return (
    <VStack spacing={8}>
      <HStack spacing={4} w="full" mb={4}>
        <Input
          placeholder="Enter your first name"
          size="lg"
          variant="filled"
          w="50%"
          name="first name"
          fontSize={["xs", "sm", "md"]}
          _focus={{ bg: "gray.100" }}
        />
        <Input
          placeholder="Enter your last name"
          w="50%"
          size="lg"
          variant="filled"
          name="last name"
          fontSize={["xs", "sm", "md"]}
          _focus={{ bg: "gray.100" }}
        />
      </HStack>
      <HStack spacing={4} pb={4}>
        <Input
          placeholder="Company name"
          size="lg"
          isRequired
          w="50%"
          variant="filled"
          name="Company Name"
          fontSize={["xs", "sm", "md"]}
          _focus={{ bg: "gray.100" }}
        />
        <Select
          placeholder="How did you hear about us?"
          color="gray.400"
          w="50%"
          size="lg"
          variant="filled"
          isRequired
          name="Nature of enquiry"
          fontSize={["xs", "sm", "md"]}
          _focus={{ bg: "gray.100" }}
        >
          <option value="Google">Google</option>
          <option value="Social Media">Social Media</option>
          <option value="YouTube">YouTube</option>
          <option value="Referral">Referral</option>
          <option value="Other">Other</option>
        </Select>
      </HStack>
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
      <input type="hidden" id="page" name="Page" value="Contact Page"></input>
      <HStack justify="center" mt={4}>
        <Button variant="green" size={buttonSize} type="submit">
          Submit
        </Button>
      </HStack>
    </>
  )
}

export default ContactPageElements
