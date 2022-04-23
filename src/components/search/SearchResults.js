import React from "react"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/react"

export const SearchResults = ({ posts }) => {
  return (
    !!posts.length && (
      <Box as="ul">
        {posts.map(post => {
          return (
            <Box as="li" py={1} key={post.slug}>
              <Link
                to={post.uri}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </Box>
          )
        })}
      </Box>
    )
  )
}
