import {
  Button,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react"
import React from "react"

function ContactPageElements() {
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  return (
    <SimpleGrid spacing={4} columns={[1, 1, 2]} flex="1">
      <Input
        placeholder="Enter your first name"
        size="lg"
        w="full"
        name="first name"
        fontSize={["xs", "sm", "md"]}
        // variant="filled"
        bg="dark.50"
      />
      <Input
        placeholder="Enter your last name"
        w="full"
        size="lg"
        bg="dark.50"
        name="last name"
        fontSize={["xs", "sm", "md"]}
      />

      <Input
        placeholder="Company name"
        size="lg"
        isRequired
        w="full"
        bg="dark.50"
        name="Company Name"
        fontSize={["xs", "sm", "md"]}
      />
      <Select
        placeholder="How did you hear about us?"
        color="gray.400"
        w="full"
        size="lg"
        bg="dark.50"
        isRequired
        name="Nature of enquiry"
        fontSize={["xs", "sm", "md"]}
      >
        <option value="Google">Google</option>
        <option value="Social Media">Social Media</option>
        <option value="YouTube">YouTube</option>
        <option value="Referral">Referral</option>
        <option value="Other">Other</option>
      </Select>

      <Textarea
        placeholder="What are you looking for?"
        size="lg"
        bg="dark.50"
        isRequired
        name="Message"
        minH="200px"
        fontSize={["xs", "sm", "md"]}
        border="none"
        gridColumn={["1/ 2", "1/2", "1/3"]}
      />
      <input type="hidden" id="page" name="Page" value="Contact Page"></input>
      <HStack justify="flex-start" mt={4}>
        <Button size={buttonSize} type="submit">
          Submit
        </Button>
      </HStack>
    </SimpleGrid>
  )
}

export default ContactPageElements
