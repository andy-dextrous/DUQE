import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import YellowHeading from "../../../components/common/YellowHeading"
import SectionWrapper from "../../../components/SectionWrapper"

function Signup() {
  return (
    <SectionWrapper className="light" minH="100vh" my={[0, 0, 40]}>
      <Stack direction={["column", "column", "row"]} spacing={(12, 12, 12)}>
        <VStack spacing={[8, 8, 24]} flex="1">
          <VStack align="flex-start" spacing={12} w="full">
            <Heading flex="1" className="jumbo">
              <YellowHeading>Sign up</YellowHeading> to be a DUQE agent
            </Heading>
            <Heading as="h3" className="thin-h3" color="dark.default">
              Wanna become an exclusive DUQE agent? It's as easy as 1,2,3.
            </Heading>
          </VStack>
          <VStack spacing={[8, 8, 24]} w="full">
            <Stack
              direction={["column", "column", "row"]}
              justify="flex-start"
              w="full"
              spacing={[8, 12, 12]}
            >
              <Box
                width={["40px", "40px", "100px"]}
                h={["40px", "40px", "100px"]}
                position="relative"
              >
                <Heading
                  className="jumbo light"
                  sx={{ "&.jumbo.light": { fontWeight: "light" } }}
                  position="absolute"
                  top="0"
                  width="100px"
                  zIndex="1"
                >
                  1
                </Heading>
                <Image
                  src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651111192/DUQE/Motifs_05.svg"
                  positon="absolute"
                  left="0"
                  bottom="0"
                  transform={[
                    "translateY(10px)",
                    "translateY(10px)",
                    "translateY(30px)",
                  ]}
                  h="100%"
                  w="100%"
                  zIndex="-1"
                />
              </Box>
              <Box
                flexGrow="1"
                h="full"
                transform={[
                  "unset",
                  "unset",
                  "translateX(10px)",
                  "translateX(10px)",
                  "translateX(23px)",
                ]}
              >
                <Heading as="h6" color="brandBlue.default">
                  Step 1 - Register Yourself
                </Heading>
                <Heading as="h4" className="thin">
                  Register by filling out our form or send us a message at{" "}
                  <Link href="mailto:info@duqe.ae">
                    <strong>info@duqe.ae</strong>
                  </Link>
                </Heading>
              </Box>
            </Stack>
            <Stack
              direction={["column", "column", "row"]}
              justify="flex-start"
              w="full"
              spacing={[8, 8, 12]}
            >
              <Box
                width={["40px", "40px", "100px"]}
                h={["50px", "50px", "100px"]}
                position="relative"
              >
                <Heading
                  className="jumbo light"
                  sx={{ "&.jumbo.light": { fontWeight: "light" } }}
                  position="absolute"
                  top="0"
                  w="full"
                  h="full"
                  zIndex="1"
                >
                  2
                </Heading>
                <Image
                  src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651111192/DUQE/Motifs_06.svg"
                  positon="absolute"
                  left="0"
                  bottom="0"
                  transform={[
                    "translateY(10px)",
                    "translateY(10px)",
                    "translateY(40px)",
                  ]}
                  h="100%"
                  w="100%"
                  zIndex="-1"
                />
              </Box>
              <Box flexGrow="1" h="full">
                <Heading as="h6" color="brandBlue.default">
                  Step 2 - Login
                </Heading>
                <Heading as="h4" className="thin">
                  <strong>Login an Agent Agreement</strong> with DUQE Free Zone.
                </Heading>
              </Box>
            </Stack>
            <Stack
              direction={["column", "column", "row"]}
              justify="flex-start"
              w="full"
              spacing={[8, 8, 12]}
            >
              <Box
                width={["40px", "40px", "100px"]}
                h={["50px", "50px", "100px"]}
                position="relative"
              >
                <Heading
                  className="jumbo light"
                  sx={{ "&.jumbo.light": { fontWeight: "light" } }}
                  position="absolute"
                  top="0"
                  w="full"
                  h="full"
                  zIndex="1"
                >
                  3
                </Heading>
                <Image
                  src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651111192/DUQE/Motifs_04.svg"
                  positon="absolute"
                  left="0"
                  bottom="0"
                  transform={[
                    "translateY(10px)",
                    "translateY(10px)",
                    "translateY(30px)",
                  ]}
                  h="100%"
                  w="100%"
                  zIndex="-1"
                />
              </Box>
              <Box flexGrow="1" h="full">
                <Heading as="h6" color="brandBlue.default">
                  Step 3 - Send Trade Licence
                </Heading>
                <Heading as="h4" className="thin">
                  Send a copy of your{" "}
                  <strong>Trade Licence (Or Equivalent).</strong>
                </Heading>
              </Box>
            </Stack>
          </VStack>
        </VStack>
        <VStack spacing={12} align="flex-end" flex="1">
          <VStack
            p={[12, 12, "70px"]}
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
