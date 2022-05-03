import { Heading, Stack, Text, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"

function Why() {
  return (
    <SectionWrapper
      bg="dark.default"
      containerSize="xl"
      containerStyles={{
        position: "relative",
        py: 0,
        pt: [20, 20, 32, 48, 60],
        pb: ["176px"],
      }}
    >
      <VStack spacing={12} mb={24} maxW="container.lg" mx="auto">
        <Heading className="jumbo" color="white">
          Why be a DUQE agent?
        </Heading>
        <Heading as="h3" className="thin-h3" color="white">
          Sign up to be a DUQE partner now and inspire other entrepreneurs to
          act on their dreams and business goals.
        </Heading>
      </VStack>
      <Stack
        direction={["column", "column", "row"]}
        height={["auto", "200vh", "352px"]}
        w="100%"
        maxW="container.xl"
        position={["relative", "relative", "absolute"]}
        left="0"
        spacing="0"
        rounded="30px"
        overflow="hidden"
      >
        <VStack
          bg="brandYellow.default"
          h="100%"
          flex="1"
          align="flex-start"
          p="70px"
        >
          <Heading as="h3" className="thin-h3">
            Competitive <strong>Commisions</strong>
          </Heading>
          <Text>
            Get the best commission rates with our DUQE Agent Programme.
          </Text>
        </VStack>
        <VStack
          bg="brandYellow.400"
          h="100%"
          flex="1"
          align="flex-start"
          p="70px"
        >
          <Heading as="h3" className="thin-h3">
            Quick <strong>Payouts</strong>
          </Heading>
          <Text>
            Receive your commission instantly every time you help an
            entrepreneur successfully set up with us.
          </Text>
        </VStack>
        <VStack
          bg="brandYellow.300"
          h="100%"
          flex="1"
          align="flex-start"
          p="70px"
        >
          <Heading as="h3" className="thin-h3">
            Networking <strong>Opportunities</strong>
          </Heading>
          <Text>
            Get a VIP ticket to every DUQE networking event. Expand your network
            and influence in Dubai’s start-up community.
          </Text>
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default Why
