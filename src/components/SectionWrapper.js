import React, { forwardRef } from "react"
import { useThemeOptions } from "../hooks/useThemeOptions"
import { Center, Box } from "@chakra-ui/react"
import { Image } from "../components/images"
import Video from "./video/Video"

const SectionWrapper = forwardRef((props, ref) => {
  const {
    bgImage,
    alt,
    bgVideo,
    children,
    eager,
    isFirstSection,
    overlay,
    overlayColor = "black",
    withContainer = true,
    overlayOpacity,
    ...containerStyles
  } = props

  const { sidebarMenuMargin, topBarHeight } = useThemeOptions()

  return (
    <>
      <Center
        as="section"
        width={["100%", "100%", `calc(100vw - ${sidebarMenuMargin}px)`]}
        position="relative"
        ml={[0, 0, sidebarMenuMargin + "px"]}
        pt={isFirstSection ? `${topBarHeight}px` : 0}
        {...containerStyles}
      >
        {/* Main container for content. Sets dimensions */}
        {withContainer && children ? (
          <Box
            maxW="container.lg"
            h="full"
            py={[2, 4, 6, 8, 20]}
            px={[2, 4, 6, 8, 20]}
          >
            {children}
          </Box>
        ) : (
          children
        )}
        {(bgImage || overlay) && (
          <Box layerStyle="bgImage" ref={ref}>
            <Box layerStyle="fillSpace" position="relative">
              {overlay && (
                <Box
                  layerStyle="overlay"
                  bg={overlayColor}
                  opacity={overlayOpacity}
                />
              )}
              {bgImage && !bgVideo && (
                <Image img={bgImage} layerStyle="bgImage" alt={alt} />
              )}
              {bgVideo && !bgImage && <Video id="bgVideo" src={bgVideo} />}
            </Box>
          </Box>
        )}
      </Center>
    </>
  )
})

export default SectionWrapper
