import React, { useState } from "react"
import ControlButtons from "./ControlButtons"
import { Text, VStack, Wrap } from "@chakra-ui/react"
import ButtonCheckbox from "./ui/ButtonCheckbox"
import { FormContext } from "./Context"
import Title from "./ui/Title"
import Panel from "./ui/Panel"

function Q6({ id }) {
  const { handleChange, answers } = React.useContext(FormContext)
  const [liveUae, setLiveUae] = useState([])

  function handleClick(e, option) {
    setLiveUae(e.target.dataset.value)
    handleChange(option, id)
  }

  return (
    <Panel id={id}>
      <VStack align="flex-start" spacing={8}>
        <Title id={id} />

        <Wrap>
          {answers[id]?.options?.map((option, index) => {
            return (
              <ButtonCheckbox
                key={index}
                option={option}
                selectedOptions={liveUae}
                handle={answers[id].handle}
                onClick={e => handleClick(e, option)}
              />
            )
          })}
        </Wrap>
      </VStack>
      <ControlButtons />
    </Panel>
  )
}

export default Q6
