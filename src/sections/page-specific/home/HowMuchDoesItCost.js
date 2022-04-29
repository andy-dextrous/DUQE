import { Button, Center, Heading, Image, VStack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"

function HowMuchDoesItCost() {
  return (
    <SectionWrapper
      bg="brandYellow.default"
      className="light"
      containerSize="lg"
      pb={0}
      containerStyles={{ py: 0, pt: [2, 4, 6, 8, 60] }}
      zIndex="1"
    >
      <VStack spacing={12}>
        <Heading className="jumbo" textAlign="center">
          How much does it cost?
        </Heading>
        <Heading as="h3" className="thin-h3" textAlign="center">
          Use the <strong>DUQE Cost Calculator</strong> to find out the cost of
          your business setup. It’s the number one question we get asked. <br />
          <strong>Find out in an instant.</strong>
        </Heading>
        <Button>Calculate Cost</Button>
      </VStack>
      <Center mt={20}>
        {" "}
        <Image
          h="908px"
          src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650944008/DUQE/Calculator.png"
        />
      </Center>

      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650944885/DUQE/cross.svg"
        position="absolute"
        top="-210px"
        right="0"
        zIndex="1"
      />
    </SectionWrapper>
  )
}

export default HowMuchDoesItCost
