import DEFAULT_OPTIONS from "../../../defaultOptions"
import { extendTheme } from "@chakra-ui/react"
import { colors, breakpoints, fonts } from "./foundations"
import { textStyles } from "./textStyles"
import { layerStyles } from "./layerStyles"
import { styles } from "./globalStyle"
import components from "./components"

const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  textStyles: {
    ...textStyles,
  },
  layerStyles: {
    ...layerStyles,
  },
  styles,
  components,
  config: {
    cssVarPrefix: DEFAULT_OPTIONS.cssVarPrefix,
  },
})

export default theme
