import React, { useCallback } from "react"
import { HiPlusSm } from "react-icons/hi"
import { graphql } from "gatsby"
import SectionWrapper from "../../components/layouts/SectionWrapper"
import {
  Box,
  Heading,
  VStack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  IconButton,
  Container,
} from "@chakra-ui/react"

export const query = graphql`
  fragment QA_QUERY on WpPage {
    ACF_Qanda {
      qA {
        q1 {
          question
          answer
        }
        q2 {
          question
          answer
        }
        q3 {
          question
          answer
        }
        q4 {
          question
          answer
        }
      }
    }
  }
`

function QandA({ theme, data }) {
  const titleColour = useCallback(() => {
    let colors
    switch (theme) {
      case "blue":
        colors = "brandYellow.500"
        break
      case "lightblue":
        colors = "brandBlue.900"
        break
      case "chestnut":
        colors = "brandBlue.900"
        break
      case "yellow":
        colors = "brandBlue.900"
        break
      default:
        colors = "brandBlue.900"
    }
    return colors
  }, [theme])

  const textColour = useCallback(() => {
    let colors
    switch (theme) {
      case "blue":
        colors = "brandYellow.100"
        break
      case "lightblue":
        colors = "white"
        break
      case "chestnut":
        colors = "white"
        break
      case "yellow":
        colors = "white"
        break
      default:
        colors = "brandBlue.900"
    }
    return colors
  }, [theme])

  const buttonColour = useCallback(() => {
    let colors
    switch (theme) {
      case "blue":
        colors = "brandYellow.500"
        break
      case "lightblue":
        colors = "brandBlue.900"
        break
      case "chestnut":
        colors = "brandBlue.900"
        break
      case "yellow":
        colors = "brandBlue.900"
        break
      default:
        colors = "brandYellow.500"
    }
    return colors
  }, [theme])

  const bgColour = useCallback(() => {
    let colors
    switch (theme) {
      case "blue":
        colors = "brandBlue.900"
        break
      case "lightblue":
        colors = "brandBlue.400"
        break
      case "chestnut":
        colors = "brandChestnut.400"
        break
      case "yellow":
        colors = "brandYellow.600"
        break
      default:
        colors = "brandBlue.900"
    }
    return colors
  }, [theme])

  const accordionTextColour = useCallback(() => {
    let colors
    switch (theme) {
      case "blue":
        colors = "white"
        break
      case "lightblue":
        colors = "brandBlue.900"
        break
      case "chestnut":
        colors = "brandBlue.900"
        break
      case "yellow":
        colors = "brandBlue.900"
        break
      default:
        colors = "brandBlue.900"
    }
    return colors
  }, [theme])

  const accordionColour = useCallback(() => {
    let colors
    switch (theme) {
      case "blue":
        colors = "brandBlue.800"
        break
      case "lightblue":
        colors = "brandBlue.300"
        break
      case "chestnut":
        colors = "brandChestnut.300"
        break
      case "yellow":
        colors = "brandYellow.300"
        break
      default:
        colors = "brandYellow.500"
    }
    return colors
  }, [theme])
  const borderColour = useCallback(() => {
    let colors
    switch (theme) {
      case "blue":
        colors = "brandYellow.300"
        break
      case "lightblue":
        colors = "brandBlue.300"
        break
      case "chestnut":
        colors = "brandChestnut.300"
        break
      case "yellow":
        colors = "brandYellow.200"
        break
      default:
        colors = "brandYellow.300"
    }
    return colors
  }, [theme])

  return (
    <SectionWrapper
      minH="unset"
      bg={bgColour}
      borderTopLeftRadius={["50", "50", "200"]}
    >
      <Container
        h="100%"
        maxW={["container.lg", "container.lg", "100%"]}
        py={[16, 16, 0]}
      >
        <VStack
          width={"full"}
          height={"full"}
          spacing={[12, 12, 24]}
          maxW="1000px"
          align="center"
          wrap="nowrap"
          m="auto"
        >
          <VStack>
            <Heading textAlign="center" color={titleColour}>
              Got Questions?
            </Heading>
            <Text color={textColour}>
              Here are a few of our most frequently asked questions
            </Text>
          </VStack>
          <Accordion allowToggle w="100%" mt={3}>
            {Object.values(data.qA).map((q, i) => {
              return (
                <AccordionItem borderColor={borderColour} key={`question-${i}`}>
                  <AccordionButton py={6} _focus={{ boxShadow: "none" }}>
                    <Box flex="1" textAlign="left">
                      <Text
                        color={accordionTextColour}
                        as="h4"
                        fontSize={["sm", "sm", "lg"]}
                      >
                        {q.question}
                      </Text>
                    </Box>
                    <IconButton
                      bg={buttonColour}
                      borderColor={buttonColour}
                      borderWidth="1px"
                      borderStyle="solid"
                      _hover={{
                        opacity: 0.9,
                      }}
                    >
                      <AccordionIcon
                        as={HiPlusSm}
                        fontSize="20px"
                        color={bgColour}
                      />
                    </IconButton>
                  </AccordionButton>
                  <AccordionPanel py={16} bg={accordionColour}>
                    <Text color={accordionTextColour}>{q.answer}</Text>
                  </AccordionPanel>
                </AccordionItem>
              )
            })}
          </Accordion>
        </VStack>
      </Container>
    </SectionWrapper>
  )
}

export default QandA
