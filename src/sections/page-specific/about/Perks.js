import { Heading, HStack, VStack } from "@chakra-ui/react"
import React from "react"
import Blurb from "../../../components/common/Blurb"
import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"

function Perks() {
  return (
    <SectionWrapper
      containerSize="lg"
      className="light"
      containerStyles={{ mb: 40 }}
    >
      <VStack spacing={12} alignItems="start">
        <Heading className="jumbo">
          Your <YellowHeading>Legacy </YellowHeading>Starts at Duqe
        </Heading>
        <Heading as="h3" className="thin-h3">
          The only free zone found on the water, DUQE is based on the
          prestigious QE2. Equipped with a modern business centre that offers
          all-in-one support, DUQE Free Zone is the ideal launchpad for both the
          budding entrepreneurs and seasoned business owners.
        </Heading>
      </VStack>
      <HStack mt={24} spacing={24} align="flex-start">
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972190/DUQE/swift-easy.svg"
          title="Swift & Easy Process"
          text="DUQE is where you can get everything done for your business – from setup and beyond. Having everything done in-house means you get to enjoy significant savings in time and money."
        />
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/location.svg"
          title="Unique & Strategic Location"
          text="DUQE is uniquely situated aboard the QE2, making it easily accessible from almost any part of Dubai. It’s 18 minutes from the Dubai International Airport and 15 minutes away from Burj Khalifa and Dubai Mall."
        />
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/hip.svg"
          title="Entrepreneurs Hip Made More Accessible"
          text="With DUQE’s competitive and flexible company setup packages, realising your dreams doesn’t have to cost a fortune."
        />
      </HStack>
      <HStack mt={24} spacing={24} align="flex-start">
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/holistic.svg"
          title="Holistic Support"
          text="We have a wide variety of growth services that cater to your every need as a business owner. Whether you need to apply for visas or open a bank account, DUQE can meet your needs."
        />
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/business_centre.svg"
          title="Business Center"
          text="Featuring state-of-the-art facilities and workspaces, DUQE is designed to give you the ideal platform for realising your vision and making things happen."
        />
        <Blurb
          img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/Society.svg"
          title="Duqe Society"
          text="Join a thriving community of entrepreneurs and founders, grinders and hustlers, who share the same unyielding drive and passion for the things they do."
        />
      </HStack>
    </SectionWrapper>
  )
}

export default Perks
