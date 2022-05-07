import { createBreakpoints } from "@chakra-ui/theme-tools"

export const breakpoints = createBreakpoints({
  base: 0,
  // mobile portrait
  sm: "391px",
  // tablet portrait
  md: "768px",
  // tablet landscape
  lg: "960px",
  // 13-inch screen
  xl: "1440px",
  // 16-inch laptop
  "2xl": "1660px",
  // iMac or WideScreen
  "3xl": "1800px",
})
