import React from "react"
import { Box } from "@chakra-ui/react"

function Content({ content }) {
  return (
    <Box className="wsywyg" dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export default Content
