import { Heading, Stack, Text } from "@chakra-ui/react"
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
        mb={[32, 32, 40]}
      >
        <Heading
          color="white"
          position="relative"
          flex="1"
          _after={{
            content:
              "url('https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651112830/DUQE/Union.svg')",
            position: "absolute",
            top: ["-50%", "-50%", "-15%"],
            left: "-30%",
            width: "100%",
            height: "100%",
            opacity: "50%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: "-1",
          }}
        >
          Our
          <br /> <YellowHeading> mission</YellowHeading>
        </Heading>
        <Heading as="h3" className="thin-h3" color="white" flex="2">
          To make it easy to set up a business in Dubai and to provide
          everything it needs to thrive.
        </Heading>
      </Stack>
      <Stack
        layerStyle="fillSpace"
        align="center"
        zIndex="1"
        position="relative"
        spacing={24}
        direction={["column", "column", "row"]}
      >
        <Heading
          color="white"
          position="relative"
          flex="1"
          _after={{
            content:
              "url('https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651113641/DUQE/chevron_blue.svg')",
            position: "absolute",
            top: ["-70%", "-70%", "-15%"],
            left: "-30%",
            width: "180px",
            height: "180px",

            opacity: "50%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: "-1",
          }}
        >
          Our
          <br />
          <Text as="span" color="brandBlue.default">
            {" "}
            vision
          </Text>
        </Heading>
        <Heading as="h3" className="thin-h3" color="white" flex="2">
          We aim to be the go-to zone for individuals who are passionate and
          driven about their business ideas and ambitions and who want to be the
          next unicorn.
        </Heading>
      </Stack>
    </SectionWrapper>
  )
}

export default Mission
