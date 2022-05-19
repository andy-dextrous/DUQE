import React, { forwardRef } from "react"
import { useVariable } from "../../../../hooks/useVariable"
import { Box, Flex } from "@chakra-ui/react"

const SectionWrapperCustom = forwardRef((props, ref) => {
  const { children, containerSize = "lg" } = props
  const { sectionPaddingX, sidebarMenuWidth } = useVariable()

  return (
    <Flex
      as="section"
      width="100%"
      position="relative"
      bg="brandYellow.default"
      id="how-much-does-it-cost"
      className="light"
      zIndex="1"
      pb={0}
      pt={0}
      px={sectionPaddingX}
      justify="center"
      ref={ref}
    >
      <Box
        layerStyle="fillSpace"
        w={["100%", "100%", `container.${containerSize}`]}
        maxW={`container.${containerSize}`}
        ml={[0, 0, sidebarMenuWidth]}
        py={0}
        pt={[20, 20, 6, 8, 60]}
      >
        {children}
      </Box>
    </Flex>
  )
})

export default SectionWrapperCustom
