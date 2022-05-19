import React from "react"
import { graphql } from "gatsby"

import SectionWrapper from "../../../components/SectionWrapper"
import QIcon from "../../../assets/icons/QIcon"
import { SmartLink } from "../../../components/SmartLink"
import { Button, Flex, Heading, Spacer, Stack, VStack } from "@chakra-ui/react"

export const query = graphql`
  fragment VISION_IMAGE on WpPage {
    acf_homepage {
      vision {
        image {
          ...IMAGE_DATA
        }
      }
    }
  }
`

function Vision({ props }) {
  const image = props.data.wpPage.acf_homepage.vision.image
  return (
    <SectionWrapper
      bgImage={image}
      h={["60vh", "60vh", "100vh"]}
      overlay
      containerSize="xl"
      zIndex="1"
    >
      <Flex h="full" w="full" align="center">
        <Spacer />
        <VStack w="50%" spacing={4} align="start">
          <Heading as="h3" className="thin-h3-caps">
            Do you have a vision the world needs to see?
          </Heading>
          <Stack
            direction={["column", "column", "row"]}
            w="full"
            spacing={[5, 5, 6]}
          >
            <SmartLink url="/contact-us">
              <Button minW="100px">Damn straight</Button>
            </SmartLink>
            <SmartLink url="/cost-calculator">
              <Button variant="outlineWhite" minW="100px">
                Not yet...
              </Button>
            </SmartLink>
          </Stack>
        </VStack>
      </Flex>
      <QIcon
        width={["80vw", "80vw", "44vw"]}
        height={["80vw", "80vw", "44vw"]}
        position="absolute"
        left={["-40vw", "-40vw", "100px"]}
        top={["calc(30vh - 40vw)", "30vh", "calc(50vh - 22vw)"]}
        color="#e0db2a"
        outline
        data-speed="1.2"
      />
    </SectionWrapper>
  )
}

export default Vision
