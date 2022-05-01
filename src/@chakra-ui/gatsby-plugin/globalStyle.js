//-----------------------------------------------//
// Place all global CSS for every page here //
//-----------------------------------------------//

import { base } from "./foundations/typography"

const globalCSS = {
  // main: { overflowX: "hidden", maxW: "100vw" },
  // body: { overflowX: "hidden", maxW: "100vw" },

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
    color: "white",
    _hover: {
      color: "brandYellow.default",
    },
  },
  ".post img": {
    mt: 8,
  },

  ...base,
}

const globalStyle = {
  global: {
    ...globalCSS,
  },
}

export { globalStyle as styles }
