import React from "react"

import ControlButtons from "./ControlButtons"
import Title from "./ui/Title"
import Panel from "./ui/Panel"
import { Heading, Text, VStack } from "@chakra-ui/react"
import DropDown from "./ui/DropDown"

function Q1({ id }) {
  return (
    <Panel id={id}>
      <VStack align="flex-start" spacing={8}>
        <Title id={id} />
        <Text>
          Your business category will help determine which jurisdiction, trade
          licence and business activity will apply to your company.
        </Text>
        <DropDown id={id} />
      </VStack>
      <ControlButtons />
    </Panel>
  )
}

export default Q1
