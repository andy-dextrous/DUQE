import React, { useLayoutEffect, useState } from "react"
import Nav from "./nav/Nav"
import Footer from "./footer/Footer"
import SmoothWrapper from "./SmoothWrapper"
import useStopScroll from "../hooks/useStopScroll"
import { ScrollTrigger } from "../gsap"

export const MenuContext = React.createContext()

export function Layout({ children, smoothScroll = true }) {
  // App-level state
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useLayoutEffect(() => {
    ScrollTrigger.refresh()
  }, [])
  useStopScroll(isMenuOpen)

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <Nav />
      <SmoothWrapper smoothScroll={smoothScroll}>
        <main className={smoothScroll ? "smooth" : ""}>
          {children}
          <Footer />
        </main>
      </SmoothWrapper>
    </MenuContext.Provider>
  )
}
