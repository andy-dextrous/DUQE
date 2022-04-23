import React from "react"
import { Box } from "@chakra-ui/react"

export const PostEntryExcerpt = ({ data }) => {
  return data ? (
    <Box
      fontWeight="normal"
      fontSize="18px"
      dangerouslySetInnerHTML={{ __html: data }}
      noOfLines={1}
    />
  ) : (
    <></>
  )
}
