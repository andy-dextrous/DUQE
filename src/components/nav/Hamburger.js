import React, { useContext, useEffect, useRef, useState } from "react"
import { MenuContext } from "../Layout"
import useContrastingColor from "../../hooks/useContrastingColor"
import { ScrollTrigger } from "../../gsap"

import ToggleIcon from "../../assets/icons/MenuToggleIcon"
import { IoMdClose } from "react-icons/io"
import { Button, Flex, Icon } from "@chakra-ui/react"

function Hamburger() {
  const { setIsMenuOpen, isMenuOpen } = useContext(MenuContext)
  const container = useRef()
  const toggleMenu = useRef()
  const observer = useRef()
  const [color, setColor] = useState("white")

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
      zIndex="popover"
      h="100%"
      ref={container}
      alignItems={["center", "center", "flex-start"]}
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
