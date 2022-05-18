import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Button, HStack, Link, useBreakpointValue } from "@chakra-ui/react"
import { useThemeOptions } from "../../hooks/useThemeOptions"
import TopMenu from "./TopMenu"
import SearchToggle from "../search/SearchToggle"

function TopBar() {
  const shouldDisplaySidebar = useBreakpointValue([false, false, true])
  const { topBarHeight } = useThemeOptions()

  return shouldDisplaySidebar ? (
    <HStack
      as="aside"
      height={`${topBarHeight}px`}
      position="absolute"
      top="0"
      width="100vw"
      zIndex="sticky"
      justify="flex-end"
    >
      <HStack spacing="6" pr="50px" sx={{ a: { color: "white !important" } }}>
        <TopMenu />
        <SearchToggle
          bg="transparent"
          color="white"
          border="none"
          transformOrigin="50% 50%"
          rounded="full"
          size="md"
          display={["none", "none", "flex"]}
          _hover={{ transform: "scale(1.2)", bg: "rgba(255,255,255,0.1)" }}
          _focus={{ color: "dark.default" }}
          _active={{ color: "dark.default", transform: "scale(1.1)" }}
        />
        <Link as={GatsbyLink} to="/cost-calculator">
          <Button variant="secondary">Cost Calculator</Button>
        </Link>
      </HStack>
    </HStack>
  ) : (
    <></>
  )
}

export default TopBar
