import { Button, Heading, Stack, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"
import { Link } from "gatsby"
import StarIcon from "../../../assets/icons/StarIcon"

function Access() {
  return (
    <SectionWrapper className="light" containerSize="xl">
      <StarIcon
        outline
        color="#e0db2a"
        w="50vw"
        h="50vw"
        position="absolute"
        right="-20%"
        top="-10%"
        zIndex="-2"
      />
      <Stack
        direction={["column", "column", "row"]}
        spacing={[8, 8, 40]}
        position="relative"
      >
        <Heading flex="2" className="jumbo">
          Get access to <YellowHeading>Thousands</YellowHeading> of activities
        </Heading>
        <VStack spacing={12} align="start" flex="1">
          <Heading as="h3" className="thin-h3" color="dark.default">
            Setting up in DUQE means freedom. Freedom to chase your dreams.
            Freedom to explore new opportunities. And freedom to choose from
            over 2,500 business activities.
          </Heading>
          <Link to="/business-activities">
            <Button>See All Activities</Button>
          </Link>
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default Access
