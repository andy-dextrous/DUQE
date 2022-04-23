import React from "react"
import SectionWrapper from "../../components/layouts/SectionWrapper"
import { EmailIcon } from "@chakra-ui/icons"
import HorizontalCard from "../../components/cards/HorizontalCard"
import { SocialFollows } from "../../components/social/SocialFollows"
import {
  Heading,
  Text,
  VStack,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Container,
  Button,
  InputRightElement,
  SimpleGrid,
} from "@chakra-ui/react"

function FeaturedPosts({ posts }) {
  return (
    <SectionWrapper minH="auto" pb={12}>
      <Container h="100%" maxW={["container.lg", "container.lg", "100%"]}>
        <Stack
          spacing={[20]}
          align="start"
          direction={{ base: "column", xl: "row" }}
        >
          <VStack align="start" spacing={8} flex="3">
            <Heading as="h3" fontSize={["xl", "1xl", "2xl", "3xl"]}>
              Featured articles
            </Heading>
            <SimpleGrid
              columns={[1, 1, posts.length > 1 ? 2 : 1]}
              gap={8}
              w="100%"
            >
              {posts.map(post => {
                return (
                  <HorizontalCard
                    imageWidth={posts.length > 1 ? "100px" : "200px"}
                    post={post}
                  />
                )
              })}
            </SimpleGrid>
          </VStack>
          <VStack flex="1" justify="start" layerStyle="fillSpace">
            <VStack align="start" spacing={8}>
              <Heading as="h3" fontSize={["xl", "1xl", "2xl", "3xl"]}>
                Follow Us
              </Heading>
              <VStack
                bg="brandChestnut.200"
                rounded="xl"
                align="start"
                p={8}
                spacing={3}
                w="100%"
              >
                <Text>Get the latest news</Text>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<EmailIcon color="gray.300" />}
                    />
                    <Input
                      placeholder="email"
                      variant="filled"
                      borderRightRadius="50px"
                    />
                    <InputRightElement>
                      <Button>+</Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <SocialFollows />
              </VStack>
            </VStack>
          </VStack>
        </Stack>
      </Container>
    </SectionWrapper>
  )
}

export default FeaturedPosts
