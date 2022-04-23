import React from "react"
import { BsTwitter } from "react-icons/bs"
import { Icon } from "@chakra-ui/react"

function TwitterIcon({ size = "md", ...props }) {
  return (
    <Icon
      as={BsTwitter}
      w={size === "sm" ? "20px" : size === "md" ? "25px" : "30px"}
      h={size === "sm" ? "20px" : size === "md" ? "25px" : "30px"}
      transition="all 0.2s ease"
      _hover={{ color: "#1DA1F2" }}
      {...props}
    />
  )
}

export default TwitterIcon
