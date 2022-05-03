import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import YellowHeading from "../../../components/common/YellowHeading"
import SectionWrapper from "../../../components/SectionWrapper"

function Signup() {
  return (
    <SectionWrapper className="light" minH="100vh" my={40}>
      <Stack direction={["column", "column", "row"]} spacing={0}>
        <VStack spacing={24} flex="1">
          <VStack align="flex-start" spacing={12} w="full">
            <Heading flex="1" className="jumbo">
              <YellowHeading>Sign up</YellowHeading> to be a DUQE agent
            </Heading>
            <Heading as="h3" className="thin-h3" color="dark.default">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              soluta deleniti odit.
            </Heading>
          </VStack>
          <VStack spacing={24} w="full">
            <HStack justify="flex-start" w="full" spacing={12}>
              <Heading
                className="jumbo light"
                width="100px"
                h="100px"
                position="relative"
                sx={{ "&.jumbo.light": { fontWeight: "light" } }}
                _after={{
                  content:
                    "url('https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651111192/DUQE/Motifs_05.svg')",
                  position: "absolute",
                  bottom: "-20%",
                  right: "0",
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  zIndex: "-1",
                }}
              >
                1
              </Heading>
              <Box flexGrow="1" h="full">
                <Heading as="h6" color="brandBlue.default">
                  Step 1 - Register Yourself
                </Heading>
                <Heading as="h4" className="thin">
                  Register by filling out our form or send us a message at{" "}
                  <strong>info@duqe.ae</strong>
                </Heading>
              </Box>
            </HStack>
            <HStack justify="flex-start" w="full" spacing={12}>
              <Heading
                className="jumbo light"
                width="100px"
                h="100px"
                position="relative"
                sx={{ "&.jumbo.light": { fontWeight: "light" } }}
                _after={{
                  content:
                    "url('https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651111192/DUQE/Motifs_06.svg')",
                  position: "absolute",
                  bottom: "-20%",
                  right: "0",
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  zIndex: "-1",
                }}
              >
                2
              </Heading>
              <Box flexGrow="1" h="full">
                <Heading as="h6" color="brandBlue.default">
                  Step 2 - Login
                </Heading>
                <Heading as="h4" className="thin">
                  <strong>Login an Agent Agreement</strong> with DUQE Free Zone.
                </Heading>
              </Box>
            </HStack>
            <HStack justify="flex-start" w="full" spacing={12}>
              <Heading
                className="jumbo light"
                width="100px"
                h="100px"
                position="relative"
                sx={{ "&.jumbo.light": { fontWeight: "light" } }}
                _after={{
                  content:
                    "url('https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651111192/DUQE/Motifs_04.svg')",
                  position: "absolute",
                  bottom: "-20%",
                  right: "0",
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  zIndex: "-1",
                }}
              >
                3
              </Heading>
              <Box flexGrow="1" h="full">
                <Heading as="h6" color="brandBlue.default">
                  Step 3 - Send Trade Licence
                </Heading>
                <Heading as="h4" className="thin">
                  Send a copy of your{" "}
                  <strong>Trade Licence (Or Equivalent).</strong>
                </Heading>
              </Box>
            </HStack>
          </VStack>
        </VStack>
        <VStack spacing={12} align="flex-end" flex="1">
          <VStack
            p={["70px"]}
            w={["100%", "100%", "560px"]}
            bg="brandConcrete.default"
            align="flex-start"
            spacing={5}
            rounded="30px"
          >
            <Heading
              as="h4"
              className="normal-case"
              sx={{ "&.normal-case": { textTransform: "unset" } }}
            >
              Login to your DUQE partner account
            </Heading>
            <Input placeholder="Email Address" />
            <Input placeholder="Password" />
            <Button size="sm">Submit</Button>
          </VStack>
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default Signup
