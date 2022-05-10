import React from "react"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/react"

export const SearchResults = ({ posts }) => {
  return (
    !!posts.length && (
      <Box
        as="ul"
        className="post-results"
        sx={{
          "&.post-results li a.result": {
            color: "dark.default",
            transition: "color 0.1s ease-in-out",
            _hover: { color: "brandBlue.default" },
          },
        }}
      >
        {posts.map(post => {
          return (
            <Box
              as="li"
              py={1}
              key={post.slug}
              sx={{ listStyle: "none !important" }}
            >
              <Link
                to={post.uri}
                className="result"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </Box>
          )
        })}
      </Box>
    )
  )
}
