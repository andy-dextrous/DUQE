import { Box, Heading } from "@chakra-ui/react"
import React from "react"
import { SearchStats } from "./SearchStats"

export const SearchWrapperPages = ({ children }) => {
  return (
    <Box flex="1" className="search-results-pages">
      <Box as="header">
        <Heading as="h3">Pages</Heading>
        <SearchStats type="PAGE" />
      </Box>
      {children}
    </Box>
  )
}
