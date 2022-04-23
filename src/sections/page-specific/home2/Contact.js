import React from "react"
import { MdMyLocation, MdPhone } from "react-icons/md"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import GetForm from "../../../components/forms/getForm/GetForm"
import { useThemeOptions } from "../../../hooks/useThemeOptions"
import { MdEmail } from "react-icons/md"
import {
  Container,
  VStack,
  Heading,
  Box,
  Link,
  List,
  ListItem,
  ListIcon,
  Text,
  Stack,
} from "@chakra-ui/react"
import ContactPageElements from "../../../components/forms/ContactPageElements"

function ContactForm() {
  const { contact, googleMapsLink } = useThemeOptions()

  return (
    <SectionWrapper
      pt={20}
      pb={24}
      id="contact"
      bg="brandBlue.900"
      sx={{ strong: { color: "brandGreen.500" } }}
      roundedTop={["25px", "25px", "unset"]}
    >
      <Container maxW="container.xl">
        <Stack
          justify="space-between"
          align="start"
          direction={["column", "column", "row"]}
          spacing={[14, 14, 8]}
        >
          <VStack align="start" flex="1" spacing={8}>
            <VStack align="start" spacing={4}>
              <Heading
                as="h2"
                fontSize={["2xl", "2xl", "5xl"]}
                color="brandGreen.500"
                fontWeight={["bold", "bold", "extrabold"]}
              >
                Let's go places
              </Heading>
              <Text w={["full", "full", "70%"]} color="gray.100">
                Looking to lease or transform your workplace? Make an enquiry
                with our team by filling out the form and a member of our team
                will be in touch with you shortly.
              </Text>
            </VStack>
            <Box>
              <List>
                <ListItem mb={4} display="flex" align="flex-start">
                  <Link
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Google Maps`}
                  >
                    <ListIcon
                      as={MdMyLocation}
                      color="brandGreen.500"
                      fontSize="2xl"
                    />
                    <Text
                      as="span"
                      color="gray.100"
                      fontSize={["sm", "sm", "inherit"]}
                    >
                      <strong>Address - </strong> {contact.address.street},{" "}
                      {contact.address.city}, {contact.address.state}{" "}
                      {contact.address.zip}
                    </Text>
                  </Link>
                </ListItem>
                <ListItem mb={4} display="flex" align="flex-start">
                  <ListIcon
                    as={MdPhone}
                    color="brandGreen.500"
                    fontSize="2xl"
                  />
                  <Link href={`tel:${contact.phone}`}>
                    <Text
                      as="span"
                      color="gray.100"
                      fontSize={["sm", "sm", "inherit"]}
                    >
                      <strong>Head Office - </strong>
                      {contact.phone}
                    </Text>
                  </Link>
                </ListItem>
                <ListItem display="flex" align="flex-start">
                  <ListIcon
                    as={MdEmail}
                    color="brandGreen.500"
                    fontSize="2xl"
                  />
                  <Link href={`mailto:${contact.email}`}>
                    <Text
                      as="span"
                      color="gray.100"
                      fontSize={["sm", "sm", "inherit"]}
                    >
                      <strong>Email</strong>
                    </Text>
                  </Link>
                </ListItem>
              </List>
            </Box>
          </VStack>

          <Box flex="1">
            <GetForm formElements={<ContactPageElements />} />
          </Box>
        </Stack>
      </Container>
    </SectionWrapper>
  )
}

export default ContactForm
