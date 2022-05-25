import React from "react"

import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"
import CrossIcon from "../../../assets/icons/CrossIcon"
import {
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"

function Requirements() {
  return (
    <SectionWrapper containerSize="lg" className="light" mb={[0, 0, 60]}>
      <VStack
        spacing={[8, 8, 12]}
        alignItems="flex-start"
        maxWidth="container.lg"
        m="auto"
        mb={24}
      >
        <Heading className="jumbo">
          Trade Licence <YellowHeading>Requirements </YellowHeading>
        </Heading>
        <Heading as="h3" className="thin-h3">
          Ready to start your business? You will need to prepare the following
          documents to begin your trade licence application.
        </Heading>
      </VStack>
      <Stack spacing={[12, 12, 24]} direction={["column", "column", "row"]}>
        <VStack
          bg="brandYellow.default"
          spacing={[8, 8]}
          flex="1"
          p={[8, 8, 20]}
          align="flex-start"
          rounded="30px"
          data-speed="1.05"
        >
          <Image
            src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141452/DUQE/Vector-1.svg"
            h={["66px", "66px", "70px"]}
          />
          <Heading as="h3">Individual</Heading>
          <HStack spacing={4}>
            <Image
              src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg"
              h={["24px", "24px", "24px"]}
            />
            <Text>Clear Passport Copy</Text>
          </HStack>
          <HStack spacing={4}>
            <Image
              src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg"
              h={["24px", "24px", "24px"]}
            />
            <Text>Entry Stamp/cancellation paper/UID number</Text>
          </HStack>
          <HStack spacing={4}>
            <Image
              src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg"
              h={["24px", "24px", "24px"]}
            />
            <Text>Personal details</Text>
          </HStack>
          <HStack spacing={4}>
            <Image
              src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg"
              h={["24px", "24px", "24px"]}
            />
            <Text>
              No Objection Certificate (applicable for appointed managers with
              residence visa)
            </Text>
          </HStack>
        </VStack>
        <VStack
          bg="brandConcrete.default"
          spacing={[8, 8]}
          flex="1"
          p={[8, 8, 20]}
          align="flex-start"
          rounded="30px"
          data-speed="1.08"
        >
          <Image
            src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141452/DUQE/Vector.svg"
            h={["66px", "66px", "70px"]}
          />
          <Heading as="h3">Corporate Entity/Branch</Heading>
          <HStack spacing={4}>
            <Image
              src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg"
              h={["24px", "24px", "24px"]}
            />
            <Text>Licence</Text>
          </HStack>
          <HStack spacing={4}>
            <Image
              src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg"
              h={["24px", "24px", "24px"]}
            />
            <Text>Certificate of Incorporation</Text>
          </HStack>
          <HStack spacing={4}>
            <Image
              src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg"
              h={["24px", "24px", "24px"]}
            />
            <Text>Certificate of Incumbency or Good standing</Text>
          </HStack>
          <HStack spacing={4}>
            <Image
              src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg"
              h={["24px", "24px", "24px"]}
            />
            <Text>Memorandum of Association (MoA)</Text>
          </HStack>
          <HStack spacing={4}>
            <Image
              src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg"
              h={["24px", "24px", "24px"]}
            />
            <Text>Share registry/certificate</Text>
          </HStack>
          <HStack spacing={4}>
            <Image
              src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651141458/DUQE/tick.svg"
              h={["24px", "24px", "24px"]}
            />
            <Text>Board Resolution</Text>
          </HStack>
        </VStack>
      </Stack>
      <Container maxW="container.md" my={[20, 20, 40]} w="100%" px="0">
        <Text borderLeft={"10px solid #e0db2a"} pl={[8, 8, 12]} w="100%">
          *Foreign Entity documents must be notarised and attested from the UAE
          Consulate/Embassy of origin and Ministry of Foreign Affairs in UAE.
        </Text>
      </Container>
      <VStack
        spacing={[8, 8, 12]}
        alignItems="start"
        maxWidth="container.lg"
        m="auto"
        mb={[12, 12, 24]}
      >
        <Heading as="h3" className="jumbo">
          The trade licence <YellowHeading>Application Process </YellowHeading>
        </Heading>
        <Heading as="h3" className="thin-h3">
          We offer a quick 4-stage process for applying a trade licence for your
          business. If you’re wondering how long the process will take, you can
          refer to the steps below to know the milestones included in your trade
          licence application.
        </Heading>
      </VStack>
      <Stack
        direction={["column", "column", "row"]}
        spacing={[20, 20, 12]}
        pt={[0, 0, 20]}
        position="relative"
        w="full"
      >
        <Image
          src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651801919/DUQE/Horizontal_Arrows_Upper.png"
          position="absolute"
          height="auto"
          width="25%"
          zIndex="-1"
          top="0"
          left={["12%"]}
          display={["none", "none", "block"]}
        />
        <Image
          src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651801919/DUQE/Horizontal_Arrows_Lower.png"
          position="absolute"
          height="auto"
          width="25%"
          zIndex="-1"
          bottom="-25%"
          left={["33%"]}
          display={["none", "none", "block"]}
        />
        <Image
          src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651801919/DUQE/Horizontal_Arrows_Upper.png"
          position="absolute"
          height="auto"
          width="25%"
          zIndex="-1"
          top="0"
          left={["60%"]}
          display={["none", "none", "block"]}
        />
        <VStack
          bg="brandBlue.100"
          flex="1"
          p={12}
          sx={{ marginInlineStart: "0 !important" }}
          rounded="30px"
          position={["relative", "relative", "unset"]}
          zIndex="1"
        >
          <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/location.svg" />
          <Image
            src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651801942/DUQE/Arrows_Down.png"
            position="absolute"
            bottom="-5rem"
            height="5rem"
            left="0"
            width="100%"
            zindex="-2"
            display={["block", "block", "none"]}
          />
          <Heading as="h4" className="lower-case" textAlign="center">
            Trade Name Reservation
          </Heading>
        </VStack>
        <VStack
          bg="brandBlue.200"
          flex="1"
          p={12}
          rounded="30px"
          position={["relative", "relative", "unset"]}
          zIndex="1"
        >
          <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/location.svg" />
          <Image
            src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651801942/DUQE/Arrows_Down.png"
            position="absolute"
            bottom="-5rem"
            height="5rem"
            left="0"
            width="100%"
            zindex="-2"
            display={["block", "block", "none"]}
          />
          <Heading as="h4" className="lower-case" textAlign="center">
            Initial Approval
          </Heading>
        </VStack>
        <VStack
          bg="brandBlue.300"
          flex="1"
          p={12}
          rounded="30px"
          position={["relative", "relative", "unset"]}
          zIndex="1"
        >
          <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/location.svg" />
          <Image
            src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651801942/DUQE/Arrows_Down.png"
            position="absolute"
            bottom="-5rem"
            height="5rem"
            left="0"
            width="100%"
            zindex="-2"
            display={["block", "block", "none"]}
          />
          <Heading as="h4" className="lower-case" textAlign="center">
            Registration Document signing
          </Heading>
        </VStack>
        <VStack bg="brandBlue.400" flex="1" p={12} rounded="30px">
          <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/location.svg" />
          <Heading as="h4" className="lower-case" textAlign="center">
            Trade Licence Issuance
          </Heading>
        </VStack>
      </Stack>
      <CrossIcon
        color="#e0db2a"
        position="absolute"
        right="-20%"
        bottom="60vh"
        width="50vw"
        height="50vw"
        zIndex="-1"
        outline
        data-speed="0.7"
      />
    </SectionWrapper>
  )
}

export default Requirements
