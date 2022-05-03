import { Box } from "@chakra-ui/react"
import React from "react"

const StarIcon = React.forwardRef(
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
        viewBox="0 0 853.34 862"
        {...styles}
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeWidth={strokeSize}
          d="M326.57 12.17h204.02v246.14l218.03-123.07 102.01 172.75-218.02 123.07 218.03 123.07-102.01 172.75L530.6 603.81v246.14H326.58V603.81L108.55 726.88 6.53 554.12l218.03-123.07L6.54 307.98l102.01-172.74 218.02 123.07V12.17Z"
          style={{ stroke: color, fill: outline ? "none" : color }}
        />

        <path style={{ fill: "none" }} d="M0 0h852.96v862H0z" />
      </Box>
    )
  }
)

export default StarIcon
