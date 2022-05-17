import React from "react"

import ControlButtons from "./ControlButtons"
import Title from "./ui/Title"
import Panel from "./ui/Panel"
import { Text, VStack } from "@chakra-ui/react"
import DropDown from "./ui/DropDown"

function Q3({ id }) {
  return (
    <Panel id={id}>
      <VStack align="flex-start" spacing={8}>
        <Title id={id} />
        <Text>
          The number of owners/shareholders your company will have can help in
          identifying the most suitable legal structure for your company, as
          well as the number of residence visas you will require.
        </Text>
        <DropDown id={id} />
      </VStack>
      <ControlButtons />
    </Panel>
  )
}

export default Q3
