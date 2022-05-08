//-----------------------------------------------//
// Place all global CSS for every page here //
//-----------------------------------------------//

import { base } from "./foundations/typography"

const globalCSS = {
  /********* UTILITY *********/
  main: { overflowX: "hidden", maxW: "100vw" },
  body: { overflowX: "hidden", maxW: "100vw" },
  "body.chakra-ui-light *:focus": { outline: "none", boxShadow: "none" },
  "#gatsby-focus-wrapper": {
    outline: "unset !important",
    transform: "unset !important",
  },
  ".stop-scroll": {
    overflow: "hidden",
  },
  ".hidden": {
    display: "none",
  },

  /********* SITE-SPECIFIC *********/
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
    rounded: "2xl",
  },
  ul: {
    my: 6,
  },

  ...base,
}

const globalStyle = {
  global: {
    ...globalCSS,
  },
}

export { globalStyle as styles }
