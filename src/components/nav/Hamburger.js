import { Button, Center, Icon } from "@chakra-ui/react"
import React, { useContext } from "react"
import { MenuContext } from "../Layout"
import ToggleIcon from "../../assets/icons/MenuToggleIcon"
import { IoMdClose } from "react-icons/io"
import { useThemeOptions } from "../../hooks/useThemeOptions"

function Hamburger() {
  const { setIsMenuOpen, isMenuOpen, isMenuButtonDisabled } =
    useContext(MenuContext)
  const { sidebarMenuMargin } = useThemeOptions()

  return (
    <Center
      h={["60px", "60px", "116px"]}
      w={["60px", "60px", sidebarMenuMargin]}
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
