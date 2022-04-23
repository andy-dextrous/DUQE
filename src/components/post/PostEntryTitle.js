import React from "react"
import { Heading } from "@chakra-ui/react"

export const PostEntryTitle = ({ data }) => {
  return data ? <Heading as="h1">{data}</Heading> : <></>
}
