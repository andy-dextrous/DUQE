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
  const {
    path,
    startDark,
    darkButton,
    children,
    usingFullPage,
    overflowX,
    currentSection,
    setCurrentSection,
    smoothScroll = false,
    mainColor = null,
    preFooterColor = "white",
  } = props

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
      <CurrentSectionContext.Provider
        value={{ setCurrentSection, currentSection }}
      >
        <CurrentCategoryContext.Provider
          value={{ currentCategory, setCurrentCategory }}
        >
          {!usingFullPage && (
            <Nav path={path} startDark={startDark} darkButton={darkButton} />
          )}
          <SmoothWrapper smoothScroll={smoothScroll}>
            <Box
              as="main"
              id="tacticSpaces"
              bg={mainColor}
              className={smoothScroll ? "smooth" : ""}
              overflowX={overflowX ? "unset" : "hidden"}
              zIndex={0}
            >
              {children}
              {!usingFullPage && <Footer preFooterColor={preFooterColor} />}
            </Box>
          </SmoothWrapper>
        </CurrentCategoryContext.Provider>
      </CurrentSectionContext.Provider>
    </MenuContext.Provider>
  )
}
