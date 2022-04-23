import React from "react"
import { HStack } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

export const PrevNextPostNavigation = ({ prev, next }) => {
  return (
    <HStack pt={8} justify={!prev ? "flex-end" : "space-between"} w="full">
      {prev && <GatsbyLink to={prev}>Previous Article</GatsbyLink>}
      {next && <GatsbyLink to={next}>Next Article</GatsbyLink>}
    </HStack>
  )
}
