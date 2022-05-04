import { useContext } from "react"
import { themeVariables } from "../context/globalContext"

export const useVariable = () => useContext(themeVariables)
