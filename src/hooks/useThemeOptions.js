import { useContext } from "react"
import { themeOptions } from "../context/globalContext"

export const useThemeOptions = () => useContext(themeOptions)
