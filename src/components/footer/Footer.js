import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import Logo from "../../assets/logos/Logo"
import SectionWrapper from "../../components/SectionWrapper"
import SmartLink from "../../components/SmartLink"
import { SocialFollows } from "../../components/social/SocialFollows"
import NewsletterFooter from "./NewsletterFooter"

function Footer({ withSignup = true }) {
  return (
    <SectionWrapper
      bg="dark.default"
      pt={0}
      containerSize="xl"
      containerStyles={{ position: "relative" }}
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
        direction="row"
        spacing={36}
        mt={withSignup ? "200px" : "unset"}
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
      <Stack direction="row" justify="space-between" spacing={20} w="full">
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
