import React from "react"
import { Link as GatsbyLink } from "gatsby"
import TopMenu from "./TopMenu"
import { Button, HStack, Link, useBreakpointValue } from "@chakra-ui/react"
import { useThemeOptions } from "../../hooks/useThemeOptions"

function TopBar({ startDark }) {
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
      <HStack spacing="6" pr="50px">
        <Link as={GatsbyLink} to="/contact-us">
          <Button variant="secondary">Login/Sign up</Button>
        </Link>
      </HStack>
    </HStack>
  ) : (
    <></>
  )
}

export default TopBar
