import React, { useEffect, useState } from "react"
import Nav from "./nav/Nav"
import Footer from "./footer/Footer"
import SmoothWrapper from "./SmoothWrapper"
// import useStopScroll from "../hooks/useStopScroll"
import { useThemeOptions } from "../hooks/useThemeOptions"
import { Box, Portal } from "@chakra-ui/react"
import { showBreakpoints } from "../utils/showBreakpoints"
import "../assets/MyFontsWebfontsKit.css"
import Overlay from "../sections/page-specific/home/Overlay"
import saveFirstUrl from "../utils/getParams"

export const MenuContext = React.createContext()
export const DarkContext = React.createContext()

export function Layout({
  children,
  smoothScroll = true,
  withSignup,
  withTopBar = true,
  isHomePage = false,
  masterTimeline,
  animating,
  index,
  ...props
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(false)
  const { shouldShowBreakpoints } = useThemeOptions()

  useEffect(() => {
    showBreakpoints(shouldShowBreakpoints)
  }, [shouldShowBreakpoints])

  useEffect(() => {
    const cookieExpiresIn = 7 /* days */
    saveFirstUrl("campaignUrl", cookieExpiresIn)
  }, [])

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <SmoothWrapper smoothScroll={smoothScroll}>
        <DarkContext.Provider value={{ isDarkBackground, setIsDarkBackground }}>
          <Portal>
            <Overlay
              isHomePage={isHomePage}
              timeline={{ animating, masterTimeline, index }}
            />
            <Nav withTopBar={withTopBar} />
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
