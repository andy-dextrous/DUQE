import React from "react"
import { BsSearch } from "react-icons/bs"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"

export const SearchInput = React.forwardRef((props, ref) => {
  return (
    <InputGroup w="full">
      <InputLeftElement pointerEvents="none" children={<BsSearch />} />
      <Input
        bg="gray.50"
        _active={{ backgroundColor: "gray.50" }}
        placeholder="search here..."
        aria-label="Search here"
        size="lg"
        w="full"
        ref={ref}
        {...props}
      />
    </InputGroup>
  )
})
