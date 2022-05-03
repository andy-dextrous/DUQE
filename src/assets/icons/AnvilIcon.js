import { Box } from "@chakra-ui/react"
import React from "react"

const AnvilIcon = React.forwardRef(
  (
    {
      width = 500,
      height = 500,
      color = "dark.default",
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
        viewBox="0 0 208 150"
        {...styles}
      >
        <path style={{ fill: "none" }} d="M0 0h208v150H0z" />
        <path
          d="M151.81 74.41V0H0v75.57h56.2V150H208V74.41h-56.19Z"
          vectorEffect="non-scaling-stroke"
          style={{ stroke: color, fill: outline ? "none" : color }}
          strokeWidth={strokeSize}
        />
      </Box>
    )
  }
)

export default AnvilIcon
