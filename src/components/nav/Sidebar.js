import React, { useRef } from "react"
import { Link } from "gatsby"

import LogoVertical from "../../assets/Icons/LogoVertical"
import Logo from "../../assets/logos/Logo"
import { Center, Flex, useBreakpointValue } from "@chakra-ui/react"

function Sidebar() {
  const sidebarRef = useRef()
  const logo = useBreakpointValue({
    base: <Logo height="30px" />,
    md: <LogoVertical />,
  })

  return (
    <Flex
      as="aside"
      w={["100vw", "100vw", "90px"]}
      bg="white"
      position="fixed"
      left="0"
      h={["70px", "70px", "100vh"]}
      top="0"
      align="center"
      justify={["center"]}
      borderRight={["none", "none", "1px solid #EFEDED"]}
      zIndex="sticky"
      ref={sidebarRef}
      display={["none", "none", "flex"]}
    >
      <Link to="/">
        <Center p={5} rotate={["right", "right", ""]}>
          {logo}
        </Center>
      </Link>
    </Flex>
  )
}

export default Sidebar
