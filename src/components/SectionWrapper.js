import React, { forwardRef, useEffect, useRef } from "react"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import { sidebarWidth, topBarHeight } from "./Layout"
import { Container, Center, Image, Box } from "@chakra-ui/react"

const SectionWrapper = forwardRef((props, ref) => {
  const {
    bgImage,
    bgVideo,
    children,
    eager,
    fullImage,
    fullW = false,
    isFirstSection,
    noPadding,
    overlay,
    overlayColour = "black",
    overlayOpacity,
    ...containerStyles
  } = props

  // Prevents re-sourcing of Gatsby Image data and flash of content
  const imageDataRef = useRef(null)

  /* TODO 
    - use universal image component
    - incorporate theme variables for section dimensions
  */

  useEffect(() => {
    if (imageDataRef.current || !bgImage) return

    function getImages() {
      if (!bgImage || !bgImage.desktop) return
      let images
      if (bgImage.mobile) {
        images = withArtDirection(getImage(bgImage.desktop), [
          {
            media: "(max-width:768px)",
            image: bgImage.mobile ? bgImage.mobile : bgImage.desktop,
          },
        ])
      } else {
        images = getImage(bgImage.desktop)
      }
      return images
    }

    imageDataRef.current = getImages()
  }, [bgImage])

  return (
    <>
      <Center
        as="section"
        width={[
          "100vw",
          "100vw",
          fullImage ? "100%" : `calc(100vw - ${sidebarWidth}px)`,
        ]}
        position="relative"
        ml={[0, 0, sidebarWidth + "px"]}
        pb={fullW ? 0 : [10, 10, 24]}
        pt={fullW ? 0 : isFirstSection ? `${topBarHeight}px` : [10, 10, 24]}
        overflowX="hidden"
        {...containerStyles}
      >
        {/* Main container for content. Sets dimensions */}
        <Container
          maxW={fullW ? "100%" : "1480px"}
          h="100%"
          w={fullW ? "100%" : ["95%", "95%", "82%"]}
          p="0"
          pl={[0, 0, fullImage ? sidebarWidth + "px" : 0]}
        >
          {children}
        </Container>

        {/* Background image module, using either Gatsby Image or Chakra image if a string is passed. */}
        {(bgImage || overlay) && (
          <Box layerStyle="bgImage" ref={ref}>
            <Box layerStyle="fillSpace" position="relative">
              {overlay && (
                <Box
                  layerStyle="overlay"
                  zIndex="1"
                  bg={overlayColour}
                  opacity={overlayOpacity}
                />
              )}

              {bgImage && !useGatsbyImage && !bgVideo && (
                <Image
                  src={bgImage}
                  layerStyle="bgImage"
                  alt="background image"
                />
              )}

              {useGatsbyImage && bgImage && !bgVideo && (
                <GatsbyImage
                  className="hero-image-w-overlay"
                  imgStyle={{ width: "100%", height: "100%" }}
                  loading={eager ? "eager" : "lazy"}
                  alt="background image"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -20,
                  }}
                  image={
                    imageDataRef.current
                      ? imageDataRef.current
                      : bgImage.desktop
                      ? getImage(bgImage.desktop)
                      : getImage(bgImage)
                  }
                />
              )}
              {bgVideo && !bgImage && (
                <Box
                  as="video"
                  autoPlay
                  muted
                  loop
                  id="bgVideo"
                  position="absolute"
                  left={0}
                  top={0}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                >
                  <source src={bgVideo} type="video/mp4" />
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Center>
    </>
  )
})

export default SectionWrapper
