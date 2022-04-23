import React from "react"
import { graphql } from "gatsby"
import SectionWrapper from "../../components/layouts/SectionWrapper"
import { Center, Heading, Box } from "@chakra-ui/react"

export const query = graphql`
  fragment HERO_SMALL_COLOR_QUERY on WpPage {
    title
  }
`

function HeroSmall({ title }) {
  return (
    <SectionWrapper
      fullW
      h="30vh"
      minH="unset"
      bg="brandGreen.600"
      borderBottomLeftRadius={["unset", "unset", "200"]}
      overflow="hidden"
    >
      <Center layerStyle="fillSpace">
        <Heading
          as="h1"
          color="brandBlue.900"
          fontSize={["3xl", "3xl", "5xl"]}
          textAlign="center"
        >
          {title}
        </Heading>
      </Center>
      <Box
        position="absolute"
        display={["block", "block", "none"]}
        bg="white"
        left={0}
        bottom={0}
        w="100vw"
        h="5vh"
        px="9%"
        py={3}
        roundedTop="25px"
        zIndex="20"
      />
    </SectionWrapper>
  )
}

export default HeroSmall
