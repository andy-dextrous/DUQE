import React from "react"
import { Icon, IconButton, useDisclosure } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"

import SearchModal from "./SearchModal"

function SearchToggle({
  color,
  button = true,
  variant = "outline",
  iconProps,
  ...props
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {button ? (
        <IconButton
          variant={variant}
          onClick={onOpen}
          icon={<BsSearch color={color} {...iconProps} />}
          {...props}
        />
      ) : (
        <Icon
          as={BsSearch}
          color={color}
          onClick={onOpen}
          {...props}
          cursor="pointer"
        />
      )}
      <SearchModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  )
}

export default SearchToggle
