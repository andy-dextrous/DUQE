import React, { useContext, useEffect, useState } from "react"
import { MenuContext } from "../Layout"
import { SmoothContext } from "../SmoothWrapper"
import useContrastingColor from "../../hooks/useContrastingColor"

import ToggleIcon from "../../assets/icons/MenuToggleIcon"
import { IoMdClose } from "react-icons/io"
import { Button, Flex, Icon } from "@chakra-ui/react"

function Hamburger() {
  const { setIsMenuOpen, isMenuOpen } = useContext(MenuContext)
  const smootherInstance = useContext(SmoothContext)
  const ref = React.useRef()
  const [color, setColor] = useState("white")

  useContrastingColor({ color, setColor }, ref, { fill: color })
  useEffect(() => {
    if (!smootherInstance) return
    smootherInstance.paused(isMenuOpen ? true : false)
  }, [isMenuOpen, smootherInstance])

  return (
    <Flex zIndex="popover" h="176px" ref={ref}>
      <Button
        className={isMenuOpen ? "active" : ""}
        variant="menuToggle"
        aria-label="Toggle menu"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}
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
