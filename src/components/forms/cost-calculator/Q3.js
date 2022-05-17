import React from "react"
import { FormContext } from "./Context"

import ControlButtons from "./ControlButtons"
import Title from "./ui/Title"
import Panel from "./ui/Panel"
import { Select, Text, VStack } from "@chakra-ui/react"

function Q3({ id }) {
  const { handleChange, answers } = React.useContext(FormContext)
  return (
    <Panel id={id}>
      <VStack align="flex-start" spacing={8}>
        <Title id={id} />
        <Text>
          The number of owners/shareholders your company will have can help in
          identifying the most suitable legal structure for your company, as
          well as the number of residence visas you will require.
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

export default Q3
