import { theme } from "@chakra-ui/react"

const rem = px => px / 16 + "rem"
export const fontSizes = {
  xs: rem(13),
  sm: rem(14),
  md: rem(16),
  lg: rem(18),
  xl: rem(20),
  "2xl": rem(24),
  "3xl": rem(30),
  "4xl": rem(40),
  "5xl": rem(45),
  "6xl": rem(60),
  "7xl": rem(78),
  "8xl": rem(96),
  "9xl": rem(110),
}

export const fonts = {
  heading: `"HelveticaNowDisplay-Bd", ${theme.fonts.heading}`,
  body: `"HelveticaNowText-Regular", ${theme.fonts.body}`,
}

export const p = {
  fontFamily: fonts.body,
  fontSize: "18px",
  color: "dark.700",
  letterSpacing: "-0.003em",
  lineHeight: 1.6,
}
export const a = {
  color: "brandBlue.default",
  fontWeight: 700,
  textDecoration: "none",
  _hover: {
    textDecoration: "none",
  },
}
const heading = {
  fontFamily: fonts.heading,
  fontWeight: "700",
  fontStyle: "normal",
}

export const h1 = {
  ...heading,
  fontSize: ["4xl", "4xl", "7xl", "7xl", "8xl", "9xl", "9xl"],
  lineHeight: ["1.2", "1.1", "1.1", "1", "1", "1", "1"],
  letterSpacing: "-0.01em",
  fontWeight: "extrabold",
  textTransform: "uppercase",
}
export const h2 = {
  ...heading,
  fontSize: ["3xl", "4xl", "5xl"],
  lineHeight: "1.1",
  fontWeight: "extrabold",
  letterSpacing: "-1px",
}

export const h3 = {
  ...heading,
  letterSpacing: "-1px",
  fontSize: ["2xl", "3xl", "3xl"],
}

export const h4 = {
  ...heading,
  fontSize: ["xl", "2xl", "2xl"],
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
  my: 12,
  bg: "brandYellow.100",
  p: 6,
  borderLeft: "10px solid",
  borderLeftColor: "brandYellow.default",
}

export const globalTextStyles = {
  ".thin-h3.chakra-heading": {
    fontSize: ["24px", "24px", "28px"],
    fontWeight: "light",
    textTransform: "unset",
    lineHeight: "1.3",
    fontFamily: "HelveticaNowText-Regular",
    letterSpacing: "-0.02em",
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
    fontSize: ["3xl", "3xl", "56px"],
    lineHeight: ["shortest"],
    letterSpacing: "-0.04em",
  },
  ".wsywyg h2, .wsywyg h3,.wsywyg h4, .wsywyg h5,.wsywyg h6": {
    mt: "3rem",
    mb: "1rem",
  },
  ".post ul li": { listStylePosition: "inside", listStyleType: "disc" },
  ".post h1.chakra-heading": {
    ...heading,
    fontSize: ["2xl", "4xl", "6xl", "6xl", "6xl", "7xl", "7xl"],
    lineHeight: "1",
    letterSpacing: "-0.01em",
    fontWeight: "extrabold",
    textTransform: "uppercase",
  },
  ".chakra-text.primaryMenuLink": {
    fontSize: ["xl", "xl", "2xl"],
    fontWeight: "extrabold",
    textTransform: "unset",
    transition: "color 0.1s ease-out",
    lineHeight: 1.4,
    color: "white",
    fontFamily: "HelveticaNowDisplay-Bd",
    _hover: {
      color: "brandYellow.default",
      transform: "translateX(5px)",
    },
  },
  ".chakra-text.footerLink": {
    transition: "0.1s ease-in-out",
    listStyle: "none",
    _hover: {
      color: "brandYellow.default",
    },
  },
  ".chakra-text.subMenuLink": {
    fontSize: ["lg", "lg", "xl"],
    fontWeight: "normal",
    color: "whiteAlpha.800",
    _hover: {
      color: "brandYellow.default",
    },
  },
  ".custom-font-size-1.chakra-text": {
    fontSize: ["20px", "20px", "36px"],
    color: "brandYellow.default",
    fontWeight: "300",
    letterSpacing: "-0.02em",
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
  "a.chakra-link": a,
  "h1,h2,h3,h4,h5,h6,p": { color: "dark.default" },
  li: p,
  ...globalTextStyles,
}
