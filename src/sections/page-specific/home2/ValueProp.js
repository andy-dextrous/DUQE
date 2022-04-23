import React from "react"
import { graphql } from "gatsby"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import Content from "../../../components/Content"
import { Box } from "@chakra-ui/react"

export const query = graphql`
  fragment USP_QUERY on WpPage {
    ACF_homepage_fields {
      usp {
        content
        featuredWord
      }
    }
  }
`

function ValueProp({ data }) {
  return (
    <SectionWrapper
      minH="60vh"
      className="dark-bg"
      pb={{ base: 20, xl: "0" }}
      bg="brandBlue.900"
    >
      <Box zIndex="20" py={[0, 0, 20]} mt={[0, 0, 20]}>
        <Box w="100%" h="100%" pt={0} pb={0} zIndex="20">
          <Box position="relative" w="100%" zIndex="20">
            <Content
              theme="blue"
              content={data.usp.content}
              featuredWord={data.usp.featuredWord}
              width="lg"
              buttonText="Book a free consultation"
              link="/contact-us"
              top={["-5%", "-5%", "-50px", "0", "-40%", "-50%"]}
            />
          </Box>
        </Box>
      </Box>
    </SectionWrapper>
  )
}

export default ValueProp
