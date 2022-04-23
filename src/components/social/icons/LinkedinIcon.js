import React from "react"
import { FaLinkedin } from "react-icons/fa"
import { Icon } from "@chakra-ui/react"

function LinkedinIcon({ size = "md", ...props }) {
  return (
    <Icon
      as={FaLinkedin}
      w={size === "sm" ? "20px" : size === "md" ? "25px" : "30px"}
      h={size === "sm" ? "20px" : size === "md" ? "25px" : "30px"}
      transition="all 0.2s ease"
      _hover={{ color: "#4267B2" }}
      {...props}
    />
  )
}

export default LinkedinIcon
