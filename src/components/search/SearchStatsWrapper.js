import { Box } from "@chakra-ui/react"
import React from "react"

export const SearchStatsWrapper = ({ children }) => {
  return (
    <Box color="brandBlue.900" className="stats">
      {children}
    </Box>
  )
}
