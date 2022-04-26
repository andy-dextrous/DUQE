import React, { forwardRef } from "react"
import { useThemeOptions } from "../hooks/useThemeOptions"
import { Center, Box } from "@chakra-ui/react"
import { SmartImage } from "../components/SmartImage"
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
    overlayStyle,
    withContainer = true,
    containerSize = "xl",
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
        px={["200px"]}
        {...containerStyles}
      >
        {withContainer ? (
          <Box
            maxW={`container.${containerSize}`}
            w={`container.${containerSize}`}
            h="full"
            py={[2, 4, 6, 8, 20]}
          >
            {children}
          </Box>
        ) : (
          { children }
        )}
        {(bgImage || overlay || bgVideo) && (
          <Box layerStyle="bgImage" ref={ref}>
            <Box layerStyle="fillSpace" position="relative">
              {overlay && <Box layerStyle="overlay" {...overlayStyle} />}
              {bgImage && (
                <SmartImage img={bgImage} layerStyle="bgImage" alt={alt} />
              )}
              {bgVideo && <Video id="bgVideo" src={bgVideo} />}
            </Box>
          </Box>
        )}
      </Center>
    </>
  )
})

export default SectionWrapper
