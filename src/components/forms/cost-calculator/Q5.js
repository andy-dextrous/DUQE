import React, { useState } from "react"
import { FormContext } from "./Context"

import ControlButtons from "./ControlButtons"
import ButtonCheckbox from "./ui/ButtonCheckbox"
import { Text, VStack, Wrap } from "@chakra-ui/react"
import Panel from "./ui/Panel"
import Title from "./ui/Title"

function Q5({ id }) {
  const { handleChange, answers } = React.useContext(FormContext)
  const [hasPlan, setHasPlan] = useState([])

  function handleClick(e, option) {
    setHasPlan([e.target.dataset.value])
    handleChange(option, id)
  }

  return (
    <Panel id={id}>
      <VStack align="flex-start" spacing={8}>
        <Title id={id} />
        <Text>
          A business plan is required by banks and some free zones when
          establishing your company and business bank account. If you don't have
          one, we can help.
        </Text>

        <Wrap>
          {answers[id]?.options?.map((option, index) => {
            return (
              <ButtonCheckbox
                key={index}
                option={option}
                selectedOptions={hasPlan}
                onClick={e => handleClick(e, option)}
                handle={answers[id].handle}
              />
            )
          })}
        </Wrap>
      </VStack>
      <ControlButtons />
    </Panel>
  )
}

export default Q5
