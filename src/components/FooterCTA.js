import React from "react"
import {
  Heading,
  VStack,
  Text,
  Button,
  Stack,
  useBreakpointValue,
  Center,
  Box,
} from "@chakra-ui/react"
import SectionWrapper from "./layouts/SectionWrapper"
import { Link } from "gatsby"

function FooterCTA() {
  const shouldDisplay = useBreakpointValue([false, false, true])
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])

  return (
    <Box className="section">
      <SectionWrapper bg="brandYellow.600" py={0} h="100vh">
        <Center h="100%">
          <Stack
            justifyContent={["center", "center", "stretch"]}
            px="10%"
            spacing={24}
            direction={["column", "column", "row"]}
            position="relative"
            minH={{ base: "unset", xl: "40vh" }}
          >
            <VStack
              spacing={6}
              flex="4"
              align={["center", "center", "start"]}
              justify={"center"}
              pr={[0, 0, 24]}
            >
              <Heading
                fontSize={["5xl", "5xl", "6xl"]}
                textAlign={["center", "center", "left"]}
                fontWeight={{ "2xl": "extrabold" }}
              >
                Let's bring the{" "}
                <Text as="span" color="white">
                  best
                </Text>{" "}
                out of your people
              </Heading>
              <Link to="/contact-us">
                <Button variant="green" size={buttonSize}>
                  Get in Touch
                </Button>
              </Link>
            </VStack>

            {shouldDisplay && (
              <VStack
                flex="2"
                justify="end"
                align="end"
                minHeight={{ xl: "50vh", "2xl": "30vh" }}
                position="relative"
                spacing={6}
              >
                <Heading
                  as="h4"
                  fontSize="lg"
                  fontWeight="normal"
                  textAlign="right"
                >
                  "Think not about how much value to extract from workers but
                  about how much value to instill in them.""
                </Heading>
                <Link to="/about-us">
                  <Button variant="dark" size="lg">
                    How we work
                  </Button>
                </Link>
              </VStack>
            )}
          </Stack>
        </Center>
      </SectionWrapper>
    </Box>
  )
}

export default FooterCTA
