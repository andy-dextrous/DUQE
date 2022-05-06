import React, { forwardRef } from "react"
import { useThemeOptions } from "../hooks/useThemeOptions"
import { useVariable } from "../hooks/useVariable"
import { Box, Flex } from "@chakra-ui/react"
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
    containerStyles = {},
    ...sectionStyles
  } = props

  const {
    containerPaddingY,
    sectionPaddingX,
    sidebarMenuWidth,
    mobileNavHeight,
  } = useVariable()

  return (
    <>
      <Flex
        as="section"
        width="100%"
        position="relative"
        pt={[
          isFirstSection ? `${mobileNavHeight}px` : 0,
          isFirstSection ? `${mobileNavHeight}px` : 0,
          0,
        ]}
        px={sectionPaddingX}
        justify="center"
        {...sectionStyles}
      >
        {withContainer ? (
          <Box
            layerStyle="fillSpace"
            w={["100%", "100%", `container.${containerSize}`]}
            maxW={`container.${containerSize}`}
            py={containerPaddingY}
            ml={[0, 0, sidebarMenuWidth]}
            {...containerStyles}
          >
            {children}
          </Box>
        ) : (
          <>{children}</>
        )}
        {(bgImage || overlay || bgVideo) && (
          <Box layerStyle="bgImage" ref={ref}>
            <Box layerStyle="fillSpace" position="relative">
              {overlay && (
                <Box
                  className="overlay"
                  layerStyle="overlay"
                  {...overlayStyle}
                />
              )}
              {bgImage && (
                <SmartImage img={bgImage} layerStyle="bgImage" alt={alt} />
              )}
              {bgVideo && <Video id="bgVideo" src={bgVideo} />}
            </Box>
          </Box>
        )}
      </Flex>
    </>
  )
})

export default SectionWrapper
