import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "@chakra-ui/react"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { HStack } from "@chakra-ui/react"

function TopMenu({ startDark }) {
  const menu = useMenuQuery("Top Bar")

  return (
    <HStack spacing={3} as="nav">
      {menu.menuItems.nodes.map((item, i) => (
        <Link
          key={item.databaseId}
          as={GatsbyLink}
          to={item.path}
          color="white"
          fontWeight="normal"
          _hover={{ textDecoration: "none", color: "brandGreen.500" }}
        >
          {item.label}
        </Link>
      ))}
    </HStack>
  )
}

export default TopMenu
