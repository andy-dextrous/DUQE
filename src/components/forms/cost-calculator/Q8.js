import React from "react"
import ControlButtons from "./ControlButtons"
import { Select, VStack } from "@chakra-ui/react"
import { FormContext } from "./Context"
import Title from "./ui/Title"
import Panel from "./ui/Panel"

function Q8({ id }) {
  const { handleChange, answers } = React.useContext(FormContext)
  return (
    <Panel id={id}>
      <VStack align="flex-start" spacing={8}>
        <Title id={id} />

        <Select
          variant="filled"
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

export default Q8
