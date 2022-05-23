import React, { useEffect, useState } from "react"

import ControlButtons from "./ControlButtons"
import ButtonCheckbox from "./ui/ButtonCheckbox"
import { FormContext } from "./Context"
import Panel from "./ui/Panel"
import Title from "./ui/Title"
import { Text, VStack, Wrap } from "@chakra-ui/react"
import DropDown from "./ui/DropDown"

function Q4({ id }) {
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
  }, [selectedOptions])

  return (
    <Panel id={id}>
      <VStack align="flex-start" spacing={8}>
        <Title id={id} />
        <DropDown id={id} />
        <Text>
          * Additional visa quota can be added at a later time. Does not include
          residence visa
        </Text>
      </VStack>
      <ControlButtons />
    </Panel>
  )
}

export default Q4
