import { extendTheme } from "@chakra-ui/react"
import { colours } from "./foundations/colours"
import textStyles from "./text-styles/textStyles"
import fonts from "./foundations/fonts"
import { styles } from "./global-style/globalStyle"
import { layerStyles } from "./layer-styles/layerStyles"
import { Button } from "./components/button"
import { breakpoints } from "./foundations/breakpoints"
import DEFAULT_OPTIONS from "../../../defaultOptions"

const theme = {
  colours,
  fonts,
  styles,
  textStyles,
  layerStyles,
  config: {
    cssVarPrefix: DEFAULT_OPTIONS.cssVarPrefix,
  },
  components: {
    Button,
  },
  breakpoints,
}

export default extendTheme(theme)
