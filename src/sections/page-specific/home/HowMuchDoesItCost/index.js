import React, { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "../../../../gsap"

import CrossIcon from "../../../../assets/icons/CrossIcon"
import { Link } from "gatsby"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
  Button,
  Center,
  Heading,
  Image,
  VStack,
  useBreakpointValue,
  Text,
  Stack,
  HStack,
  Select,
} from "@chakra-ui/react"
import SectionWrapperCustom from "./SectionWrapperCustom"

function HowMuchDoesItCost() {
  const cross = useRef()
  const img = useRef(null)
  const button = useRef()
  const content = useRef()
  const animation = useRef(null)
  const section = useRef()
  const addLag = useBreakpointValue([false, false, true])

  useEffect(() => {
    ScrollTrigger.refresh()
    if (animation.current !== null) return
    const contentDimensions = content.current.getBoundingClientRect()
    const left = window.innerWidth / 2 - contentDimensions.width / 2
    const bottom = window.innerHeight / 2 - contentDimensions.height / 2

    gsap.to(cross.current, {
      rotation: -50,
      ease: "linear",
      scrollTrigger: {
        trigger: cross.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: "bottom bottom",
        pin: true,
        end: "+=100%",
        scrub: true,
        onEnter: () => {
          gsap.set(section.current, { overflow: "hidden" })
        },
        onLeaveBack: () => {
          gsap.set(section.current, { overflow: "visible" })
        },
      },
    })
    tl.to(img.current, {
      scale: 5,
      ease: "linear",
      duration: 20,
    })
    tl.set(content.current, { left: left, bottom: bottom })
    tl.fromTo(
      content.current,
      {
        autoAlpha: 0,
        scale: 0,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 7,
        ease: "power2.in",
      }
    )
    tl.to(button.current, { autoAlpha: 0, delay: 10 })
    animation.current = tl
  }, [])

  return (
    <SectionWrapperCustom ref={section}>
      <VStack spacing={[8, 8, 12]}>
        <Heading className="jumbo" textAlign="center">
          How much does it cost?
        </Heading>
        <Heading as="h3" className="thin-h3" textAlign="center">
          Use the <strong>DUQE Cost Calculator</strong> to find out the cost of
          your business setup.
          <Text as="br" display={["none", "none", "block"]} /> It’s the number
          one question we get asked. <br />
          <strong>Find out in an instant.</strong>
        </Heading>
        <Link to="/cost-calculator">
          <Button ref={button}>Calculate Cost</Button>
        </Link>
      </VStack>
      <VStack
        spacing={12}
        w="full"
        ref={content}
        visibility="hidden"
        zIndex="20"
        position="absolute"
      >
        <Heading color="white" textAlign={["center", "center", "left"]}>
          How long do you want to license your business?
        </Heading>
        <Stack direction={["column", "column", "row"]} w="full">
          <VStack align={["center", "center", "center"]} w="full">
            <Heading color="white" as="h6">
              Select the duration of your license
            </Heading>
            <HStack>
              <Select variant="filled" size="md" _focus={{ bg: "white" }}>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
              </Select>
              <Link to="/cost-calculator">
                <Button w="200px" h="100%" rightIcon={<ArrowForwardIcon />}>
                  Continue
                </Button>
              </Link>
            </HStack>
          </VStack>
        </Stack>
      </VStack>
      <Center mt={[12, 12, 20]}>
        <Image
          h={["60vh", "60vh", "908px"]}
          w={["100%", "100%", "614px"]}
          src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650944008/DUQE/Calculator.png"
          ref={img}
          transformOrigin="center 30%"
          zIndex="2"
          transform="translateY(1px)"
        />
      </Center>

      <CrossIcon
        position="absolute"
        width={["100px", "100px", "500px"]}
        height={["100px", "100px", "500px"]}
        top={["-50px", "-50px", "-250px"]}
        right={["-50px", "-50px", "-250px"]}
        zIndex="1"
        color="dark.default"
        data-speed={addLag ? "1.1" : 1}
        ref={cross}
      />
    </SectionWrapperCustom>
  )
}

export default HowMuchDoesItCost
