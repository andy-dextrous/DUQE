import React from "react"
import { Box } from "@chakra-ui/react"

export const WidgetTitle = ({ children, props }) => {
  return (
    <Box
      as="h2"
      mb={4}
      sx={{
        fontSize: "2xl",
      }}
      className="widget-title"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
