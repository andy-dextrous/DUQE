import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "@chakra-ui/react"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { HStack } from "@chakra-ui/react"

function TopMenu() {
  const menu = useMenuQuery("Top Bar")

  return (
    <HStack spacing={3} as="nav">
      {menu.menuItems.nodes.map((item, i) => (
        <Link
          key={`top-menu-${i}`}
          as={GatsbyLink}
          to={item.path}
          className="nav-link"
          fontWeight="normal"
          _hover={{ textDecoration: "none", color: "brandBlue.default" }}
        >
          {item.label}
        </Link>
      ))}
    </HStack>
  )
}

export default TopMenu
