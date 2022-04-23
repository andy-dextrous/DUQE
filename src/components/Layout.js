import React, { useState, useEffect } from "react"
import Nav from "./nav/Nav"
import Footer from "./footer/Footer"
import SmoothWrapper from "./SmoothWrapper"

export const MenuContext = React.createContext()

export function Layout({ children, smoothScroll = false }) {
  // App-level state
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // TODO turn this into a usePreventScroll hook
  // Prevent scroll behaviour while menu is open
  useEffect(() => {
    const body = document.querySelector("body")
    isMenuOpen
      ? body.classList.add("stop-scroll")
      : body.classList.remove("stop-scroll")
  }, [isMenuOpen])

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
