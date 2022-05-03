import { Button, Heading, Stack, StackDivider, VStack } from "@chakra-ui/react"
import React from "react"
import HomeBlogCard from "../../../components/archive/HomeBlogCard"
import SectionWrapper from "../../../components/SectionWrapper"
import { SmartLink } from "../../../components/SmartLink"

function LatestBlogs() {
  return (
    <SectionWrapper bg="dark.default" containerSize="xl">
      <Stack direction="row" spacing={40}>
        <VStack spacing={12} align="start" flex="1">
          <Heading className="jumbo" color="white">
            From the blog
          </Heading>
          <Heading as="h3" className="thin-h3" color="white">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Heading>
          <SmartLink url="/blog">
            <Button>View All</Button>
          </SmartLink>
        </VStack>
        <VStack
          flex="1"
          divider={<StackDivider borderColor="dark.800" />}
          spacing={16}
        >
          <HomeBlogCard startVisible />
          <HomeBlogCard />
          <HomeBlogCard />
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default LatestBlogs
