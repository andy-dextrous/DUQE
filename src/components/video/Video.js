import { Box } from "@chakra-ui/react"
import React from "react"

function Video({ src, ...props }) {
  return (
    <Box
      as="video"
      autoPlay
      muted
      loop
      position="absolute"
      left={0}
      top={0}
      width="100%"
      height="100%"
      objectFit="cover"
      {...props}
    >
      <source src={src} type="video/mp4" />
    </Box>
  )
}

export default Video
