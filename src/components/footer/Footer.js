import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import React from "react"
import Logo from "../../assets/logos/Logo"
import SectionWrapper from "../../components/SectionWrapper"
import { SocialFollows } from "../../components/social/SocialFollows"
import NewsletterFooter from "./NewsletterFooter"

function Footer({ withSignup = true }) {
  return (
    <SectionWrapper
      bg="dark.default"
      pt={0}
      containerSize="xl"
      containerStyles={{ position: "relative" }}
    >
      {withSignup && <NewsletterFooter />}

      <Stack
        w="full"
        direction="row"
        spacing={36}
        mt={withSignup ? "200px" : "unset"}
        mb={12}
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
            <Text as="li" color="white">
              About Us
            </Text>
            <Text as="li" color="white">
              Management Team
            </Text>
            <Text as="li" color="white">
              News
            </Text>
            <Text as="li" color="white">
              Careers
            </Text>
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text color="dark.500" fontWeight="bold">
            Duqe
          </Text>
          <VStack as="ul" flex="1" align="flex-start">
            <Text as="li" color="white">
              About Us
            </Text>
            <Text as="li" color="white">
              Management Team
            </Text>
            <Text as="li" color="white">
              News
            </Text>
            <Text as="li" color="white">
              Careers
            </Text>
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text color="dark.500" fontWeight="bold">
            Duqe
          </Text>
          <VStack as="ul" flex="1" align="flex-start">
            <Text as="li" color="white">
              About Us
            </Text>
            <Text as="li" color="white">
              Management Team
            </Text>
            <Text as="li" color="white">
              News
            </Text>
            <Text as="li" color="white">
              Careers
            </Text>
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
            Copyright © 2020 Duqe. <br />
            All rights reserved.
          </Text>
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default Footer
