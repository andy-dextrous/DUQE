import React from "react"
import {
  Button,
  Center,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react"

function NewsletterFooter() {
  return (
    <Center
      w={["100%", "100%"]}
      bg="brandConcrete.default"
      h={["auto", "auto", "448px"]}
      rounded={[0, 0, "30px"]}
      position={["relative", "relative", "absolute"]}
      top={["unset", "unset", "-224px"]}
      left="0"
      py={[20, 20, 20]}
      px={[8, 8, 0]}
    >
      <VStack w="full" spacing={8} p>
        <Heading className="upper-case">Subscribe to our newsletter</Heading>
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
