import React from "react"
import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Stack,
  Box,
  VStack,
  Text,
  Center,
} from "@chakra-ui/react"
import { Image } from "../../components/images/Image"
import SectionWrapper from "../../components/layouts/SectionWrapper"

function Tabs() {
  return (
    <SectionWrapper bg="brandBlue.900" h="unset" minH="unset">
      <Center mb={32}>
        <Heading color="brandGreen.600">Heading</Heading>
      </Center>
      <ChakraTabs isFitted variant="enclosed">
        <TabList border="unset" gap="20px">
          <Tab
            color="brandYellow.600"
            _selected={{ color: "white" }}
            borderBottom="4px solid"
          >
            One
          </Tab>
          <Tab
            color="brandYellow.600"
            _selected={{ color: "white" }}
            borderBottom="4px solid"
          >
            Two
          </Tab>
          <Tab
            color="brandYellow.600"
            _selected={{ color: "white" }}
            borderBottom="4px solid"
          >
            Three
          </Tab>
          <Tab
            color="brandYellow.600"
            _selected={{ color: "white" }}
            borderBottom="4px solid"
          >
            Four
          </Tab>
          <Tab
            color="brandYellow.600"
            _selected={{ color: "white" }}
            borderBottom="4px solid"
          >
            Five
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={32}>
            <Stack direction="row" spacing={20}>
              <VStack flex={1} align="start">
                <Heading color="brandGreen.600">Interior Design</Heading>
                <Text color="white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus consequatur possimus saepe debitis unde doloribus
                  porro laborum, facere qui perferendis assumenda error
                  temporibus odit, laboriosam dolorum reiciendis. Eaque possimus
                  nemo impedit ab earum?
                </Text>
              </VStack>
              <Box flex={1}>
                <Image
                  rounded="xl"
                  img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto:eco,w_800/v1641470257/-JSP6778-2-.1577424325.8309.jpg"
                />
              </Box>
            </Stack>
          </TabPanel>
          <TabPanel p={32}>
            <Stack direction="row" spacing={20}>
              <VStack flex={1} align="start">
                <Heading color="brandGreen.600">Interior Design</Heading>
                <Text color="white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus consequatur possimus saepe debitis unde doloribus
                  porro laborum, facere qui perferendis assumenda error
                  temporibus odit, laboriosam dolorum reiciendis. Eaque possimus
                  nemo impedit ab earum?
                </Text>
              </VStack>
              <Box flex={1}>
                <Image
                  rounded="xl"
                  img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto:eco,w_1080/v1641470316/workplace-at-the-office-2021-09-02-01-01-35-utc.jpg"
                />
              </Box>
            </Stack>
          </TabPanel>
          <TabPanel p={32}>
            <Stack direction="row" spacing={20}>
              <VStack flex={1} align="start">
                <Heading color="brandGreen.600">Interior Design</Heading>
                <Text color="white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus consequatur possimus saepe debitis unde doloribus
                  porro laborum, facere qui perferendis assumenda error
                  temporibus odit, laboriosam dolorum reiciendis. Eaque possimus
                  nemo impedit ab earum?
                </Text>
              </VStack>
              <Box flex={1}>
                <Image
                  rounded="xl"
                  img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto:eco,w_800/v1641470272/projects_10-6-brainly_cracov-16.jpg"
                />
              </Box>
            </Stack>
          </TabPanel>
          <TabPanel p={32}>
            <Stack direction="row" spacing={20}>
              <VStack flex={1} align="start">
                <Heading color="brandGreen.600">Interior Design</Heading>
                <Text color="white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus consequatur possimus saepe debitis unde doloribus
                  porro laborum, facere qui perferendis assumenda error
                  temporibus odit, laboriosam dolorum reiciendis. Eaque possimus
                  nemo impedit ab earum?
                </Text>
              </VStack>
              <Box flex={1}>
                <Image
                  rounded="xl"
                  img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,w_800/v1641470264/zotovcochicago008.jpg"
                />
              </Box>
            </Stack>
          </TabPanel>
          <TabPanel p={32}>
            <Stack direction="row" spacing={20}>
              <VStack flex={1} align="start">
                <Heading color="brandGreen.600">Interior Design</Heading>
                <Text color="white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus consequatur possimus saepe debitis unde doloribus
                  porro laborum, facere qui perferendis assumenda error
                  temporibus odit, laboriosam dolorum reiciendis. Eaque possimus
                  nemo impedit ab earum?
                </Text>
              </VStack>
              <Box flex={1}>
                <Image
                  rounded="xl"
                  img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto:eco,w_800/v1641470257/-JSP6778-2-.1577424325.8309.jpg"
                />
              </Box>
            </Stack>
          </TabPanel>
        </TabPanels>
      </ChakraTabs>
    </SectionWrapper>
  )
}

export default Tabs
