import { Box } from "@chakra-ui/react"
import React from "react"

const ArrowDown = React.forwardRef(
  (
    {
      width = 18,
      height = 25,
      color = "white",
      outline = false,
      strokeSize = 1,
      ...styles
    },
    ref
  ) => {
    return (
      <Box
        as="svg"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        viewBox="0 0 609 609"
        {...styles}
      >
        <path
          d="M8.943.333c.736 0 1.333.597 1.333 1.334v18.53l5.333-4.78a1.333 1.333 0 1 1 1.886 1.885l-7.61 7.057c-.52.521-1.364.521-1.885 0l-6.943-7.057a1.333 1.333 0 1 1 1.886-1.885l4.666 4.78V1.668C7.61.93 8.206.333 8.943.333Z"
          vectorEffect="non-scaling-stroke"
          style={{ stroke: color, fill: outline ? "none" : color }}
          strokeWidth={strokeSize}
        />
      </Box>
    )
  }
)

export default ArrowDown
