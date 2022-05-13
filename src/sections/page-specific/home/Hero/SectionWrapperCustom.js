import React, { forwardRef } from "react"
import { useVariable } from "../../../../hooks"
import { Box, Flex } from "@chakra-ui/react"
import { SmartImage } from "../../../../components/SmartImage"

const SectionWrapperCustom = forwardRef(({ alt, children }, ref) => {
  const { img1, img2, img3, overlay } = ref

  const {
    containerPaddingY,
    sectionPaddingX,
    sidebarMenuWidth,
    mobileNavHeight,
  } = useVariable()

  return (
    <Flex
      as="section"
      h="100vh"
      width="100%"
      zIndex="2"
      position="relative"
      pt={mobileNavHeight}
      px={sectionPaddingX}
      justify="center"
      _before={{
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "dark.default",
        zIndex: "-10",
      }}
    >
      <Box
        layerStyle="fillSpace"
        w={["100%", "100%", "container.xl"]}
        maxW={"container.xl"}
        py={containerPaddingY}
        ml={[0, 0, sidebarMenuWidth]}
      >
        {children}
      </Box>

      <Box layerStyle="bgImage">
        <Box className="overlay" layerStyle="overlay" ref={overlay} />
        <Box layerStyle="fillSpace" position="relative" overflow="hidden">
          <SmartImage
            img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto:best,w_1920/v1650925763/Home-Hero.jpg"
            layerStyle="bgImage"
            alt={alt}
            ref={img1}
          />
        </Box>
      </Box>
    </Flex>
  )
})

export default SectionWrapperCustom
