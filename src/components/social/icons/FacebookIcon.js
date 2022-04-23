import React from "react"
import { BsFacebook } from "react-icons/bs"
import { Icon } from "@chakra-ui/react"

function FacebookIcon({ size = "md", ...props }) {
  return (
    <Icon
      as={BsFacebook}
      w={size === "sm" ? "20px" : size === "md" ? "25px" : "30px"}
      h={size === "sm" ? "20px" : size === "md" ? "25px" : "30px"}
      transition="all 0.2s ease"
      _hover={{ color: "#0077B5" }}
      {...props}
    />
  )
}

export default FacebookIcon
