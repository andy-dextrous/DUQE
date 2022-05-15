import { Center, Heading, Image, Stack, Text } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"
import { useVariable } from "../../../hooks"

function Mission() {
  const { containerPaddingY } = useVariable()

  return (
    <SectionWrapper
      bg="dark.default"
      containerSize="lg"
      containerStyles={{ py: 0, pb: containerPaddingY }}
      zIndex="3"
    >
      <Stack
        layerStyle="fillSpace "
        align="center"
        direction={["column", "column", "row"]}
        zIndex="1"
        position="relative"
        spacing={[24]}
        mb={[20, 20]}
      >
        <Center position="relative" flex="1" layerStyle="fillSpace" h="300px">
          <Heading color="white" zIndex="1" textTransform="uppercase">
            Our
            <br /> <YellowHeading> mission</YellowHeading>
          </Heading>
          <Image
            opacity="0.4"
            layerStyle="fillSpaceAbsolute"
            objectFit="cover"
            height="100%"
            src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto:eco,w_600/v1651912110/DUQE/iStock/iStock-1280046969.jpg"
          />
        </Center>

        <Heading as="h3" className="thin-h3" color="white" flex="1">
          To make it easy to set up a business in Dubai and to provide
          everything it needs to thrive.
        </Heading>
      </Stack>
      <Stack
        layerStyle="fillSpace"
        align="center"
        zIndex="1"
        position="relative"
        spacing={[4, 4, 8, 12, 16, 20, 24]}
        direction={["column", "column", "row"]}
      >
        <Heading as="h3" className="thin-h3" color="white" flex="1">
          We aim to be the go-to zone for individuals who are passionate and
          driven about their business ideas and ambitions and who want to be the
          next unicorn.
        </Heading>
        <Center position="relative" flex="1" layerStyle="fillSpace" h="300px">
          <Heading color="white" zIndex="1" textTransform="uppercase">
            Our
            <br />{" "}
            <Text as="span" color="brandBlue.default">
              {" "}
              Vision
            </Text>
          </Heading>
          <Image
            opacity="0.4"
            layerStyle="fillSpaceAbsolute"
            objectFit="cover"
            height="100%"
            src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto:best,w_600/v1651912116/DUQE/iStock/iStock-826130820.jpg"
          />
        </Center>
      </Stack>
    </SectionWrapper>
  )
}

export default Mission
