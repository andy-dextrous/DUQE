import React from "react"

import defaultOptions from "../../defaultOptions"
import THEME_CONFIG from "../../themeConfig"

// eslint-disable-next-line import/prefer-default-export
export const themeOptions = React.createContext(defaultOptions)
export const themeVariables = React.createContext(THEME_CONFIG)
