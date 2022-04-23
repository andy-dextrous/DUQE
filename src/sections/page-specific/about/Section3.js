import {
  VStack,
  Box,
  Heading,
  Stack,
  IconButton,
  Text,
  Container,
} from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import { TiTick } from "react-icons/ti"

function Section3({ width }) {
  return (
    <SectionWrapper
      minH="unset"
      position="relative"
      bg="brandGreen.600"
      borderTopRightRadius={["50", "50", "200"]}
    >
      <Container h="100%" maxW={`container.${width}` || "container.lg"}>
        <Stack
          direction={["column-reverse", "column-reverse", "row"]}
          py={[20, 12, 40]}
          spacing={[4, 4, 8]}
        >
          <VStack align="start" flex="1" spacing={[4, 4, 8]}>
            <VStack align="start" spacing={4}>
              <IconButton
                icon={<TiTick />}
                color="brandBlue.900"
                bg={["transparent", "transparent", "brandGreen.500"]}
                fontSize="22px"
                pointerEvents="none"
              />
              <Heading
                as="h4"
                textStyle="h4"
                fontSize="16px"
                color="brandBlue.900"
              >
                Property Advisory
              </Heading>
              <Text>
                Strong relationships with landlords and asset managers gives us
                unique, first-hand access.
              </Text>
            </VStack>
            <VStack align="start" spacing={4}>
              <IconButton
                icon={<TiTick />}
                color="brandBlue.900"
                bg={["transparent", "transparent", "brandGreen.500"]}
                fontSize="22px"
                pointerEvents="none"
              />
              <Heading
                as="h4"
                textStyle="h4"
                fontSize="16px"
                color="brandBlue.900"
              >
                Workplace Strategists
              </Heading>
              <Text>
                Combining your business goals with quantitative data analysis
                delivers superior outcomes
              </Text>
            </VStack>
          </VStack>
          <VStack align="start" flex="1" spacing={[2, 2, 8]}>
            <VStack align="start" spacing={4}>
              <IconButton
                icon={<TiTick />}
                color="brandBlue.900"
                bg={["transparent", "transparent", "brandGreen.500"]}
                fontSize="22px"
                pointerEvents="none"
              />
              <Heading as="h4" textStyle="h4" fontSize="16px">
                Interior Design
              </Heading>
              <Text>
                Your fitout will benefit from the input of world-class interior
                designers from Day 1.
              </Text>
            </VStack>
            <VStack align="start" spacing={4}>
              <IconButton
                icon={<TiTick />}
                color="brandBlue.900"
                bg={["transparent", "transparent", "brandGreen.500"]}
                fontSize="22px"
                pointerEvents="none"
              />
              <Heading
                as="h4"
                textStyle="h4"
                fontSize="16px"
                color="brandBlue.900"
              >
                Construction
              </Heading>
              <Text>
                Our master builders will be fully in sync, ready to start on
                schedule and within budget.
              </Text>
            </VStack>
          </VStack>
          <Box flex="1.3" pb={[8, 8, "unset"]}>
            <Heading
              as="h4"
              textStyle="h4"
              fontSize="16px"
              fontWeight="semibold"
              color={["brandBlue.900", "brandBlue.900", "white"]}
              mb={8}
            >
              Our unique offering
            </Heading>
            <Heading
              color={["white", "white", "brandBlue.900"]}
              fontSize={{ base: "2xl", xl: "4xl", "2xl": "5xl" }}
              maxW={["unset", "unset", "70%"]}
            >
              Expertise, strategy and connections
            </Heading>
          </Box>
        </Stack>
      </Container>
    </SectionWrapper>
  )
}

export default Section3
