import { useTheme, useToken } from "@chakra-ui/react"

export function useRgba(hex, opacity = 1) {
  const [value] = useToken("colors", [hex])

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value)
  return result
    ? `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
        result[3],
        16
      )},${opacity})`
    : null
}
