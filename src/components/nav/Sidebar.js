import React, { useContext, useEffect, useRef, useState } from "react"
import { gsap, ScrollTrigger } from "../../gsap"
import { Link } from "gatsby"
import { MenuContext } from "../Layout"
import { useRgba } from "../../hooks/useRgba"
import { useThemeOptions } from "../../hooks/useThemeOptions"

import { SocialFollows } from "../social/SocialFollows"
import Hamburger from "./Hamburger"
import Logo from "../../assets/logos/Logo"
import { Box, Center, Flex, VStack } from "@chakra-ui/react"
import useContrastingColor from "../../hooks/useContrastingColor"

function Sidebar() {
  const sidebarRef = useRef()
  const ref = React.useRef()
  const { sidebarMenuWidth } = useThemeOptions()
  const { isMenuOpen } = useContext(MenuContext)
  const [color, setColor] = useState("white")
  const borderColor = useRgba("#bbbbbb", 0.3)

  useContrastingColor({ color, setColor }, ref, { fill: color }, ".chakra-icon")

  return (
    <Flex
      as="aside"
      w={["100vw", "100vw", `${sidebarMenuWidth}px`]}
      bg="transparent"
      position="fixed"
      left="0"
      h={["70px", "70px", "100vh"]}
      top="0"
      align="center"
      justify="center"
      borderRight={[
        "none",
        "none",
        `1px solid ${isMenuOpen ? "transparent" : borderColor}`,
      ]}
      zIndex="popover"
      display={["none", "none", "flex"]}
      ref={sidebarRef}
    >
      <VStack justify="space-between" h="100%" w="100%" py={8}>
        <Hamburger color="white" />
        {!isMenuOpen && (
          <Link to="/">
            <Center w="100%">
              <Logo color="white" />
            </Center>
          </Link>
        )}
        {!isMenuOpen && (
          <Box ref={ref}>
            <SocialFollows
              direction="column"
              spacing={8}
              align="center"
              color={color}
              size="sm"
              h="176px"
            />
          </Box>
        )}
      </VStack>
    </Flex>
  )
}

export default Sidebar
