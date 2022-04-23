import {
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import SectionWrapper from "../../../components/layouts/SectionWrapper"

function About() {
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  return (
    <SectionWrapper minH="unset" pt="0" pb={[24, 24, 32]}>
      <Grid
        templateColumns="repeat(10, 1fr)"
        templateRows="repeat(10, 1fr)"
        h={["140vh", "100vh", "70vh"]}
        px={4}
      >
        <GridItem
          colStart="1"
          colEnd={["10", "10", "5"]}
          bg="brandGreen.600"
          rowStart="1"
          rowEnd={["7", "7", "9"]}
          zIndex={2}
          borderTopLeftRadius={["50", "50", "100"]}
          borderBottomRightRadius={["50", "50", "0"]}
        >
          <VStack
            spacing={3}
            px={[8, 8, 16]}
            py={12}
            align="start"
            justify="center"
            position="relative"
            w="100%"
            h="100%"
          >
            <Heading
              fontSize={["3xl", "3xl", "4xl", "4xl", "4xl", "4xl"]}
              color="white"
              className="animate"
            >
              Time is Money
            </Heading>

            <Text>
              Managing an office migration or fitout on your own is demanding.
              Ordinarily requiring multiple services, the timing, communication
              and planning usually falls to you.
            </Text>
            <Text>
              Tactic Spaces bypasses this model, combining industry-leading
              professionals into one managed process. Meet the team to take you
              from kick off to sign off.
            </Text>
            <HStack w="full" justifyContent="flex-end">
              <Link to="/about-us">
                <Button
                  className="animate"
                  variant="dark"
                  size={buttonSize}
                  mt={6}
                >
                  About us
                </Button>
              </Link>
            </HStack>
          </VStack>
        </GridItem>
        <GridItem
          colStart={["2", "2", "4"]}
          colEnd="11"
          bg="brandBlue.900"
          rowStart={["5", "5", "2"]}
          rowEnd="11"
          borderTopRightRadius={["100", "100", "200"]}
          overflow="hidden"
        >
          <Image
            src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto:good/v1650145133/Tactic-Spaces.jpg"
            w="full"
            h="full"
            objectFit="cover"
          />
        </GridItem>
      </Grid>
    </SectionWrapper>
  )
}

export default About
