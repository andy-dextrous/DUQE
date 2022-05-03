import { Box } from "@chakra-ui/react"
import React from "react"

const QIcon = React.forwardRef(
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
        viewBox="0 0 872.09 1173.01"
        {...styles}
      >
        <path style={{ fill: "none" }} d="M0 0h872.09v1173.01H0z" />
        <path
          vectorEffect="non-scaling-stroke"
          style={{ stroke: color, fill: outline ? "none" : color }}
          strokeWidth={strokeSize}
          d="m118.98 703 .6-.64-.56-.68C9.45 569.46-12.4 377.8 78.58 220.22 195.38 17.91 453.85-51.51 655.88 65.13c201.97 116.6 271.07 375.16 154.27 577.46-95.79 165.92-286.87 242.4-463.92 200.25l-3.64-.87 2.73 2.56 175.49 164.56-150.4 160.52L3.87 825.87 118.97 703Z"
        />
      </Box>
    )
  }
)

export default QIcon
