import React from "react"
import { Heading } from "@chakra-ui/react"

export const PostEntryTitle = ({ data }) => {
  return data ? (
    <Heading
      as="h1"
      pb={[0, 0, 6]}
      className="post-title"
      sx={{ "&.post-title": { fontSize: "80px" } }}
    >
      {data}
    </Heading>
  ) : (
    <></>
  )
}
