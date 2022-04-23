import React, { useRef } from "react"
import { Link as GatsbyLink } from "gatsby"
import SectionWrapper from "../../components/layouts/SectionWrapper"

import {
  Avatar,
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react"

function ContentCardLeft({ data, breadcrumbs, prev, next }) {
  const authorRef = useRef()
  const containerRef = useRef()
  const { readingTime } = data.seo

  return (
    <SectionWrapper h="auto" minH="auto" overflowX="unset">
      <Container h="100%" maxW={["container.lg", "container.xl"]}>
        <Stack
          direction={["column", "column", "row"]}
          wrap="nowrap"
          spacing={20}
          p={0}
        >
          {" "}
          <VStack
            spacing={3}
            p={0}
            align="start"
            flex="1"
            justify="start"
            ref={containerRef}
            position="relative"
          >
            <VStack
              spacing={6}
              bg="brandGreen.600"
              align="start"
              p={12}
              rounded="2xl"
              position="sticky"
              top={40}
              left="0"
              ref={authorRef}
              width={["100%", "100%", "100%"]}
              h="400px"
            >
              <HStack>
                <Avatar
                  name="Mel Pikos"
                  src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1641794532/mel.png"
                  boxSize="50px"
                  size="2xl"
                />
              </HStack>
              <Box>
                <Text>Author</Text>
                <Heading as="h4" fontSize="18px" fontWeight="semibold">
                  {data.author.node.name}
                </Heading>
              </Box>
              <Box>
                <Text>Date</Text>
                <Heading as="h4" fontSize="18px" fontWeight="semibold">
                  {data.date}
                </Heading>
              </Box>
              <Box>
                <Text>Category</Text>
                <Wrap py={1}>
                  <Badge variant="filled">Retention</Badge>
                  <Badge variant="filled">Staffing</Badge>
                </Wrap>
              </Box>
            </VStack>
          </VStack>
          <VStack flex="2" align="start" spacing={8} as="article">
            <VStack align="start" spacing={2} as="header">
              {data.title && <Heading as="h1">{data.title}</Heading>}
              <Text fontWeight="normal" fontSize="18px">
                The pandemic has changed our lives in ways that we could never
                have imagined previously.
              </Text>
              <Text fontSize="sm" color="gray.400">
                {data.date}. {readingTime + " minute read"}
              </Text>
            </VStack>

            {data.content && (
              <Box className="wsywyg">
                <Box dangerouslySetInnerHTML={{ __html: data.content }} />
              </Box>
            )}
            <HStack pt={8} justify="space-between" w="full">
              {prev && <GatsbyLink to={prev}>Previous Article</GatsbyLink>}
              {next && <GatsbyLink to={next}>Next Article</GatsbyLink>}
            </HStack>
          </VStack>
        </Stack>
      </Container>
    </SectionWrapper>
  )
}

export default ContentCardLeft
