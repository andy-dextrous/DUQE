import React from "react"
import { Link } from "gatsby"
import SectionWrapper from "../layouts/SectionWrapper"
import { MdMyLocation, MdPhone } from "react-icons/md"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { SocialFollows } from "../social/SocialFollows"
import { useThemeOptions } from "../../hooks/useThemeOptions"
import {
  Heading,
  VStack,
  Text,
  HStack,
  List,
  ListItem,
  ListIcon,
  Stack,
  chakra,
  Box,
} from "@chakra-ui/react"

function Footer() {
  const primaryMenu = useMenuQuery("Primary")
  const footerNavMenu = useMenuQuery("Footer Nav")
  // const footerResourcesMenu = useMenuQuery("Footer Resources")
  const { contact, googleMapsLink } = useThemeOptions()

  return (
    <SectionWrapper
      as="footer"
      minH="45vh"
      bg="brandGreen.600"
      footer
      id="tacticFooter"
      overflow="visible"
    >
      <Stack
        w="full"
        align="start"
        justify="space-between"
        position="relative"
        direction={["column", "column", "row"]}
        px={[4, 4, 0]}
        py={[8, 8, 0]}
        spacing={[8, 8, 0]}
      >
        <VStack align="start" spacing={6}>
          <Heading
            as="h4"
            fontSize="14px"
            textTransform="uppercase"
            letterSpacing="widest"
            color="white"
          >
            Services
          </Heading>
          <VStack align="start" as="nav">
            {primaryMenu.menuItems.nodes.map(item => {
              return (
                <Link key={item.databaseId} to={item.path}>
                  <Text
                    fontSize={["xl", "2xl", "2xl", "2xl", "3xl"]}
                    lineHeight="tall"
                    fontWeight="bold"
                    color="brandBlue.900"
                  >
                    {item.label}
                  </Text>
                </Link>
              )
            })}
          </VStack>
        </VStack>
        <VStack align="start" spacing={6} as="nav">
          <Heading
            as="h4"
            color="white"
            fontSize="14px"
            textTransform="uppercase"
            letterSpacing="widest"
          >
            Navigation
          </Heading>
          <VStack as="ul" align="start">
            {footerNavMenu.menuItems.nodes.map(item => {
              return (
                <Link key={item.databaseId} to={item.path}>
                  <Text as="li" color="brandBlue.900" fontWeight="medium">
                    {item.label}
                  </Text>
                </Link>
              )
            })}
          </VStack>
        </VStack>

        <VStack align="start" spacing={6} as="nav">
          <Heading
            as="h4"
            color="white"
            fontSize="14px"
            textTransform="uppercase"
            letterSpacing="widest"
          >
            Contact
          </Heading>
          <VStack align="start">
            <Text color="brandBlue.900" fontWeight="medium">
              {contact.address.street}
              <br />
              {contact.address.city}
              <br />
              {contact.address.state}, {contact.address.zip}
            </Text>

            <List>
              <ListItem
                _hover={{ svg: { fill: "white" }, span: { color: "white" } }}
              >
                <ListIcon
                  as={MdMyLocation}
                  color="brandBlue.900"
                  fontSize="lg"
                  _hover={{ fill: "white" }}
                />
                <chakra.a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Google Maps`}
                  _hover={{ color: "white" }}
                >
                  <Text as="span" color="brandBlue.900" fontSize="sm">
                    Click for directions
                  </Text>
                </chakra.a>
              </ListItem>
              <ListItem
                _hover={{ svg: { fill: "white" }, span: { color: "white" } }}
              >
                <chakra.a href={`tel:${contact.phone}`}>
                  <ListIcon as={MdPhone} color="brandBlue.900" fontSize="lg" />
                  <Text as="span" color="brandBlue.900" fontSize="sm">
                    {contact.phone}
                  </Text>
                </chakra.a>
              </ListItem>
            </List>
          </VStack>

          <HStack as="nav">
            <SocialFollows button size="sm" variant="white" />
          </HStack>
        </VStack>
      </Stack>
      <Box
        position="absolute"
        display={["block", "block", "none"]}
        bg="brandGreen.600"
        left="0"
        top="-25px"
        w="100vw"
        h="5vh"
        px="9%"
        py={3}
        roundedTop={"25px"}
        zIndex="20"
      ></Box>
    </SectionWrapper>
  )
}

export default Footer
