import React, { useState } from "react"
import { FormContext } from "./Context"
import countryCodes from "country-codes-list"

import ControlButtons from "./ControlButtons"
import Panel from "./ui/Panel"
import {
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"

function Q9({ id }) {
  const { handleChange } = React.useContext(FormContext)
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [countryCode, setCountryCode] = useState("+971")
  const countryCallCodes = Object.entries(
    countryCodes.customList("countryCode", "+{countryCallingCode}")
  )

  return (
    <Panel id={id}>
      <VStack align="flex-start" spacing={8}>
        <Heading textTransform="uppercase">Contact Details</Heading>
        <Text>
          Please enter your details to get your business setup cost estimate on
          the next screen. We will also send the quote via email.
        </Text>

        <FormControl>
          <SimpleGrid
            spacing={4}
            columns={[1, 1, 2]}
            w={["100%", "100%", "80%"]}
          >
            <Input
              placeholder="Enter your first name"
              size="lg"
              w="full"
              name="firstname"
              fontSize={["xs", "sm", "md"]}
              bg="dark.50"
              required
              value={firstname}
              onChange={e => {
                setFirstName(e.target.value)
                handleChange(e.target.value, 8)
              }}
            />
            <Input
              placeholder="Enter your last name"
              name="lastname"
              w="full"
              size="lg"
              bg="dark.50"
              fontSize={["xs", "sm", "md"]}
              required
              value={lastname}
              onChange={e => {
                setLastName(e.target.value)
                handleChange(e.target.value, 9)
              }}
            />

            <Input
              placeholder="Email address"
              name="email"
              type="email"
              size="lg"
              isRequired
              w="full"
              bg="dark.50"
              fontSize={["xs", "sm", "md"]}
              required
              value={email}
              onChange={e => {
                setEmail(e.target.value)
                handleChange(e.target.value, 10)
              }}
            />
            <InputGroup
              sx={{
                select: {
                  fontSize: ["xs", "sm", "sm"],
                  bg: "transparent",
                  fontWeight: "bold",
                },
              }}
            >
              <InputLeftElement
                width={28}
                children={
                  <Select
                    value={countryCode}
                    onChange={e => {
                      setCountryCode(e.target.value)
                    }}
                  >
                    {countryCallCodes.map(code => {
                      return (
                        <Text fontWeight="bold" as="option">
                          {code[0] + " " + code[1]}
                        </Text>
                      )
                    })}
                  </Select>
                }
              />
              <Input
                placeholder="Phone number"
                name="phone"
                type="tel"
                size="lg"
                isRequired
                w="full"
                bg="dark.50"
                pl={32}
                fontSize={["xs", "sm", "md"]}
                required
                value={phone}
                onChange={e => {
                  setPhone(e.target.value)
                  handleChange(e.target.value, 11)
                }}
              />
            </InputGroup>
          </SimpleGrid>
        </FormControl>
      </VStack>
      <ControlButtons />
    </Panel>
  )
}

export default Q9
