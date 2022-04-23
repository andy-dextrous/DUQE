import React, { useRef } from "react"
import "swiper/css"
import SectionWrapper from "../../components/layouts/SectionWrapper"
import GetForm from "../../components/forms/getForm/GetForm"
import AdvisoryPageElements from "../../components/forms/AdvisoryPageElements"
import {
  Grid,
  GridItem,
  Heading,
  VStack,
  Text,
  Center,
  Image,
  Box,
} from "@chakra-ui/react"

function HeroColorCTA({
  data: { heroSlider },
  theme = "blue",
  image,
  CTAText = "Speak to an expert",
  menuNumber,
  pageName,
}) {
  const indexRef = useRef()
  const titleRef = useRef()
  const excerptRef = useRef()
  const data = Object.values(heroSlider)

  return (
    <SectionWrapper
      fullW
      isFirstSection
      h={["auto", "auto", "auto", "auto", "80vh"]}
      minH={["unset", "unset", "900px"]}
      borderBottomLeftRadius={["unset", "unset", "unset", "unset", "200"]}
      sx={{
        ".white": { color: "white !important" },
        ".overlay": { display: ["block", "block", "none"] },
      }}
      overflow="hidden"
    >
      <Grid
        templateColumns="repeat(10, 1fr)"
        templateRows="115px repeat(9, 1fr)"
        h="100%"
        w="100%"
        overflow="hidden"
      >
        {/* Image */}
        <GridItem
          colStart={1}
          colEnd={11}
          rowStart={1}
          rowEnd={[6, 6, 6, 11]}
          zIndex="-2"
        >
          <Box
            layerStyle="overlay"
            zIndex="1"
            bg={[
              "black",
              "black",
              "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
            ]}
            opacity={["0.2", "0.2", "0.4"]}
          />

          <Image src={image} w="100%" h="100%" objectFit="cover" />
        </GridItem>

        {/* Title */}
        <GridItem
          display={["flex"]}
          colStart={1}
          colEnd={[11, 11, 11, 5]}
          rowStart={[1, 1, 1, 2]}
          rowEnd={[5, 5, 5, 9]}
          py={4}
          px={8}
        >
          {data && (
            <VStack
              spacing={3}
              align={["center", "center", "start"]}
              justify="center"
              position="relative"
              w={["unset", "unset", "50%"]}
              m="auto"
            >
              <Heading
                fontSize={["3xl", "4xl", "4xl", "4xl", "4xl", "6xl"]}
                ref={titleRef}
                textAlign={["center", "center", "left"]}
                color="white"
                as="h1"
              >
                {data[0].title}
              </Heading>
              <Heading
                textStyle="fadeTextLeft"
                as="h3"
                fontSize={["25vw", "25vw", "12vw"]}
                ref={indexRef}
                opacity={
                  theme === "blue" ? 0.2 : theme === "yellow" ? 0.2 : 0.2
                }
                top={["-15vw", "-15vw", "-8vw"]}
              >
                {menuNumber}
              </Heading>
              <Text
                ref={excerptRef}
                color="white"
                textAlign={["center", "center", "left"]}
              >
                {data[0].excerpt}
              </Text>
            </VStack>
          )}
        </GridItem>

        {/* CTA */}
        <GridItem
          colStart={[1, 1, 1, 7]}
          colEnd={[11]}
          rowStart={[5, 5, 5, 2]}
          rowEnd={[11, 11, 11]}
          py={[8]}
          px={8}
          pb={[12, 12, 0]}
          borderTopLeftRadius={["50", "50", "120px"]}
          borderTopRightRadius={["50", "50", "0"]}
          bg={
            theme === "blue"
              ? ["brandBlue.900", "brandBlue.900", "rgba(17,31,45,.97)"]
              : "brandGreen.600"
          }
        >
          <Center
            position="relative"
            w="full"
            h="full"
            py={[12, 12, 32]}
            pb={16}
            px={[0, 0, 8, 8, 8, 20, 40]}
          >
            <VStack align="start" w="full" h="full" spacing={8}>
              <Heading
                as="h4"
                fontSize={["2xl"]}
                color={theme === "blue" ? "brandGreen.500" : "brandBlue.900"}
              >
                {CTAText}
              </Heading>
              <GetForm
                formElements={<AdvisoryPageElements theme={theme} />}
                pageName={pageName}
              />
            </VStack>
          </Center>
        </GridItem>
        <Box
          position="absolute"
          display={["block", "block", "none"]}
          bg="white"
          left={0}
          bottom={"-2px"}
          w="100vw"
          h="5vh"
          px="9%"
          py={3}
          roundedTop={"25px"}
          zIndex="20"
        ></Box>
      </Grid>
    </SectionWrapper>
  )
}

export default HeroColorCTA
