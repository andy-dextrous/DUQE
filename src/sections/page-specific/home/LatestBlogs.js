import { Button, Heading, Stack, StackDivider, VStack } from "@chakra-ui/react"
import React, { useEffect, useRef } from "react"
import DIcon from "../../../assets/icons/DIcon"
import HomeBlogCard from "../../../components/archive/HomeBlogCard"
import SectionWrapper from "../../../components/SectionWrapper"
import { SmartLink } from "../../../components/SmartLink"
import { gsap, ScrollTrigger } from "../../../gsap"

function LatestBlogs() {
  const dShape = useRef()
  useEffect(() => {
    if (!ScrollTrigger) return
    gsap.to(dShape.current, {
      x: 100,
      y: -40,
      rotation: -40,
      ease: "linear",
      scrollTrigger: {
        trigger: dShape.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])

  return (
    <SectionWrapper bg="dark.default" containerSize="xl">
      <Stack direction="row" spacing={40}>
        <VStack spacing={12} align="start" flex="1">
          <Heading className="jumbo" color="white">
            From the blog
          </Heading>
          <Heading as="h3" className="thin-h3" color="white">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Heading>
          <SmartLink url="/blog">
            <Button>View All</Button>
          </SmartLink>
        </VStack>
        <VStack
          flex="1"
          divider={<StackDivider borderColor="dark.800" />}
          spacing={12}
        >
          <HomeBlogCard startVisible />
          <HomeBlogCard />
          <HomeBlogCard />
        </VStack>
      </Stack>
      <DIcon
        color="#e0db2a"
        height="50vw"
        width="50vw"
        opacity="0.5"
        outline
        position="absolute"
        left="-10%"
        top="5%"
        ref={dShape}
      />
    </SectionWrapper>
  )
}

export default LatestBlogs
