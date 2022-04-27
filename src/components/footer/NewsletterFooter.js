import {
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
      w="100%"
      bg="brandConcrete.default"
      h="448px"
      rounded="30px"
      position="absolute"
      top="-224px"
      left="0"
      py={20}
    >
      <VStack w="full" spacing={8}>
        <Heading>Subscribe to our newsletter</Heading>
        <Heading as="h3" className="thin-h3">
          Make sure to subscribe to our latest news and events.
        </Heading>
        <InputGroup maxWidth="522px" bg="white" rounded="xl" size="lg">
          <Input placeholder="Enter your email" w="full" />
          <InputRightElement children={<Button h="100%">Send</Button>} />
        </InputGroup>
      </VStack>
    </Center>
  )
}

export default NewsletterFooter
