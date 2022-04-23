import React, { useRef, useEffect } from "react"
import { gsap, SplitText, ScrollTrigger } from "../../gsap"
import { graphql, Link } from "gatsby"
import SectionWrapper from "../../components/layouts/SectionWrapper"

import {
  Container,
  VStack,
  Box,
  Button,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react"

export const query = graphql`
  fragment CONTENT_NARROW_QUERY on WpPage {
    ACF_ContentNarrow {
      contentNarrow {
        content
        featuredWord
      }
    }
  }
`

function ContentNarrow({
  data,
  theme,
  link,
  buttonText,
  width = "md",
  ...props
}) {
  const splitRef1 = useRef()
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  const {
    contentNarrow: { content, featuredWord },
  } = data
  const wordSplit = useRef(null)

  useEffect(() => {
    if (ScrollTrigger) {
      if (!wordSplit.current) {
        wordSplit.current = new SplitText(splitRef1.current, {
          type: "chars",
          charsClass: "fadeTextCenter",
        })
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitRef1.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            console.log("enter")
          },
        },
      })

      tl.fromTo(
        wordSplit.current.chars,
        {
          duration: 0.6,
          y: 80,
          autoAlpha: 0,
        },
        {
          ease: "circ.out",
          stagger: 0.06,
          autoAlpha: 1,
          y: 0,
        }
      )

      return () => {
        tl.kill()
      }
    }
  }, [])

  return (
    <SectionWrapper minH="unset" position="relative" {...props}>
      <Container h="100%" maxW={`container.${width}`}>
        {data && (
          <VStack align="start" justify="start" spacing={8}>
            {featuredWord && (
              <Flex
                textStyle="fadeTextCenter"
                color="brandGreen.200"
                ref={splitRef1}
              >
                {featuredWord}
              </Flex>
            )}
            <Box className="wsywyg">
              <Box dangerouslySetInnerHTML={{ __html: content }} />
              {link && (
                <Link to={link}>
                  <Button variant={theme} size={buttonSize}>
                    {buttonText}
                  </Button>
                </Link>
              )}
            </Box>
          </VStack>
        )}
      </Container>
    </SectionWrapper>
  )
}

export default ContentNarrow
