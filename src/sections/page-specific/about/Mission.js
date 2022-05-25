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
        spacing={[12, 12, 12, 12, 16, 20, 24]}
        mb={[20, 20]}
      >
        <Center
          position="relative"
          w="full"
          h={["40vh", "40vh", "300px"]}
          flex="1"
        >
          <Heading color="white" zIndex="1" textTransform="uppercase">
            Why we
            <br /> <YellowHeading> exist</YellowHeading>
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
        spacing={[12, 12, 12, 12, 16, 20, 24]}
        direction={["column-reverse", "column-reverse", "row"]}
      >
        <Heading as="h3" className="thin-h3" color="white" flex="1">
          To be the free zone for the game changers and disruptors who shape our
          world.
        </Heading>
        <Center
          position="relative"
          w="full"
          h={["40vh", "40vh", "300px"]}
          flex="1"
        >
          <Heading color="white" zIndex="1" textTransform="uppercase">
            Our
            <br />{" "}
            <Text as="span" color="brandBlue.default">
              {" "}
              Ambition
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
