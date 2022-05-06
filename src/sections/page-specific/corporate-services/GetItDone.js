import { Box, Heading, Image, Stack, VStack } from "@chakra-ui/react"
import React from "react"
import YellowHeading from "../../../components/common/YellowHeading"
import SectionWrapper from "../../../components/SectionWrapper"
import { useVariable } from "../../../hooks"

function GetItDone() {
  const { containerPaddingX } = useVariable()

  return (
    <SectionWrapper
      bg="dark.default"
      containerSize="xl"
      minH="100vh"
      containerStyles={{ pt: 0, pb: containerPaddingX }}
    >
      <Stack
        h="full"
        w="full"
        align="center"
        direction={["column", "column", "row"]}
        zIndex="1"
        spacing={6}
      >
        <VStack spacing={12} flex="1">
          <Heading className="jumbo" color="white">
            Get it all done
            <YellowHeading> here</YellowHeading>
          </Heading>
          <Heading as="h3" className="thin-h3" color="white" flex="1">
            Unlike other free zones in Dubai, we provide a broad range of
            support services that meet your needs beyond the business setup
            stage – from opening your corporate banking account, to registering
            for VAT and managing your accounting. Our team of world-class
            consultants are on site and will get it all done.
          </Heading>
        </VStack>
        <Box flex="1" py={[40, 40, 0]}>
          <Image
            src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651118246/DUQE/Corp_D.png"
            position="absolute"
            maxW={["100%", "100%", "45vw"]}
            right="0"
            bottom={["-9%", "-9%", "-20%"]}
            // data-speed={[1, 1, "1.1"]}
          />
        </Box>
      </Stack>
    </SectionWrapper>
  )
}

export default GetItDone
