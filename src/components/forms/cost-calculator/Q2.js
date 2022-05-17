import React from "react"
import ControlButtons from "./ControlButtons"
import Panel from "./ui/Panel"
import Title from "./ui/Title"
import { Text, VStack } from "@chakra-ui/react"
import DropDown from "./ui/DropDown"

function Q2({ id }) {
  return (
    <Panel id={id}>
      <VStack align="flex-start" spacing={8}>
        <Title id={id} />
        <Text>
          In addition to residence visas for your shareholders, you can apply
          for residence visas for your employees.
        </Text>
        <DropDown id={id} />
      </VStack>
      <ControlButtons />
    </Panel>
  )
}

export default Q2
