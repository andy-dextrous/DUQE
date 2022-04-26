import {
  Button,
  Heading,
  Image,
  Square,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"

function LatestBlogs() {
  return (
    <SectionWrapper bg="black" containerSize="xl">
      <Stack direction="row" spacing={40}>
        <VStack spacing={12} align="start" flex="1">
          <Heading as="h1" color="white">
            Our Latest Blog and Articles
          </Heading>
          <Heading as="h3" className="thin-h3" color="white">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Heading>
          <Button>View All</Button>
        </VStack>
        <VStack
          flex="1"
          divider={<StackDivider borderColor="dark.800" />}
          spacing={12}
        >
          {" "}
          <VStack spacing={8} align="start" width="100%" position="relative">
            <Text
              color="white"
              fontWeight="bold"
              textTransform="uppercase"
              zIndex="1"
            >
              18 Apr,2022
            </Text>
            <Heading as="h4" color="white" textTransform="unset" zIndex="1">
              Can Brits do business in Dubai, UAE?
            </Heading>
            <Text color="white" zIndex="1">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
            <Image
              src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,h_300,q_auto/v1650858611/DUQE/DUQE_Hero.jpg"
              position="absolute"
              left="-5%"
              top="-25%"
              bottom="0"
              height="150%"
              py={2}
              zIndex="0"
              opacity="0.6"
              mt={0}
            />
          </VStack>
          <VStack spacing={8} align="start" width="100%" position="relative">
            <Text color="white" fontWeight="bold" textTransform="uppercase">
              18 Apr,2022
            </Text>
            <Heading as="h4" color="white" textTransform="unset">
              Can Brits do business in Dubai, UAE?
            </Heading>
            <Text color="white">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
          </VStack>
          <VStack spacing={8} align="start" width="100%" position="relative">
            <Text color="white" fontWeight="bold" textTransform="uppercase">
              18 Apr,2022
            </Text>
            <Heading as="h4" color="white" textTransform="unset">
              Can Brits do business in Dubai, UAE?
            </Heading>
            <Text color="white">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
          </VStack>
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default LatestBlogs
