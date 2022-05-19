import React, { useEffect, useState } from "react"
import ControlButtons from "./ControlButtons"
import { Text, VStack, Wrap } from "@chakra-ui/react"
import ButtonCheckbox from "./ui/ButtonCheckbox"
import { FormContext } from "./Context"
import Title from "./ui/Title"
import Panel from "./ui/Panel"

function Q7({ id }) {
  const { handleChange, answers, currentQuestion } =
    React.useContext(FormContext)

  const [selectedOptions, setSelectedOptions] = useState([])

  function handleSelection(e) {
    const value = e.target.dataset.value
    const updatedSelectedOptions = [...selectedOptions]
    if (updatedSelectedOptions.indexOf(value) === -1) {
      updatedSelectedOptions.push(value)
    } else {
      updatedSelectedOptions.splice(updatedSelectedOptions.indexOf(value), 1)
    }
    setSelectedOptions(updatedSelectedOptions)
  }

  useEffect(() => {
    if (currentQuestion !== id) return
    selectedOptions.length > 0
      ? handleChange(selectedOptions, id)
      : handleChange("", id)
  }, [selectedOptions, id, handleChange, currentQuestion])

  return (
    <Panel id={id}>
      <VStack align="flex-start" spacing={8}>
        <Title id={id} />
        <Text>
          What is the current or forecasted annual turn-over for your business
          in the next 12 months?
        </Text>

        <Wrap>
          {answers[id]?.options?.map((option, index) => {
            return (
              <ButtonCheckbox
                key={index}
                option={option}
                selectedOptions={selectedOptions}
                onClick={handleSelection}
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

export default Q7
