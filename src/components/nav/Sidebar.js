import React, { useContext, useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import { MenuContext } from "../Layout"
import { useRgba } from "../../hooks/useRgba"
import { useThemeOptions } from "../../hooks/useThemeOptions"
import { gsap, ScrollTrigger } from "../../gsap"

import { SocialFollows } from "../social/SocialFollows"
import Hamburger from "./Hamburger"
import Logo from "../../assets/logos/Logo"
import useContrastingColor from "../../hooks/useContrastingColor"
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react"

function Sidebar() {
  const sidebarRef = useRef()
  const ref = React.useRef()
  const { sidebarMenuWidth } = useThemeOptions()
  const { isMenuOpen } = useContext(MenuContext)
  const [color, setColor] = useState("white")
  const borderColor = useRgba("#bbbbbb", 0.3)
  const showLogoMobile = useBreakpointValue([true, true, false])

  useContrastingColor({ color, setColor }, ref, { fill: color }, ".chakra-icon")

  // useEffect(() => {
  //   if (showNavScrollUp.current) return
  //   const tl = gsap.timeline({
  //     paused: true,
  //     duration: 0.2,
  //   })
  //   tl.from(sidebarRef.current, {
  //     yPercent: -100,
  //   })

  //   ScrollTrigger.matchMedia({
  //     "(max-width: 768px)": function () {
  //       ScrollTrigger.create({
  //         trigger: document.querySelector("main"),
  //         start: "top 0",
  //         end: "bottom 99%",
  //         onUpdate: self => {
  //           console.log(self.direction)
  //           self.direction === -1 ? tl.play() : tl.reverse()
  //         },
  //       })
  //     },
  //   })

  //   return () => {
  //     tl.kill()
  //   }
  // }, [])

  return (
    <Flex
      as="aside"
      w={["100vw", "100vw", `${sidebarMenuWidth}px`]}
      bg={["dark.default", "dark.default", "transparent"]}
      position="fixed"
      left="0"
      top="0"
      right="0"
      h={["70px", "70px", "100vh"]}
      align="center"
      justify="center"
      borderRight={[
        "none",
        "none",
        `1px solid ${isMenuOpen ? "transparent" : borderColor}`,
      ]}
      borderBottom={[
        `1px solid ${isMenuOpen ? "transparent" : borderColor}`,
        `1px solid ${isMenuOpen ? "transparent" : borderColor}`,
        "none",
      ]}
      zIndex="popover"
      ref={sidebarRef}
    >
      <Grid
        templateColumns={["repeat(3, 1fr)", "repeat(3, 1fr)", "1fr"]}
        templateRows={["1fr", "1fr", "repeat(3, 1fr)"]}
        flexDirection="column"
        layerStyle="fillSpace"
      >
        <GridItem
          gridRow={["1 / 2"]}
          gridColumn={["1 / 2"]}
          display="flex"
          justifyContent={["flex-start", "flex-start", "center"]}
          alignItems={["center", "center", "flex-start"]}
          py={[2, 2, 8]}
          px={[2, 2, 0]}
        >
          <Hamburger color="white" />
        </GridItem>
        <GridItem
          gridRow={["1/2", "1/2", "2/3"]}
          gridColumn={["2/3", "2/3", "1/2"]}
          layerStyle="center"
          py={[2, 2, 8]}
          px={[2, 2, 0]}
        >
          <Center
            w="100%"
            className={showLogoMobile && !isMenuOpen ? "" : "hidden"}
          >
            <Link to="/">
              <Logo color="white" height={["40px", "40px", "60px"]} />
            </Link>
          </Center>
        </GridItem>
        <GridItem
          gridRow={["1/2", "1/2", "3/4"]}
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          py={[2, 2, 8]}
          px={[2, 2, 0]}
        >
          {!isMenuOpen && (
            <Box ref={ref} display={["none", "none", "block"]}>
              <SocialFollows
                direction="column"
                spacing={8}
                align="center"
                color={color}
                size="sm"
                h="176px"
              />
            </Box>
          )}
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default Sidebar
