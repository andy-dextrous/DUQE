import { Heading, Stack, Text, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"

function TradeLicences() {
  return (
    <SectionWrapper
      bg="dark.default"
      containerSize="xl"
      containerStyles={{ py: 0, pt: 60 }}
    >
      <Stack direction={["column", "column", "row"]} spacing={24}>
        <VStack spacing={[8, 8, 12]} mb={24} flex="1">
          <Heading className="jumbo" color="white">
            Trade Licence in <YellowHeading>DUQE</YellowHeading>
          </Heading>
          <Heading as="h3" className="thin-h3" color="white">
            We are excited to be a part of your success story. As such, we offer
            these types of trade licences in Dubai to help you launch and
            operate your business activities.
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
              Commercial <strong>Licence</strong>
            </Heading>
            <Text>
              Planning to sell physical goods in Dubai? A commercial licence
              allows you to engage in business activities that involve selling
              or trading products.
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
              Professional <strong>Licence</strong>
            </Heading>
            <Text>
              Are you an online business coach, artisan or craftsman? Then a
              professional licence is what you need to freely and legally offer
              your professional services to clients.
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
              Industrial
              <strong> Licence</strong>
            </Heading>
            <Text>
              If you’re interested in producing or manufacturing goods, then our
              team can help you secure an industrial licence that permits you to
              engage in industrial and manufacturing activities.
            </Text>
          </VStack>
        </Stack>
      </Stack>
    </SectionWrapper>
  )
}

export default TradeLicences
