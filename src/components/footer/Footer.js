import React from "react"
import { Link } from "gatsby"
import Logo from "../../assets/logos/Logo"
import SectionWrapper from "../../components/SectionWrapper"
import { SocialFollows } from "../../components/social/SocialFollows"
import NewsletterFooter from "./NewsletterFooter"
import { useMenuQuery } from "../../hooks"
import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react"

function Footer({ withSignup = true }) {
  const footerMenu1 = useMenuQuery("Footer Menu 1")
  const footerMenu2 = useMenuQuery("Footer Menu 2")
  const footerMenu3 = useMenuQuery("Footer Menu 3")

  return (
    <SectionWrapper
      bg="dark.default"
      pt={0}
      px={[0, 0, 16, 20, 40, "200px"]}
      containerStyles={{ position: "relative", pt: [0, 0, "unset"] }}
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
            {footerMenu1.menuItems.nodes.map(menuItem => {
              return (
                <Link to={menuItem.path} key={`footer-link-${menuItem.id}`}>
                  <Text as="li" color="white" className="footerLink">
                    {menuItem.label}
                  </Text>
                </Link>
              )
            })}
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text color="dark.500" fontWeight="bold">
            Business Setup
          </Text>
          <VStack as="ul" flex="1" align="flex-start">
            {footerMenu2.menuItems.nodes.map(menuItem => {
              return (
                <Link to={menuItem.path} key={`footer-link-${menuItem.id}`}>
                  <Text as="li" color="white" className="footerLink">
                    {menuItem.label}
                  </Text>
                </Link>
              )
            })}
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text color="dark.500" fontWeight="bold">
            Info
          </Text>
          <VStack as="ul" flex="1" align="flex-start">
            {footerMenu3.menuItems.nodes.map(menuItem => {
              return (
                <Link to={menuItem.path} key={`footer-link-${menuItem.id}`}>
                  <Text as="li" color="white" className="footerLink">
                    {menuItem.label}
                  </Text>
                </Link>
              )
            })}
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
