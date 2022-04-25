import { Button, Center, Icon } from "@chakra-ui/react"
import React, { useContext } from "react"
import { MenuContext } from "../Layout"
import ToggleIcon from "../../assets/icons/MenuToggleIcon"
import { IoMdClose } from "react-icons/io"

function Hamburger({ color }) {
  const { setIsMenuOpen, isMenuOpen, isMenuButtonDisabled } =
    useContext(MenuContext)

  return (
    <Center zIndex="popover">
      <Button
        className={isMenuOpen ? "active" : ""}
        variant="menuToggle"
        aria-label="Toggle menu"
        onClick={() => {
          !isMenuButtonDisabled && setIsMenuOpen(!isMenuOpen)
        }}
      >
        {!isMenuOpen ? (
          <ToggleIcon color={color} />
        ) : (
          <Icon as={IoMdClose} color={color} />
        )}
      </Button>
    </Center>
  )
}

export default Hamburger
