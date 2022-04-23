import { extendTheme } from "@chakra-ui/react"
import { colors } from "./tacticBranding"
import textStyles from "./text-styles/textStyles"
import fonts from "./foundations/fonts"
import { styles } from "./global-style/globalStyle"
import { layerStyles } from "./layer-styles/layerStyles"
import { Button } from "./components/button"
import { Badge } from "./components/badgeStyle"
import { Center } from "./components/center"
import { IconButton } from "./components/iconButton"
import { AccordionButton } from "./components/accordionButtonStyle"
import DEFAULT_OPTIONS from "../../../defaultOptions"
import { breakpoints } from "./foundations/breakpoints"

const theme = {
  colors,
  fonts,
  styles,
  textStyles,
  layerStyles,
  config: {
    cssVarPrefix: DEFAULT_OPTIONS.cssVarPrefix,
  },
  components: {
    Button,
    Badge,
    AccordionButton,
    Center,
    IconButton,
  },
  breakpoints,
}

export default extendTheme(theme)
