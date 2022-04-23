import React, { useState, useEffect } from "react"
import Nav from "./nav/Nav"
import Footer from "./footer/Footer"
import { Box } from "@chakra-ui/react"
import SmoothWrapper from "./SmoothWrapper"

export const MenuContext = React.createContext()
export const CurrentSectionContext = React.createContext({})
export const CurrentCategoryContext = React.createContext({})

// Site Variables
export const sidebarWidth = 90
export const topBarHeight = 115

export function Layout(props) {
  const { path, children, smoothScroll = false } = props

  // App-level state
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(null)

  // Prevent scroll behaviour while menu is open
  useEffect(() => {
    const body = document.querySelector("body")
    isMenuOpen
      ? body.classList.add("stop-scroll")
      : body.classList.remove("stop-scroll")
  }, [isMenuOpen])

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <CurrentCategoryContext.Provider
        value={{ currentCategory, setCurrentCategory }}
      >
        <Nav path={path} />
        <SmoothWrapper smoothScroll={smoothScroll}>
          <Box
            as="main"
            id="tacticSpaces"
            className={smoothScroll ? "smooth" : ""}
          >
            {children}
            <Footer />
          </Box>
        </SmoothWrapper>
      </CurrentCategoryContext.Provider>
    </MenuContext.Provider>
  )
}
