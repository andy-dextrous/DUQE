import React, { useContext, useEffect, useRef, useState } from "react"
import { MenuContext } from "../Layout"
import useContrastingColor from "../../hooks/useContrastingColor"
import { ScrollTrigger } from "../../gsap"

import ToggleIcon from "../../assets/icons/MenuToggleIcon"
import { IoMdClose } from "react-icons/io"
import { Button, Flex, Icon } from "@chakra-ui/react"
import { useVariable } from "../../hooks"

function Hamburger() {
  const { setIsMenuOpen, isMenuOpen } = useContext(MenuContext)
  const container = useRef()
  const toggleMenu = useRef()
  const observer = useRef()
  const [color, setColor] = useState("white")
  const { sidebarMenuWidth, mobileNavHeight } = useVariable()

  useContrastingColor({ color, setColor }, container, { fill: color })

  useEffect(() => {
    observer.current = ScrollTrigger.observe({
      target: toggleMenu.current,
      type: "touch,pointer",
      onPress: () => {
        setIsMenuOpen(!isMenuOpen)
      },
    })
    return () => {
      observer.current.kill()
    }
  }, [isMenuOpen, setIsMenuOpen])

  return (
    <Flex
      zIndex="tooltip"
      position="fixed"
      w={["auto", "auto", sidebarMenuWidth]}
      py={[2, 2, 8]}
      px={[2, 2, 0]}
      h={[mobileNavHeight[0], mobileNavHeight[0], "auto"]}
      justify="center"
      align="center"
      ref={container}
    >
      <Button
        className={isMenuOpen ? "active" : ""}
        variant="menuToggle"
        aria-label="Toggle menu"
        ref={toggleMenu}
      >
        {!isMenuOpen ? (
          <ToggleIcon color={color} />
        ) : (
          <Icon as={IoMdClose} color="dark.default" />
        )}
      </Button>
    </Flex>
  )
}

export default Hamburger
