import { Heading, Stack, VStack } from "@chakra-ui/react"
import React from "react"
import Blurb from "../../../components/common/Blurb"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"

function YourLegacy() {
  return (
    <SectionWrapper containerSize="lg" className="light">
      <VStack spacing={[8, 8, 12]} alignItems="start">
        <Heading className="jumbo">
          Your <YellowHeading>Legacy </YellowHeading>Starts at Duqe
        </Heading>
        <Heading as="h3" className="thin-h3">
          DUQE is the free zone for innovators and disruptors that want their
          business setup done better. Based on the Queen Elizabeth 2 (QE2), one
          of the most famous cruise ships of all time, DUQE is not like any
          other free zone in Dubai. It is anything but boring.
          <br />
          <br /> Our team consists of some of the brightest minds in the
          industry, working behind the scenes to lay the foundation of your
          success in the City of Dreams. Whether you’re building an
          international company or SME, we enable you to fulfil your ambitions,
          no matter what they are. DUQE is where you belong. DUQE is your tribe.
          DUQE is where you get in the zone.
        </Heading>
      </VStack>
      <Stack
        direction={["column", "column", "row"]}
        mt={[24]}
        spacing={[8, 8, 24]}
        align="flex-start"
      >
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972190/DUQE/swift-easy.svg"
          title="Fast & easy process"
          text="DUQE is where you can get everything done for your business – from setup and beyond. Because we do everything in-house, you get to enjoy significant savings in time and money."
        />
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/location.svg"
          title="Unique & Strategic Location"
          text="DUQE is uniquely situated aboard the QE2, making it easily accessible from almost any part of Dubai. It’s 18 minutes from Dubai International Airport and 15 minutes away from Burj Khalifa and Dubai Mall."
        />
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/hip.svg"
          title="Entrepreneurship Made Accessible"
          text="With DUQE’s competitive and flexible company setup packages, realising your dreams doesn’t have to cost a fortune."
        />
      </Stack>
      <Stack
        direction={["column", "column", "row"]}
        mt={[8, 8, 24]}
        spacing={[8, 8, 24]}
        align="flex-start"
      >
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/holistic.svg"
          title="End-to-end Support"
          text="We have a wide variety of value-added services that cater to your every need as a business owner. Whether you need to apply for visas or open a bank account, DUQE can meet your needs."
        />
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/business_centre.svg"
          title="Business Center"
          text="Featuring state-of-the-art facilities and workspaces, DUQE is designed to give you the ideal platform for realising your vision and making things happen."
        />
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/Society.svg"
          title="Join the tribe"
          text="Join a thriving community of entrepreneurs and founders, grinders and hustlers, who share the same unyielding drive and passion for the things they do."
        />
      </Stack>
    </SectionWrapper>
  )
}

export default YourLegacy
