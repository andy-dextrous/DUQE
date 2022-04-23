import React from "react"
import { Icon } from "@chakra-ui/react"
import { RiInstagramFill } from "react-icons/ri"

function InstagramIcon({ size = "md", ...props }) {
  return (
    <Icon
      as={RiInstagramFill}
      w={size === "sm" ? "20px" : size === "md" ? "25px" : "30px"}
      h={size === "sm" ? "20px" : size === "md" ? "25px" : "30px"}
      transition="all 0.2s ease"
      _hover={{ color: "#c32aa3" }}
      {...props}
    />
  )
}

export default InstagramIcon
