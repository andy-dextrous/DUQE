import {
  Button,
  FormControl,
  HStack,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react"
import React from "react"

function Form() {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      action="#"
      netlify-honeypot="bot-field"
      enctype="application/x-www-form-urlencoded"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <VStack spacing={4}>
        <HStack spacing={4} w="full">
          <Input
            placeholder="Enter your first Name"
            size="lg"
            variant="filled"
            w="50%"
            name="first name"
            fontSize={["xs", "sm", "md"]}
          />
          <Input
            placeholder="Enter your last name"
            w="50%"
            size="lg"
            variant="filled"
            name="last name"
            fontSize={["xs", "sm", "md"]}
          />
        </HStack>
        <FormControl>
          <HStack spacing={4} pb={4}>
            <Input
              placeholder="Company Name"
              size="lg"
              isRequired
              w="50%"
              variant="filled"
              name="Company Name"
              fontSize={["xs", "sm", "md"]}
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
          />
          <Input
            placeholder="Preferred contact number"
            isRequired
            size="lg"
            name="Phone"
            mb={4}
            variant="filled"
            fontSize={["xs", "sm", "md"]}
          />
          <Textarea
            placeholder="Your message"
            size="lg"
            variant="filled"
            isRequired
            name="Message"
            minH="200px"
            fontSize={["xs", "sm", "md"]}
          />
        </FormControl>
        <HStack justify="flex-end">
          <Button variant="yellow" size="lg" type="submit">
            Submit
          </Button>
        </HStack>
      </VStack>
    </form>
  )
}

export default Form
