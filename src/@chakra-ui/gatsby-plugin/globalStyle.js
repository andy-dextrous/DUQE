//-----------------------------------------------//
// Place all global CSS for every page here //
//-----------------------------------------------//

import { base } from "./foundations/typography"

const globalCSS = {
  ...base,
}

const globalStyle = {
  global: {
    main: { overflowX: "hidden", maxW: "100vw" },

    ...globalCSS,
  },
}

export { globalStyle as styles }
