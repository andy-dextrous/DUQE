import React from "react"
import { Badge, Box, Link, Text, Wrap } from "@chakra-ui/react"

export const Categories = ({ data }) => {
  return (
    <Box>
      <Text>Categories</Text>
      <Wrap py={1}>
        {data.nodes.map(category => {
          return (
            <Link to={category.uri}>
              <Badge variant="filled">{category.name}</Badge>
            </Link>
          )
        })}
      </Wrap>
    </Box>
  )
}
