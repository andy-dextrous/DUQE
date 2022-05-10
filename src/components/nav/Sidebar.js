import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import { useRgba } from "../../hooks/useRgba"
import { useThemeOptions } from "../../hooks/useThemeOptions"

import { SocialFollows } from "../social/SocialFollows"
import Logo from "../../assets/logos/Logo"
import useContrastingColor from "../../hooks/useContrastingColor"
import { Box, Center, Flex, Grid, GridItem } from "@chakra-ui/react"
import SearchToggle from "../search/SearchToggle"

function Sidebar() {
  const sidebarRef = useRef()
  const ref = useRef()
  const { sidebarMenuWidth } = useThemeOptions()
  const [color, setColor] = useState("white")
  const borderColor = useRgba("#bbbbbb", 0.3)

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
          gridColumn={["3/4", "3/4", "1/2"]}
          display="flex"
          justifyContent={["flex-end", "flex-end", "center"]}
          alignItems={["center", "center", "flex-end"]}
          py={[2, 2, 8]}
          px={[2, 2, 0]}
        >
          <SearchToggle
            bg="transparent"
            color="white"
            border="none"
            transformOrigin="50% 50%"
            _hover={{ transform: "scale(1.2)" }}
            _focus={{ color: "dark.default" }}
            _active={{ color: "dark.default" }}
            rounded="full"
            display={["flex", "noneflex", "none"]}
          />
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
