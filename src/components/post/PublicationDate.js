import { Text } from "@chakra-ui/react"
import React from "react"

export const PublicationDate = ({ data }) => {
  return data ? (
    <Text as="time" fontWeight="bold">
      {data.date}
    </Text>
  ) : (
    <></>
  )
}
