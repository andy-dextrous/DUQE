import {
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"

function Requirements() {
  return (
    <SectionWrapper containerSize="xl" className="light" mb={60}>
      <VStack
        spacing={12}
        alignItems="start"
        maxWidth="container.lg"
        m="auto"
        mb={24}
      >
        <Heading className="jumbo">
          Trade License <YellowHeading>Requirements </YellowHeading>
        </Heading>
        <Heading as="h3" className="thin-h3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, hic
          quia. Quae.
        </Heading>
      </VStack>
      <Stack spacing={24} direction="row">
        <VStack
          bg="brandYellow.default"
          spacing={12}
          flex="1"
          p={20}
          align="flex-start"
          rounded="30px"
        >
          <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141452/DUQE/Vector-1.svg" />
          <Heading as="h3">Individual</Heading>
          <HStack spacing={4}>
            <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg" />
            <Heading as="h3" className="thin-h3">
              Clear Passport Copy
            </Heading>
          </HStack>
          <HStack spacing={4}>
            <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg" />
            <Heading as="h3" className="thin-h3">
              Clear Passport Copy
            </Heading>
          </HStack>
          <HStack spacing={4}>
            <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg" />
            <Heading as="h3" className="thin-h3">
              Clear Passport Copy
            </Heading>
          </HStack>
          <HStack spacing={4}>
            <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg" />
            <Heading as="h3" className="thin-h3">
              Clear Passport Copy
            </Heading>
          </HStack>
        </VStack>
        <VStack
          bg="brandConcrete.default"
          spacing={12}
          flex="1"
          p={20}
          rounded="30px"
          align="flex-start"
        >
          <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141452/DUQE/Vector-1.svg" />
          <Heading as="h3">Individual</Heading>
          <HStack spacing={4}>
            <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg" />
            <Heading as="h3" className="thin-h3">
              Clear Passport Copy
            </Heading>
          </HStack>
          <HStack spacing={4}>
            <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg" />
            <Heading as="h3" className="thin-h3">
              Clear Passport Copy
            </Heading>
          </HStack>
          <HStack spacing={4}>
            <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg" />
            <Heading as="h3" className="thin-h3">
              Clear Passport Copy
            </Heading>
          </HStack>
          <HStack spacing={4}>
            <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg" />
            <Heading as="h3" className="thin-h3">
              Clear Passport Copy
            </Heading>
          </HStack>
        </VStack>
      </Stack>
      <Container maxW="container.md" my={40}>
        <Text borderLeft={"10px solid #e0db2a"} pl={12}>
          * Foreign Entity documents must be notarized and attested from the UAE
          Consulate/Embassy of origin and Ministry of Foreign Affairs in UAE
        </Text>
      </Container>
      <VStack
        spacing={12}
        alignItems="start"
        maxWidth="container.lg"
        m="auto"
        mb={24}
      >
        <Heading className="jumbo">
          The trade license <YellowHeading>Application Process </YellowHeading>
        </Heading>
        <Heading as="h3" className="thin-h3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, hic
          quia. Quae.
        </Heading>
      </VStack>
      <Stack direction="row" spacing={12} position="relative" w="full">
        <VStack bg="brandBlue.100" flex="1" p={12} rounded="30px">
          <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/location.svg" />
          <Heading as="h4" className="lower-case" textAlign="center">
            Trade name reservation
          </Heading>
        </VStack>
        <VStack bg="brandBlue.200" flex="1" p={12} rounded="30px">
          <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/location.svg" />
          <Heading as="h4" className="lower-case" textAlign="center">
            Trade name reservation
          </Heading>
        </VStack>
        <VStack bg="brandBlue.300" flex="1" p={12} rounded="30px">
          <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/location.svg" />
          <Heading as="h4" className="lower-case" textAlign="center">
            Trade name reservation
          </Heading>
        </VStack>
        <VStack bg="brandBlue.400" flex="1" p={12} rounded="30px">
          <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/location.svg" />
          <Heading as="h4" className="lower-case" textAlign="center">
            Trade name reservation
          </Heading>
        </VStack>
        <Image
          src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651142527/DUQE/Arrows.svg"
          position="absolute"
          zIndex="-2"
          w="80%"
          left="7%"
          top="-30%"
        />
      </Stack>
    </SectionWrapper>
  )
}

export default Requirements
