import {
  Box,
  Checkbox,
  CheckboxGroup,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"

function CorpServices() {
  return (
    <Box bg="dark.50" rounded="md" p={4} gridColumn={["1/2", "1/2", "1/3"]}>
      <Heading as="h4" py={4} w="full">
        Select Service(s) Required
      </Heading>
      <Stack direction="row">
        <VStack flex="1" align="flex-start">
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
        </VStack>
        <VStack flex="1" align="flex-start">
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
        </VStack>
      </Stack>
    </Box>
  )
}

export default CorpServices
