import { theme } from "@chakra-ui/react"

const rem = px => px / 16 + "rem"
export const fontSizes = {
  xs: rem(13),
  sm: rem(14),
  md: rem(16),
  lg: rem(18),
  xl: rem(20),
  "2xl": rem(24),
  "3xl": rem(28),
  "4xl": rem(36),
  "5xl": rem(48),
  "6xl": rem(64),
  "7xl": rem(72),
  "8xl": rem(96),
  "9xl": rem(110),
}

export const fonts = {
  heading: `"Helvetica Neue ", ${theme.fonts.heading}`,
  body: `"Helvetica Neue ", ${theme.fonts.body}`,
}

export const p = {
  fontFamily: fonts.body,
}
export const a = {
  color: "inherit",
  textDecoration: "none",
  _hover: {
    textDecoration: "none",
  },
}
const heading = {
  fontFamily: fonts.heading,
  fontWeight: "800",
  fontStyle: "normal",
}

export const h1 = {
  ...heading,
  fontSize: ["4xl", "5xl", "9xl"],
  lineHeight: "1",
  letterSpacing: "-0.01em",
  fontWeight: "extrabold",
  textTransform: "uppercase",
}
export const h2 = {
  ...heading,
  fontSize: ["3xl", "4xl", "45px"],
  lineHeight: "1.1",
  fontWeight: "extrabold",
  letterSpacing: "-2px",
}

export const h3 = {
  ...heading,
  fontSize: ["2xl", "3xl", "30px"],
}

export const h4 = {
  ...heading,
  fontSize: ["xl", "2xl", "24px"],
  lineHeight: "133%",
}

export const h5 = {
  ...heading,
  fontSize: ["lg", "xl", "2xl"],
  mb: 4,
}
export const h6 = {
  ...heading,
  fontSize: ["md", "lg", "xl"],
  mb: 4,
}
export const blockquote = {
  fontStyle: "italic",
  mx: 4,
  mb: 6,
}

export const globalTextStyles = {
  ".thin-h3.chakra-heading": {
    fontSize: "36px",
    fontWeight: "light",
    textTransform: "unset",
  },
  ".thin.chakra-heading": {
    fontWeight: "normal",
    textTransform: "unset",
  },
  ".chakra-heading.lower-case": { textTransform: "unset" },
  ".thin-h3-caps.chakra-heading": {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "300",
    fontSize: "56px",
    lineHeight: "70px",
    letterSpacing: "-0.04em",
  },
  li: { listStyle: "none" },
  ".wsywyg h2, .wsywyg h3,.wsywyg h4, .wsywyg h5,.wsywyg h6": {
    mt: "3rem",
    mb: "1rem",
  },
}

export const base = {
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  "h1.chakra-heading": h1,
  "h2.chakra-heading": h2,
  "h3.chakra-heading": h3,
  "h4.chakra-heading": h4,
  "h5.chakra-heading": h5,
  "h6.chakra-heading": h6,
  "*.jumbo.chakra-heading": h1,
  "*.upper-case.chakra-heading": { textTransform: "uppercase" },
  "p.chakra-text": p,
  "a.chakra-link": a,
  "h1,h2,h3,h4,h5,h6,p": { color: "dark.default" },
  ...globalTextStyles,
}
