import { Box } from "@chakra-ui/react"
import React from "react"

const HLogo = React.forwardRef(
  (
    {
      width = 933,
      height = 332,
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
        viewBox="0 0 933 332"
        {...styles}
      >
        <path style={{ fill: "none" }} d="M0 0h933v332H0z" />
        <path
          vectorEffect="non-scaling-stroke"
          style={{ stroke: color, fill: outline ? "none" : color }}
          strokeWidth={strokeSize}
          d="M925.5 82.27v-71H699.09v65.64C679.41 32.35 634.86 1.24 583.03 1.24c-48.02 0-89.8 26.69-111.34 66.04V11.34h-108.3v84.08H348.7V11.34H234.92v72.19c-17.95-42.5-59.99-72.34-109.04-72.34H7.5v236.76h118.38c53.97 0 99.45-36.13 113.7-85.51 14.19 49.46 59.71 85.66 113.73 85.66 50.54 0 93.66-31.68 110.63-76.26 12.77 34.75 40.33 62.36 75.04 75.22l-11.52 49.33 147.19 34.36 15.1-64.67-70.47-16.45c35.77-10.66 64.9-36.66 79.8-70.38v68.84h226.41V179.9h-93.65v-13.04h93.65V95.32h-93.65V82.27h93.65Z"
        />
      </Box>
    )
  }
)

export default HLogo
