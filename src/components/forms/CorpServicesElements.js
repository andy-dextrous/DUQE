import React, { useContext } from "react"
import { SubmitContext } from "./Form"
import {
  Button,
  Heading,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Checkbox,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react"

function ContactPageElements() {
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  const serverState = useContext(SubmitContext)

  return (
    <SimpleGrid spacing={4} columns={[1, 1, 2]} flex="1" width="full">
      <Heading gridColumn={["1/2", "1/2", "1/3"]} pb={4}>
        Apply Now
      </Heading>
      <Input
        placeholder="Enter your first name"
        size="lg"
        w="full"
        name="first name"
        fontSize={["xs", "sm", "md"]}
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

      <Heading as="h4" gridColumn={["1/2", "1/2", "1/3"]} py={4} w="full">
        Select Service(s) Required
      </Heading>
      <Stack>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
      </Stack>
      <Stack>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
        <Checkbox size="lg" rounded="2px" value="dependent visa">
          Dependent Visa Application
        </Checkbox>
      </Stack>
      <input
        type="hidden"
        id="page"
        name="Page"
        value="Corporate Services Page"
      ></input>
      <HStack justify="flex-start" mt={4}>
        <Button
          size={buttonSize}
          type="submit"
          isLoading={serverState.submitting}
        >
          Submit
        </Button>
      </HStack>
    </SimpleGrid>
  )
}

export default ContactPageElements
