import React from "react"
import { SearchPostsQuery } from "./SearchPostsQuery"
import { SearchPagesQuery } from "./SearchPagesQuery"
import { SearchResultsWrapper } from "./SearchResultsWrapper"
import { Stack } from "@chakra-ui/react"

export const SearchQueries = () => {
  return (
    <SearchResultsWrapper>
      <Stack direction={["column", "column", "row"]}>
        <SearchPostsQuery />
        <SearchPagesQuery />
      </Stack>
    </SearchResultsWrapper>
  )
}
