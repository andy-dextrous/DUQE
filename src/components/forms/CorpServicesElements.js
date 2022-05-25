import React, { useContext } from "react"
import { SubmitContext } from "./Form"
import {
  Button,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Checkbox,
  useBreakpointValue,
  Stack,
  CheckboxGroup,
  Text,
  Switch,
  FormLabel,
} from "@chakra-ui/react"

function ContactPageElements() {
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  const serverState = useContext(SubmitContext)

  return (
    <SimpleGrid spacing={4} columns={[1, 1, 2]} flex="1" width="full">
      <Heading as="h4" gridColumn={["1/2", "1/2", "1/3"]} pb={4}>
        Apply Now
      </Heading>
      <Input
        placeholder="Enter Full Name"
        size="lg"
        w="full"
        name="full name"
        fontSize={["xs", "sm", "md"]}
        bg="dark.50"
      />
      <Input
        placeholder="Your Company Name"
        w="full"
        size="lg"
        bg="dark.50"
        name="last name"
        fontSize={["xs", "sm", "md"]}
      />

      <Input
        placeholder="Enter Email"
        type="email"
        size="lg"
        isRequired
        w="full"
        bg="dark.50"
        name="Company Name"
        fontSize={["xs", "sm", "md"]}
      />
      <Input
        placeholder="Mobile Number"
        type="phone"
        size="lg"
        isRequired
        w="full"
        bg="dark.50"
        name="Company Name"
        fontSize={["xs", "sm", "md"]}
      />

      <Heading as="h4" gridColumn={["1/2", "1/2", "1/3"]} py={4} w="full">
        Select Service(s) Required
      </Heading>
      <Stack>
        <CheckboxGroup fontSize="sm">
          <Checkbox
            size="lg"
            rounded="2px"
            name="dependent visa"
            aria-describedby="dependent visa"
            value="dependent visa"
          >
            <Text fontSize="sm" fontWeight="bold">
              Dependent Visa Application
            </Text>
          </Checkbox>
          <Checkbox
            size="lg"
            rounded="2px"
            value="Phone Answering Service"
            name="Phone Answering Service"
            aria-describedby="Phone Answering Service"
          >
            <Text fontSize="sm" fontWeight="bold">
              Phone Answering Service
            </Text>
          </Checkbox>
          <Checkbox
            size="lg"
            rounded="2px"
            value="Car Registration Renewal"
            name="Car Registration Renewal"
            aria-describedby="Car Registration Renewal"
          >
            <Text fontSize="sm" fontWeight="bold">
              Car Registration Renewal
            </Text>
          </Checkbox>
          <Checkbox
            size="lg"
            rounded="2px"
            value="Courier Service"
            name="Courier Service"
            aria-describedby="Courier Service"
          >
            <Text fontSize="sm" fontWeight="bold">
              Courier Service
            </Text>
          </Checkbox>
          <Checkbox
            size="lg"
            rounded="2px"
            value="Corporate Banking"
            name="Corporate Banking"
            aria-describedby="Corporate Banking"
          >
            <Text fontSize="sm" fontWeight="bold">
              Corporate Banking
            </Text>
          </Checkbox>
          <Checkbox
            size="lg"
            rounded="2px"
            value="UAE Driver's Licence Application"
            name="UAE Driver's Licence Application"
            aria-describedby="UAE Driver's Licence Application"
          >
            <Text fontSize="sm" fontWeight="bold">
              UAE Driver's Licence Application
            </Text>
          </Checkbox>
          <Checkbox
            size="lg"
            rounded="2px"
            value="Customs Code"
            name="Customs Code"
            aria-describedby="Customs Code"
          >
            <Text fontSize="sm" fontWeight="bold">
              Customs Code
            </Text>
          </Checkbox>
        </CheckboxGroup>
      </Stack>
      <Stack>
        <Checkbox
          size="lg"
          rounded="2px"
          value="Emirates ID"
          name="Emirates ID"
          aria-describedby="Emirates ID"
        >
          <Text fontSize="sm" fontWeight="bold">
            Emirates ID VIP Services
          </Text>
        </Checkbox>
        <Checkbox
          size="lg"
          rounded="2px"
          value="UAE Driver's Licence Transfer"
          name="UAE Driver's Licence Transfer"
          aria-describedby="UAE Driver's Licence Transfer"
        >
          <Text fontSize="sm" fontWeight="bold">
            UAE Driver's Licence Transfer
          </Text>
        </Checkbox>
        <Checkbox
          size="lg"
          rounded="2px"
          value="Document Delivery"
          name="Document Delivery"
          aria-describedby="Document Delivery"
        >
          <Text fontSize="sm" fontWeight="bold">
            Document Delivery
          </Text>
        </Checkbox>
        <Checkbox
          size="lg"
          rounded="2px"
          value="Medical Test VIP Services"
          name="Medical Test VIP Services"
          aria-describedby="Medical Test VIP Services"
        >
          <Text fontSize="sm" fontWeight="bold">
            Medical Test VIP Services
          </Text>
        </Checkbox>
        <Checkbox
          size="lg"
          rounded="2px"
          value="PO Box Registration and Mail Management"
          name="PO Box Registration and Mail Management"
          aria-describedby="PO Box Registration and Mail Management"
        >
          <Text fontSize="sm" fontWeight="bold">
            PO Box Registration and Mail Management
          </Text>
        </Checkbox>
        <Checkbox
          size="lg"
          rounded="2px"
          value="Document Translation and Attestation"
          name="Document Translation and Attestation"
          aria-describedby="Document Translation and Attestation"
        >
          <Text fontSize="sm" fontWeight="bold">
            Document Translation and Attestation
          </Text>
        </Checkbox>
      </Stack>
      <HStack gridColumn={["1/2", "1/2", "1/3"]}>
        <FormLabel as="h4" py={4} htmlFor="company">
          Do you have a company registered in DUQE?
        </FormLabel>
        <Switch id="company" size="lg" />
      </HStack>

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
