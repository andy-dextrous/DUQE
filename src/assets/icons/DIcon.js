import { Box } from "@chakra-ui/react"
import React from "react"

const DIcon = React.forwardRef(
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
        viewBox="0 0 958.54 1039"
        {...styles}
      >
        <path style={{ fill: "none" }} d="M0 0h958.54v1039H0z" />
        <path
          vectorEffect="non-scaling-stroke"
          style={{ stroke: color, fill: outline ? "none" : color }}
          strokeWidth={strokeSize}
          d="M928.17 700.67c-85.28 220.69-333.3 330.4-553.95 245.05L0 800.97 308.83 1.8l374.22 144.74c220.66 85.35 330.4 333.44 245.13 554.12Z"
        />
      </Box>
    )
  }
)

export default DIcon
