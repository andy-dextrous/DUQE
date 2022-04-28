import { Heading, Stack, Text } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"

function Mission() {
  return (
    <SectionWrapper
      bg="dark.default"
      containerSize="lg"
      minH="100vh"
      containerStyles={{ py: [0], pb: [20, 20, 32, 48, 60] }}
    >
      <Stack
        h="full"
        w="full"
        align="center"
        direction="row"
        zIndex="1"
        position="relative"
        spacing={24}
        mb={40}
      >
        <Heading
          color="white"
          position="relative"
          flex="1"
          _after={{
            content:
              "url('https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651112830/DUQE/Union.svg')",
            position: "absolute",
            top: "-15%",
            left: "-30%",
            width: "100%",
            height: "100%",
            opacity: "50%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: "-1",
          }}
        >
          Our
          <br /> <YellowHeading> mission</YellowHeading>
        </Heading>
        <Heading as="h3" className="thin-h3" color="white" flex="2">
          Starting a business is exciting, but it can also be stressful. We know
          that just as well as you do.{" "}
          <YellowHeading>
            {" "}
            <strong>
              It is our mission to streamline your business setup process to
              help you succeed in achieving your business goals.
            </strong>
          </YellowHeading>{" "}
          The good news is, we are fully equipped to meet your expectations with
          our services and in-house experts. We will guide you from the initial
          stage of trade name registration, all the way to business growth and
          beyond, with our value-added services.
        </Heading>
      </Stack>
      <Stack
        h="full"
        w="full"
        align="center"
        direction="row"
        zIndex="1"
        position="relative"
        spacing={24}
      >
        <Heading
          color="white"
          position="relative"
          flex="1"
          _after={{
            content:
              "url('https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651113641/DUQE/chevron_blue.svg')",
            position: "absolute",
            top: "-15%",
            left: "-30%",
            width: "180px",
            height: "180px",

            opacity: "50%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: "-1",
          }}
        >
          Our
          <br />{" "}
          <Text as="span" color="brandBlue.default">
            {" "}
            vision
          </Text>
        </Heading>
        <Heading as="h3" className="thin-h3" color="white" flex="2">
          <Text as="span" color="brandBlue.default">
            {" "}
            <strong>
              We aim to be the go-to company for individuals who are passionate
              and driven about their business ideas and ambitions.
            </strong>
          </Text>{" "}
          We envision to make entrepreneurship easier, simpler and more
          achievable for anyone who wants to embark on this new journey, while
          we provide them everything they will need to make it a success.
        </Heading>
      </Stack>
    </SectionWrapper>
  )
}

export default Mission
