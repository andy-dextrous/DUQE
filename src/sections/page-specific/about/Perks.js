import { Heading, Stack, VStack } from "@chakra-ui/react"
import React from "react"
import Blurb from "../../../components/common/Blurb"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"
import { useVariable } from "../../../hooks"

function Perks() {
  const { componentSpacing, newsletterOffset } = useVariable()
  return (
    <SectionWrapper containerSize="lg" className="light" mb={newsletterOffset}>
      <VStack spacing={componentSpacing} alignItems="start">
        <Heading className="jumbo">
          The perks of setting up your business
          <YellowHeading> in DUQE </YellowHeading>
        </Heading>
        <Heading as="h3" className="thin-h3">
          Our team consists of some of the brightest minds in the world, working
          behind the scenes to lay the foundation of your success in the City of
          Dreams. From international companies to SMEs, we support your
          ambitions, no matter what they are. DUQE is where you make things
          happen. DUQE gives you the freedom and power to transform your
          business ideas into reality.
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
          title="Fast & Easy Process"
          text="DUQE is where you can get everything done for your business – from setup and beyond. Because we do everything in-house, you get to enjoy significant savings in time and money."
        />
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/location.svg"
          title="Unique & Strategic Location"
          text="DUQE is uniquely situated aboard the QE2, making it easily accessible from almost any part of Dubai. It’s 18 minutes from Dubai International Airport and 15 minutes away from Burj Khalifa and Dubai Mall."
        />
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/hip.svg"
          title="Entrepreneurship Made More Accessible"
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
          title="Business Centre"
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

export default Perks
