import React, { useContext, useRef, useState } from "react"
import { Link } from "gatsby"
import { MenuContext } from "../Layout"
import { useRgba } from "../../hooks/useRgba"
import { useThemeOptions } from "../../hooks/useThemeOptions"
// import { gsap, ScrollTrigger } from "../../gsap"

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
      borderRight={["none", "none", `1px solid ${borderColor}`]}
      borderBottom={[
        `1px solid ${borderColor}`,
        `1px solid ${borderColor}`,
        "none",
      ]}
      zIndex="sticky"
      ref={sidebarRef}
    >
      <Grid
        templateColumns={["repeat(3, 1fr)", "repeat(3, 1fr)", "1fr"]}
        templateRows={["1fr", "1fr", "repeat(3, 1fr)"]}
        flexDirection="column"
        layerStyle="fillSpace"
      >
        <GridItem
          gridRow={["1/2", "1/2", "2/3"]}
          gridColumn={["2/3", "2/3", "1/2"]}
          layerStyle="center"
          py={[2, 2, 8]}
          px={[2, 2, 0]}
        >
          <Center w="100%">
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
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default Sidebar
