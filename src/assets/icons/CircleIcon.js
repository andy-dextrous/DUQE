import { Box } from "@chakra-ui/react"
import React from "react"

const CircleIcon = React.forwardRef(
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
        viewBox="0 0 609 609"
        {...styles}
      >
        <path style={{ fill: "none" }} d="M0 0h609v609H0z" />
        <path
          vectorEffect="non-scaling-stroke"
          style={{ stroke: color, fill: outline ? "none" : color }}
          strokeWidth={strokeSize}
          d="M304.48 0C245.83 0 189 16.92 140.17 48.93c-22.73 14.83-43.38 32.76-61.44 53.28C30.55 157.08 4 227.49 4 300.52s27.3 145.49 76.85 200.67c17.94 20.02 38.54 37.51 61.22 52.12 31.08 20.11 65.26 34.1 101.62 41.51 19.62 4.13 40.09 6.17 60.78 6.17 15.14 0 30.19-1.11 44.75-3.33 70.46-10.48 135.14-46.04 182.16-100.11 47.46-54.61 73.61-124.58 73.61-197.03C604.96 134.83 470.17 0 304.48 0Zm0 478.29c-28.77 0-56.29-6.7-81.82-19.98a177.542 177.542 0 0 1-47.68-36.18c-31.12-33.16-48.26-76.32-48.26-121.6s16.74-87.46 47.06-120.36c13.85-15.1 30.01-27.53 48.08-36.98 25.31-13.36 53.85-20.42 82.58-20.42 98.03 0 177.76 79.78 177.76 177.81.05 97.98-79.69 177.72-177.72 177.72Z"
        />
      </Box>
    )
  }
)

export default CircleIcon
