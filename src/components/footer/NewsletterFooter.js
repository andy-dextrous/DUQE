import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react"
import React from "react"

function NewsletterFooter() {
  return (
    <Center
      w="container.xl"
      bg="brandConcrete.default"
      minH="30vh"
      rounded="2xl"
      position="absolute"
      top="-200px"
      p={20}
    >
      <VStack w="full" spacing={8}>
        <Heading>Subscribe to our newsletter</Heading>
        <Heading as="h3" className="thin-h3">
          Make sure to subscribe to our latest news and events.
        </Heading>
        <InputGroup maxWidth="500px" bg="white" rounded="xl" size="lg">
          <Input placeholder="Enter your email" w="full" />
          <InputRightElement children={<Button h="100%">Send</Button>} />
        </InputGroup>
      </VStack>
    </Center>
  )
}

export default NewsletterFooter
