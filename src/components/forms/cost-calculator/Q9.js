import React, { useState } from "react"
import { FormContext } from "./Context"

import ControlButtons from "./ControlButtons"
import Panel from "./ui/Panel"
import Title from "./ui/Title"
import {
  FormControl,
  Heading,
  Input,
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
            <Input
              placeholder="Phone number"
              name="phone"
              type="tel"
              size="lg"
              isRequired
              w="full"
              bg="dark.50"
              fontSize={["xs", "sm", "md"]}
              required
              value={phone}
              onChange={e => {
                setPhone(e.target.value)
                handleChange(e.target.value, 11)
              }}
            />

            {/* {hiddenFields.map(field => {
              return (
                <input
                  type="hidden"
                  key={field.name}
                  id={getIdentifier(field.name)}
                  name={getIdentifier(field.name)}
                  value={field.value}
                />
              )
            })} */}
          </SimpleGrid>
        </FormControl>
      </VStack>
      <ControlButtons />
    </Panel>
  )
}

export default Q9
