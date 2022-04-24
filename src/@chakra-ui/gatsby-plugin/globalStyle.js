//-----------------------------------------------//
// Place all global CSS for every page here //
//-----------------------------------------------//

import { base } from "./foundations/typography"

const globalCSS = {
  main: { overflowX: "hidden", maxW: "100vw" },
  ...base,
}

const globalStyle = {
  global: {
    ...globalCSS,
  },
}

export { globalStyle as styles }
