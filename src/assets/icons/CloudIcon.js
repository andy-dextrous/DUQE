import { Box } from "@chakra-ui/react"
import React from "react"

const CloudIcon = React.forwardRef(
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
        viewBox="0 0 200 205"
        {...styles}
      >
        <path style={{ fill: "none" }} d="M0 0h199v205H0z" />
        <path
          d="m100.73 186.08-.73-.77-.73.77C88.87 197.13 74.29 204 58.14 204 26.61 204 1 177.79 1 145.41c0-16.58 6.71-31.54 17.49-42.2l.72-.71-.72-.71C7.71 91.13 1 76.17 1 59.59 1 27.21 26.61 1 58.14 1c16.15 0 30.74 6.87 41.13 17.92l.73.77.73-.77C111.12 7.87 125.71 1 141.86 1 173.4 1 199 27.21 199 59.59c0 16.58-6.71 31.54-17.49 42.2l-.72.71.72.71c10.78 10.66 17.49 25.62 17.49 42.2 0 32.38-25.6 58.59-57.14 58.59-16.15 0-30.74-6.87-41.13-17.92Z"
          vectorEffect="non-scaling-stroke"
          style={{ stroke: color, fill: outline ? "none" : color }}
          strokeWidth={strokeSize}
        />
      </Box>
    )
  }
)

export default CloudIcon
