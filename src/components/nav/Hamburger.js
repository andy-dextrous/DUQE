import React, { useContext, useState } from "react"
import { MenuContext } from "../Layout"
import useContrastingColor from "../../hooks/useContrastingColor"

import ToggleIcon from "../../assets/icons/MenuToggleIcon"
import { IoMdClose } from "react-icons/io"
import { Button, Flex, Icon } from "@chakra-ui/react"

function Hamburger() {
  const { setIsMenuOpen, isMenuOpen } = useContext(MenuContext)
  const ref = React.useRef()
  const [color, setColor] = useState("white")

  useContrastingColor({ color, setColor }, ref, { fill: color })

  return (
    <Flex
      zIndex="popover"
      h="100%"
      ref={ref}
      alignItems={["center", "center", "flex-start"]}
    >
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
