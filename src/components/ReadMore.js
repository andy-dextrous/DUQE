import { HStack, Icon, IconButton, Text } from "@chakra-ui/react"
import React from "react"
import { HiPlusSm } from "react-icons/hi"

function ReadMore() {
  return (
    <HStack py={6}>
      <IconButton bg="brandYellow.500">
        <Icon as={HiPlusSm} />
      </IconButton>
      <Text fontSize={"sm"}>Read More</Text>
    </HStack>
  )
}

export default ReadMore
