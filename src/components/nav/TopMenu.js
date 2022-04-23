import { HStack } from "@chakra-ui/react"
import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "@chakra-ui/react"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import extractRelativePath from "../../utils/extractRelativePath"

function TopMenu({ startDark }) {
  const menu = useMenuQuery("Top Bar")

  return (
    <HStack spacing={3} as="nav">
      {menu.menuItems.nodes.map((item, i) => (
        <Link
          key={item.databaseId}
          as={GatsbyLink}
          to={extractRelativePath(item.path)}
          color={startDark ? "brandBlue.900" : "white"}
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
