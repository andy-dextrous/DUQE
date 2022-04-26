import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import Logo from "../../assets/logos/Logo"
import { Box, Center, Flex, VStack } from "@chakra-ui/react"
import { useThemeOptions } from "../../hooks/useThemeOptions"
import { useRgba } from "../../hooks/useRgba"
import { SocialFollows } from "../social/SocialFollows"
import Hamburger from "./Hamburger"
import { gsap, ScrollTrigger } from "../../gsap"

function Sidebar() {
  const sidebarRef = useRef()
  const { sidebarMenuWidth } = useThemeOptions()
  const ref = React.useRef()

  const [color, setColor] = useState("white")

  useLayoutEffect(() => {
    const sections = document.querySelectorAll("main section")
    const scrollTriggers = []

    sections.forEach(section => {
      const dimensions = ref.current.getBoundingClientRect()
      const height = dimensions.top
      const isLight = section.classList.contains("light")

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: `top ${height},`,
        end: `top ${height + 5},`,
        onEnter: () => {
          setColor(isLight ? "black" : "white")
        },
        onEnterBack: self => {
          setColor(
            self.trigger.previousElementSibling.classList.contains("light")
              ? "black"
              : "white"
          )
        },
      })

      scrollTriggers.push(trigger)
    })

    return () => {
      scrollTriggers.forEach(trigger => trigger.kill())
    }
  }, [])

  useEffect(() => {
    gsap.to(ref.current, {
      fill: color,
      duration: 0.4,
      ease: "Power3.out",
    })
  }, [color])

  return (
    <Flex
      as="aside"
      w={["100vw", "100vw", `${sidebarMenuWidth}px`]}
      bg="transparent"
      position="fixed"
      left="0"
      h={["70px", "70px", "100vh"]}
      top="0"
      align="center"
      justify="center"
      borderRight={["none", "none", `1px solid ${useRgba("#bbbbbb", 0.3)}`]}
      zIndex="sticky"
      display={["none", "none", "flex"]}
      ref={sidebarRef}
    >
      <VStack justify="space-between" h="100%" w="100%" py={8}>
        <Hamburger color="white" />
        <Link to="/">
          <Center w="100%">
            <Logo color="white" />
          </Center>
        </Link>
        <Box ref={ref}>
          <SocialFollows
            direction="column"
            spacing={8}
            align="center"
            color={color}
            size="sm"
          />
        </Box>
      </VStack>
    </Flex>
  )
}

export default Sidebar
