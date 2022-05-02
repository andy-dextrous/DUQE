import { Box } from "@chakra-ui/react"
import React from "react"

const CrossIcon = React.forwardRef(
  (
    { width = 500, height = 500, color = "dark.default", outline, ...styles },
    ref
  ) => {
    return (
      <Box
        as="svg"
        width={width}
        height={height}
        fill={outline ? "none" : color}
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...styles}
      >
        <path
          d="m499.293 147.396-102.27 102.27-.353.354.353.353 102.27 102.231-146.689 146.689-102.27-102.231-.353-.353-.354.353-102.231 102.231L.707 352.604l102.231-102.231.353-.353-.353-.354L.707 147.396 147.396.707l102.231 102.27.354.353.353-.353L352.604.707l146.689 146.689Z"
          stroke={color}
        />
      </Box>
    )
  }
)

export default CrossIcon
