import React, { useEffect, useState } from "react"
import countryCodes from "country-codes-list"
import data from "./data.json"
import {
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react"

function Phone({ handleChange, index }) {
  const [phone, setPhone] = useState("")
  const [countryCode, setCountryCode] = useState("+971 ")
  const codes = countryCodes.customList(
    "countryNameEn",
    "+{countryCallingCode} "
  )
  const countryCallCodes = Object.entries(codes)
    .sort()
    .map(code => {
      return [code[1], code[0]]
    })

  return (
    <InputGroup>
      <InputLeftElement
        width={24}
        children={
          <Select
            value={countryCode}
            name={data[index[0]].name}
            id={data[index[0]].name}
            fontSize="sm"
            fontWeight="700"
            onChange={e => {
              setCountryCode(e.target.value)
              handleChange(e.target.value, index[0])
            }}
          >
            {countryCallCodes.map(code => {
              return (
                <Text key={code} fontWeight="bold" as="option" value={code[0]}>
                  {code[0] + " ..." + code[1]}
                </Text>
              )
            })}
          </Select>
        }
      />
      <Input
        placeholder="Phone number"
        name={data[index[1]].name}
        id={data[index[1]].name}
        type="tel"
        size="lg"
        w="full"
        bg="dark.50"
        pl={28}
        fontSize={["xs", "sm", "md"]}
        required
        value={phone.number}
        isRequired
        onChange={e => {
          setPhone(e.target.value)
          handleChange(e.target.value, index[1])
        }}
      />
    </InputGroup>
  )
}

export default Phone
