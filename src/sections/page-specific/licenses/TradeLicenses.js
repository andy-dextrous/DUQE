import { Heading, Stack, Text, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"

function TradeLicenses() {
  return (
    <SectionWrapper
      bg="dark.default"
      containerSize="xl"
      containerStyles={{ py: 0, pt: 60 }}
    >
      <Stack direction="row" spacing={24}>
        <VStack spacing={12} mb={24} flex="1">
          <Heading className="jumbo" color="white">
            Trade License in <YellowHeading>DUQE.</YellowHeading>
          </Heading>
          <Heading as="h3" className="thin-h3" color="white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            nisi dolor numquam?
          </Heading>
        </VStack>
        <Stack
          direction="column"
          spacing="0"
          roundedTop="30px"
          overflow="hidden"
          flex="1"
        >
          <VStack
            bg="brandYellow.default"
            w="100%"
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
            flex="1"
            w="100%"
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
            w="100%"
            flex="1"
            align="flex-start"
            p="70px"
          >
            <Heading as="h3" className="thin-h3">
              Networking <strong>Opportunities</strong>
            </Heading>
            <Text>
              Get a VIP ticket to every DUQE networking event. Expand your
              network and influence in Dubai’s start-up community.
            </Text>
          </VStack>
        </Stack>
      </Stack>
    </SectionWrapper>
  )
}

export default TradeLicenses
