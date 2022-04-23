import { Button, Center, Icon } from "@chakra-ui/react"
import React, { useContext } from "react"
import ToggleIcon from "../../assets/icons/MenuToggleIcon"
import { sidebarWidth, MenuContext } from "../Layout"
import { IoMdClose } from "react-icons/io"

function Hamburger() {
  const { setIsMenuOpen, isMenuOpen, isMenuButtonDisabled } =
    useContext(MenuContext)

  return (
    <Center
      h={["60px", "60px", "116px"]}
      w={["60px", "60px", sidebarWidth]}
      position="fixed"
      top="0"
      left="0"
      zIndex="popover"
    >
      <Button
        className={isMenuOpen ? "active" : ""}
        variant="menuToggle"
        aria-label="Toggle menu"
        onClick={() => {
          !isMenuButtonDisabled && setIsMenuOpen(!isMenuOpen)
        }}
      >
        {!isMenuOpen ? <ToggleIcon /> : <Icon as={IoMdClose} color="white" />}
      </Button>
    </Center>
  )
}

export default Hamburger
