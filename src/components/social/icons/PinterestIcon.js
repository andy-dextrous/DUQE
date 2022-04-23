import React from "react"
import { FaPinterest } from "react-icons/fa"
import { Icon } from "@chakra-ui/react"

function PinterestIcon({ size = "md", ...props }) {
  return (
    <Icon
      as={FaPinterest}
      w={size === "sm" ? "20px" : size === "md" ? "25px" : "30px"}
      h={size === "sm" ? "20px" : size === "md" ? "25px" : "30px"}
      transition="all 0.2s ease"
      _hover={{ color: "#E60023" }}
      {...props}
    />
  )
}

export default PinterestIcon
