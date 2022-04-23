import React from "react"
import { Box } from "@chakra-ui/react"
import ParseWpContent from "../../utils/ParseWpContent"

export const PostEntryContent = ({ data }) => {
  return data ? <Box className="wsywyg">{ParseWpContent(data)}</Box> : <></>
}
