import { Box, Heading } from "@chakra-ui/react"
import React from "react"
import { SearchStats } from "./SearchStats"

export const SearchWrapperPosts = ({ children }) => {
  return (
    <Box flex="1" className="search-results-posts">
      <Box as="header">
        <Heading as="h3" color="brandBlue.900">
          Posts
        </Heading>
        <SearchStats type="POST" />
      </Box>
      {children}
    </Box>
  )
}
