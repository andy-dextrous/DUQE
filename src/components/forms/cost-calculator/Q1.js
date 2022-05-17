import React from "react"
import { FormContext } from "./Context"

import ControlButtons from "./ControlButtons"
import Title from "./ui/Title"
import Panel from "./ui/Panel"
import { Heading, Select, Text, VStack } from "@chakra-ui/react"

function Q1({ id }) {
  const { handleChange, answers } = React.useContext(FormContext)
  return (
    <Panel id={id}>
      <VStack align="flex-start" spacing={8}>
        <Title id={id} />
        <Heading as="h6">Select the duration of your license</Heading>
        <Text>
          Whether you want a license for one year or you’re planning a long-term
          business, we have it. With our multi-year license setup deals, you not
          only save on time but also on money.
        </Text>
        <Select
          variant="filled"
          size="lg"
          name={answers[id].handle}
          value={answers[id].answer}
          w={["full", "full", "50%"]}
          onChange={e => {
            handleChange(e.target.value, id)
          }}
        >
          <option value="">Select</option>
          {answers[id]?.options?.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            )
          })}
        </Select>
        <Text fontSize={["sm", "sm", "unset"]}>
          * All packages include an LLC-FZ trade license, 3 groups of business
          activities and a shared desk facility, located inside The Meydan
          Hotel.
        </Text>
      </VStack>
      <ControlButtons />
    </Panel>
  )
}

export default Q1
