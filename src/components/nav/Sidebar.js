import React, { useRef } from "react"
import { Link } from "gatsby"
import Logo from "../../assets/logos/Logo"
import { Center, Flex, VStack } from "@chakra-ui/react"
import { useThemeOptions } from "../../hooks/useThemeOptions"
import { SocialFollows } from "../social/SocialFollows"
import Hamburger from "./Hamburger"

function Sidebar() {
  const sidebarRef = useRef()
  const { sidebarMenuWidth } = useThemeOptions()

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
      borderRight={["none", "none", "1px solid rgba(255,255,255,0.2)"]}
      zIndex="sticky"
      display={["none", "none", "flex"]}
      ref={sidebarRef}
    >
      <VStack justify="space-between" h="100%" w="100%" py={8}>
        <Hamburger color="white" />
        <Link to="/">
          <Center w="100%">
            <Logo color="white" />
          </Center>
        </Link>

        <SocialFollows
          direction="column"
          spacing={8}
          align="center"
          color="white"
          size="sm"
        />
      </VStack>
    </Flex>
  )
}

export default Sidebar
