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
        <Heading as="h6">Select the duration of your license</Heading>
        <Text>
          Whether you want a license for one year or you’re planning a long-term
          business, we have it. With our multi-year license setup deals, you not
          only save on time but also on money.
        </Text>
        <DropDown id={id} />
        <Text fontSize={["sm", "sm", "unset"]}>
          * All packages include an LLC-FZ trade license, 3 groups of business
          activities and a shared desk facility, located inside The Meydan
          Hotel.
        </Text>
      </VStack>
      <ControlButtons />
    </Panel>
  )
}

export default Q1
