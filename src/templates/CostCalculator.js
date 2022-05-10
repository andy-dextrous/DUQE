import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import SectionWrapper from "../components/SectionWrapper"
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  HStack,
  Progress,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import data from "../sections/page-specific/cost-calculator/data.json"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"

function CostCalculator(props) {
  return (
    <Layout withSignup={false} withTopBar={false}>
      <Seo props={props} />
      <SectionWrapper
        h="100vh"
        width="calc(100vw - 100px)"
        className="light"
        withContainer={false}
        ml={"100px"}
        px="0"
      >
        <Stack direction="row" w="100%" spacing="0" maxWidth="100%">
          <Center flex="7" py="200px" px="200px">
            <VStack align="flex-start" spacing={8}>
              <Heading textTransform="uppercase">
                How long do you want to license your business?
              </Heading>
              <Heading as="h6">Select the duration of your license</Heading>
              <Text>
                Whether you want a license for one year or you’re planning a
                long-term business, we have it. With our multi-year license
                setup deals, you not only save on time but also on money.
              </Text>
              <Select variant="filled" w="50%">
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
              </Select>
              <Text>
                * All packages include an LLC-FZ trade license, 3 groups of
                business activities and a shared desk facility, located inside
                The Meydan Hotel.
              </Text>
              <ButtonGroup pt={20}>
                <Button variant="light" leftIcon={<ArrowBackIcon />}>
                  Back
                </Button>
                <Button rightIcon={<ArrowForwardIcon />}>Next</Button>
              </ButtonGroup>
            </VStack>
          </Center>
          <Box
            flex="3"
            bg="brandYellow.default"
            py="200px"
            px="100px"
            position="relative"
          >
            <VStack w="full" align="flex-start" spacing={8}>
              <Heading className="jumbo" opacity="0.05" w="full">
                Q1
              </Heading>
              <Progress
                w="full"
                h="5px"
                value={20}
                sx={{
                  "div[role=progressbar]": {
                    bg: "brandBlue.default",
                  },
                }}
              />
              <Heading as="h3" textTransform="uppercase">
                Cost Calculator
              </Heading>
              <Text>
                Our licences are designed to be scalable, so you can easily add
                or remove users as your business grows or changes
              </Text>
            </VStack>
          </Box>
        </Stack>
      </SectionWrapper>
    </Layout>
  )
}

export default CostCalculator

export const pageQuery = graphql`
  query COST_CALCULATOR_QUERY {
    wpPage(isPostsPage: { eq: true }) {
      title
    }
  }
`
