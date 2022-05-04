import DEFAULT_OPTIONS from "../../../defaultOptions"
import { extendTheme } from "@chakra-ui/react"
import {
  colors,
  breakpoints,
  fonts,
  fontSizes,
  sizes,
  spacing,
  borderRadius,
} from "./foundations"
import { textStyles } from "./textStyles"
import { layerStyles } from "./layerStyles"
import { styles } from "./globalStyle"
import components from "./components"

const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  breakpoints,
  sizes,
  spacing,
  borderRadius,
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
