import React, { useRef, useEffect } from "react"
import SectionWrapper from "../../components/layouts/SectionWrapper"
import { SplitText, gsap, ScrollTrigger } from "../../gsap"
import { Container, VStack, Flex, Box } from "@chakra-ui/react"
import ParseWpContent from "../../utils/ParseWpContent"

function Content({ data, width = "lg" }) {
  const splitRef1 = useRef()

  useEffect(() => {
    if (!ScrollTrigger) return
    const splits = new SplitText(splitRef1.current, {
      type: "chars",
      charsClass: "fadeTextCenter",
    })

    gsap.set(splits.chars, { opacity: 0 })
    const fadeIn = gsap.fromTo(
      splits.chars,
      {
        duration: 0.6,
        y: 80,
      },
      {
        ease: "circ.out",
        stagger: 0.06,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: splitRef1.current,
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      }
    )
    return () => {
      fadeIn.kill()
    }
  }, [])

  return (
    <SectionWrapper minH="unset" position="relative">
      <Container h="100%" maxW={`container.${width}`}>
        {data && (
          <VStack align="start" justify="start" spacing={8}>
            {data.featuredWord && (
              <Flex textStyle="fadeTextCenter" ref={splitRef1}>
                {data.featuredWord}
              </Flex>
            )}
            <Box className="wsywyg">{ParseWpContent(data.content)}</Box>
          </VStack>
        )}
      </Container>
    </SectionWrapper>
  )
}

export default Content
