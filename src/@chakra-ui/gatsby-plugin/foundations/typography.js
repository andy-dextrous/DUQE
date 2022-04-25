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
  heading: `"Helvetica Neue", ${theme.fonts.heading}`,
  body: `"Helvetica Neue", ${theme.fonts.body}`,
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
  textTransform: "uppercase",
}

export const h1 = {
  ...heading,
  fontSize: ["4xl", "5xl", "9xl"],
  lineHeight: "120px",
  letterSpacing: "-0.01em",
  fontWeight: "extrabold",
}
export const h2 = {
  ...heading,
  fontSize: ["3xl", "4xl", "5xl"],
  mb: 4,
}

export const h3 = {
  ...heading,
  fontSize: ["2xl", "3xl", "4xl"],
  mb: 4,
}

export const h4 = {
  ...heading,
  fontSize: ["xl", "2xl", "3xl"],
  mb: 4,
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
  // "h3.chakra-heading": h3,
  "h4.chakra-heading": h4,
  "h5.chakra-heading": h5,
  "h6.chakra-heading": h6,
  "p.chakra-text": p,
  "a.chakra-link": a,
}
