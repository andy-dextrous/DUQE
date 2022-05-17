import React from "react"
import ControlButtons from "./ControlButtons"
import { Select, Text, VStack } from "@chakra-ui/react"
import { FormContext } from "./Context"
import Panel from "./ui/Panel"
import Title from "./ui/Title"

function Q2({ id }) {
  const { handleChange, answers } = React.useContext(FormContext)
  return (
    <Panel id={id}>
      <VStack align="flex-start" spacing={8}>
        <Title id={id} />
        <Text>
          In addition to residence visas for your shareholders, you can apply
          for residence visas for your employees.
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
      </VStack>
      <ControlButtons />
    </Panel>
  )
}

export default Q2
