import React from "react"

import ControlButtons from "./ControlButtons"
import Title from "./ui/Title"
import Panel from "./ui/Panel"
import DropDown from "./ui/DropDown"
import { VStack } from "@chakra-ui/react"

function Q8({ id }) {
  return (
    <Panel id={id}>
      <VStack align="flex-start" spacing={8}>
        <Title id={id} />
        <DropDown id={id} />
      </VStack>
      <ControlButtons />
    </Panel>
  )
}

export default Q8
