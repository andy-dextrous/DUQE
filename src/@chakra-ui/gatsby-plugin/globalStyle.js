//-----------------------------------------------//
// Place all global CSS for every page here //
//-----------------------------------------------//

import { base } from "./foundations/typography"

const globalCSS = {
  main: { overflowX: "hidden", maxW: "100vw" },

  ".thin-h3.chakra-heading": {
    fontSize: "36px",
    fontWeight: "light",
    textTransform: "unset",
  },
  ".thin.chakra-heading": {
    fontWeight: "normal",
    textTransform: "unset",
  },

  ".thin-h3-caps.chakra-heading": {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "300",
    fontSize: "56px",
    lineHeight: "70px",
    letterSpacing: "-0.04em",
  },
  "#gatsby-focus-wrapper": {
    outline: "unset !important",
    transform: "unset !important",
  },
  ".stop-scroll": {
    overflow: "hidden",
  },
  ".subMenuLink": {
    fontSize: ["24px"],
    fontWeight: "bold",
    textTransform: "unset",
    lineHeight: "32px",
    _hover: {
      color: "white",
    },
  },
  ".chakra-heading.lower-case": { textTransform: "unset" },
  li: { listStyle: "none" },
  ...base,
}

const globalStyle = {
  global: {
    ...globalCSS,
  },
}

export { globalStyle as styles }
