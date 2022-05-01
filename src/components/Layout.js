import React, { useState } from "react"
import Nav from "./nav/Nav"
import Footer from "./footer/Footer"
import SmoothWrapper from "./SmoothWrapper"
import useStopScroll from "../hooks/useStopScroll"
import { Portal } from "@chakra-ui/react"

export const MenuContext = React.createContext()

export function Layout({ children, smoothScroll = true, ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useStopScroll(isMenuOpen)

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <SmoothWrapper smoothScroll={smoothScroll}>
        <Portal>
          <Nav />
        </Portal>
        <main {...props}>
          {children}
          <Footer />
        </main>
      </SmoothWrapper>
    </MenuContext.Provider>
  )
}
