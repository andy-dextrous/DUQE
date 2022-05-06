import React, { useState } from "react"
import Nav from "./nav/Nav"
import Footer from "./footer/Footer"
import SmoothWrapper from "./SmoothWrapper"
import useStopScroll from "../hooks/useStopScroll"
import { Box, Portal } from "@chakra-ui/react"

export const MenuContext = React.createContext()
export const DarkContext = React.createContext()

export function Layout({
  children,
  smoothScroll = true,
  withSignup,
  ...props
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(false)

  useStopScroll(isMenuOpen)

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <SmoothWrapper smoothScroll={smoothScroll}>
        <DarkContext.Provider value={{ isDarkBackground, setIsDarkBackground }}>
          <Portal>
            <Nav />
          </Portal>
          <Box as="main" {...props}>
            {children}
            <Footer withSignup={withSignup} />
          </Box>
        </DarkContext.Provider>
      </SmoothWrapper>
    </MenuContext.Provider>
  )
}
