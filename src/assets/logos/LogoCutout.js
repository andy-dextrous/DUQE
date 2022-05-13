import { Box } from "@chakra-ui/react"
import React from "react"

const LogoCutout = React.forwardRef(
  (
    {
      width = 933,
      height = 332,
      color = "dark.default",
      outline = true,
      strokeSize = 1,
      ...styles
    },
    ref
  ) => {
    return (
      <Box
        as="svg"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2400 1080"
        position="absolute"
        {...styles}
      >
        <defs>
          <clipPath id="logo-mask">
            <path
              ref={ref}
              d="M0 0v1080h2400V0H0Zm1528.22 436.35h-115.95v16.15h115.93v88.56h-115.93v16.15h115.93v84.41h-280.28V556.4c-18.44 41.75-54.51 73.93-98.79 87.13l87.24 20.36-18.69 80.06-182.22-42.53 14.27-61.07c-42.97-15.92-77.09-50.1-92.9-93.12-21.01 55.19-74.39 94.41-136.95 94.41-66.88 0-123.23-44.82-140.79-106.05-17.64 61.13-73.95 105.86-140.76 105.86H391.78v-293.1h146.55c60.72 0 112.77 36.94 134.99 89.56v-89.37h140.85v104.09h18.19V348.54h134.06v69.25c26.67-48.71 78.39-81.75 137.84-81.75 64.16 0 119.31 38.51 143.67 93.67v-81.26h280.29v87.9Z"
              style={{ fill: "#d32222" }}
            />
          </clipPath>
        </defs>
      </Box>
    )
  }
)

export default LogoCutout
