import { Icon } from "@chakra-ui/react"
import React from "react"
import { BsYoutube } from "react-icons/bs"

function YoutubeIcon({ size, ...props }) {
  return (
    <Icon
      w={size === "sm" ? "20px" : size === "md" ? "25px" : "30px"}
      h={size === "sm" ? "20px" : size === "md" ? "25px" : "30px"}
      transition="all 0.2s ease"
      _hover={{ color: "#FF0000" }}
      as={BsYoutube}
      {...props}
    />
  )
}

export default YoutubeIcon
