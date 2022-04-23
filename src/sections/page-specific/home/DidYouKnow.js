import React, { useRef } from "react"
import { graphql, Link } from "gatsby"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import {
  Button,
  Heading,
  Text,
  VStack,
  Stack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react"

export const query = graphql`
  fragment DID_YOU_KNOW_QUERY on WpPage {
    ACF_homepage_fields {
      engaged {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        imagemob {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

function DidYouKnow({ data }) {
  const bgImage = {
    desktop: data.engaged.image.localFile.childImageSharp.gatsbyImageData,
    mobile: data.engaged.imagemob.localFile.childImageSharp.gatsbyImageData,
  }

  const sectionRef = useRef()
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  const buttonColor = useBreakpointValue(["yellow", "yellow", "green"])

  return (
    <Box className="section">
      <SectionWrapper
        overlay={true}
        borderTopLeftRadius={["unset", "unset", "200"]}
        bgImage={bgImage}
        minH="100vh"
        useGatsbyImage={true}
        ref={sectionRef}
      >
        <Stack
          direction={["column", "column", "row"]}
          flex="1"
          align={["center", "center", "flex-start"]}
          spacing={12}
          height="100%"
        >
          <VStack
            spacing={[3, 3, 3, 3, 6, 6]}
            py={4}
            align={["center", "center", "start"]}
            position="relative"
            flex={["1", "1", "3"]}
            textAlign={["center", "center", "left"]}
            maxW={["container.lg", "container.lg", "container.sm"]}
          >
            <Heading
              fontSize={["4xl", "5xl", "55px", "55px", "55px", "65px"]}
              color="white"
            >
              Did you know?
            </Heading>
            <Heading
              textStyle="fadeTextLeft"
              fontSize={["25vw", "25vw", "12vw"]}
              opacity="0.3"
            >
              06
            </Heading>

            <Text
              color="white"
              maxW={["unset", "unset", "40vw"]}
              fontSize="lg"
              fontWeight="medium"
            >
              Companies with highly engaged people outperform firms with the
              most disengaged folks by 54% in employee retention, by 89% in
              customer satisfaction, and by fourfold in revenue growth.
            </Text>
            <Link to="/insights">
              <Button variant={buttonColor} size={buttonSize}>
                Read articles
              </Button>
            </Link>
          </VStack>
        </Stack>
      </SectionWrapper>
    </Box>
  )
}

export default DidYouKnow
