import React from "react"
import { MdMyLocation, MdPhone } from "react-icons/md"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import GetForm from "../../../components/forms/getForm/GetForm"
import { useThemeOptions } from "../../../hooks/useThemeOptions"
import { MdEmail } from "react-icons/md"
import ContactPageElements from "./../../../components/forms/ContactPageElements"
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

function ContactForm() {
  const { contact, googleMapsLink } = useThemeOptions()

  return (
    <SectionWrapper
      minH="unset"
      pb={[24, 24, 20]}
      id="contact"
      sx={{ strong: { color: "brandBlue.900" } }}
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
              <Heading as="h2" fontSize={["2xl", "3xl"]}>
                Work with us
              </Heading>
              <Text w={["full", "full", "70%"]}>
                Looking to lease or transform your workplace? Make an enquiry
                with our team by filling out the form and a member of our team
                will be in touch with you shortly.
              </Text>
            </VStack>
            <Box>
              <List>
                <ListItem mb={4} display="flex">
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
                    <Text as="span" fontSize={["sm", "sm", "inherit"]}>
                      <strong>Address - </strong> {contact.address.street},{" "}
                      {contact.address.city}, {contact.address.state}{" "}
                      {contact.address.zip}
                    </Text>
                  </Link>
                </ListItem>
                <ListItem mb={4} display="flex" align="center">
                  <ListIcon
                    as={MdPhone}
                    color="brandGreen.500"
                    fontSize="2xl"
                  />
                  <Link href={`tel:${contact.phone}`}>
                    <Text as="span" fontSize={["sm", "sm", "inherit"]}>
                      <strong>Head Office - </strong>
                      {contact.phone}
                    </Text>
                  </Link>
                </ListItem>
                <ListItem display="flex" align="center">
                  <ListIcon
                    as={MdEmail}
                    color="brandGreen.500"
                    fontSize="2xl"
                  />
                  <Link href={`mailto:${contact.email}`}>
                    <Text as="span" fontSize={["sm", "sm", "inherit"]}>
                      <strong>Email</strong>
                    </Text>
                  </Link>
                </ListItem>
              </List>
            </Box>
          </VStack>
          <Box flex="1">
            {/* <GravityForm form={data.wpGfForm} /> */}
            <GetForm formElements={<ContactPageElements />} />
          </Box>
        </Stack>
      </Container>
    </SectionWrapper>
  )
}

export default ContactForm

// const data = useStaticQuery(graphql`
//   query getForm {
//     wpGfForm(databaseId: { eq: 1 }) {
//       ...GravityFormFields
//     }
//   }
// `)
