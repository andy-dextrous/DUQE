import {
  Button,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import React, { useRef } from "react"
import { gsap } from "../../gsap"

function HomeBlogCard({ startVisible = false }) {
  const animateOnMobile = useBreakpointValue([false, false, true])
  const image = useRef()
  const container = useRef()
  const throttleX = 0.2
  const throttleY = 0.8

  const onEnter = () => {
    if (!animateOnMobile) return
    gsap.to(image.current, {
      opacity: 0.6,
      duration: 0.2,
    })
  }

  const onMove = ({ clientX, clientY }) => {
    if (!animateOnMobile) return
    const { x, y, width, height } = image.current.getBoundingClientRect()

    gsap.to(image.current, {
      x: () => {
        return clientX - x - (width / 2) * throttleX
      },
      y: () => {
        return clientY - y - (height / 2) * throttleY
      },
      rotate: () => {
        return (clientX - x - width / 2) / 100
      },
      onInterrupt: () => onLeave(),
      duration: 0.7,
    })
  }

  const onLeave = () => {
    if (!animateOnMobile) return
    gsap.to(image.current, {
      x: 0,
      y: 0,
      duration: 0.3,
      delay: 0.2,
      rotate: 0,
      opacity: 0,
    })
  }
  return (
    <VStack
      spacing={4}
      align="start"
      width="100%"
      position="relative"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onPointerEnter={onEnter}
      ref={container}
    >
      <Text
        color="white"
        fontWeight="bold"
        textTransform="uppercase"
        zIndex="1"
      >
        18 Apr,2022
      </Text>
      <Heading as="h4" color="white" textTransform="unset" zIndex="1">
        Can Brits do business in Dubai, UAE?
      </Heading>
      <Text color="white" zIndex="1">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </Text>
      <Button variant="secondary" size="sm">
        Read more
      </Button>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,h_300,q_auto/v1650858611/DUQE/DUQE_Hero.jpg"
        position="absolute"
        left={[0, 0, "-5%"]}
        top={["-15%", "-15%", "-25%"]}
        bottom="0"
        height={["80%", "80%", "150%"]}
        maxW={["100%", "100%", "60%"]}
        objectFit="cover"
        py={2}
        zIndex="0"
        opacity={[0.6, 0.6, startVisible ? "0.6" : "0"]}
        mt={0}
        ref={image}
      />
    </VStack>
  )
}

export default HomeBlogCard
