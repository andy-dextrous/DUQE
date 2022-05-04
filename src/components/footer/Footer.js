import React from "react"
import { Link } from "gatsby"
import Logo from "../../assets/logos/Logo"
import SectionWrapper from "../../components/SectionWrapper"
import { SocialFollows } from "../../components/social/SocialFollows"
import NewsletterFooter from "./NewsletterFooter"
import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react"

function Footer({ withSignup = true }) {
  return (
    <SectionWrapper
      bg="dark.default"
      pt={0}
      px={[0, 0, 16, 20, 40, "200px"]}
      containerStyles={{ position: "relative", pt: [0, 0, "unset"] }}
      sx={{
        "& a": {
          fontWeight: "400",
          _hover: { color: "brandBlue.default" },
        },
      }}
    >
      {withSignup && <NewsletterFooter />}

      <Stack
        w="full"
        direction={["column", "column", "row"]}
        spacing={[8, 8, 36]}
        px={[5, 5, 0]}
        mt={[20, 20, withSignup ? "200px" : "unset"]}
        mb={12}
        as="footer"
      >
        <Box>
          <Logo useContrast={false} width="120px" />
        </Box>
        <Heading as="h2" color="white" className="upper-case">
          Reach for your dreams.
          <br />
          <Text as="span" color="brandYellow.default">
            Create your legacy.
          </Text>
        </Heading>
      </Stack>
      <Stack
        direction={["column", "column", "row"]}
        justify="space-between"
        spacing={[8, 8, 20]}
        w="full"
        px={[5, 5, 0]}
      >
        <VStack align="flex-start">
          <Text color="dark.500" fontWeight="bold">
            Duqe
          </Text>
          <VStack as="ul" flex="1" align="flex-start">
            <Link to="/" as="li">
              <Text color="white">About Us</Text>
            </Link>
            <Link to="/" as="li">
              <Text color="white">Management Team</Text>
            </Link>
            <Link to="/" as="li">
              <Text color="white">News</Text>
            </Link>
            <Link to="/" as="li">
              <Text color="white">Careers</Text>
            </Link>
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text color="dark.500" fontWeight="bold">
            Duqe
          </Text>
          <VStack as="ul" flex="1" align="flex-start">
            <Link to="/" as="li">
              <Text color="white">About Us</Text>
            </Link>
            <Link to="/" as="li">
              <Text color="white">Management Team</Text>
            </Link>
            <Link to="/" as="li">
              <Text color="white">News</Text>
            </Link>
            <Link to="/" as="li">
              <Text color="white">Careers</Text>
            </Link>
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text color="dark.500" fontWeight="bold">
            Duqe
          </Text>
          <VStack as="ul" flex="1" align="flex-start">
            <Link to="/" as="li">
              <Text color="white">About Us</Text>
            </Link>
            <Link to="/" as="li">
              <Text color="white">Management Team</Text>
            </Link>
            <Link to="/" as="li">
              <Text color="white">News</Text>
            </Link>
            <Link to="/" as="li">
              <Text color="white">Careers</Text>
            </Link>
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text color="dark.500" fontWeight="bold">
            Duqe
          </Text>
          <SocialFollows direction="row" spacing={8} color="dark.400" />
        </VStack>
        <VStack align="flex-start">
          <Text color="dark.500">
            Copyright © {new Date().getFullYear()} Duqe. <br />
            All rights reserved.
          </Text>
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default Footer
