import React, { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "../../../gsap"

import CrossIcon from "../../../assets/icons/CrossIcon"
import SectionWrapper from "../../../components/SectionWrapper"
import { Link } from "gatsby"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Select,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"

function HowMuchDoesItCost() {
  const cross = useRef()
  const img = useRef()
  const button = useRef()
  const content = useRef()
  const animation = useRef(null)
  const addLag = useBreakpointValue([false, false, true])

  useEffect(() => {
    console.log("here")
    if (!ScrollTrigger || animation.current !== null) return
    const contentDimensions = content.current.getBoundingClientRect()
    const left = window.innerWidth / 2 - contentDimensions.width / 2
    const bottom = window.innerHeight / 2 - contentDimensions.height / 2
    const imgWidth = img.current.getBoundingClientRect()
    const scale = window.innerWidth / (imgWidth.width * 0.9)

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
        trigger: "#how-much-does-it-cost",
        start: "bottom bottom",
        pin: true,
        end: "+=100%",
        scrub: true,
        onEnter: () => {
          gsap.set("#how-much-does-it-cost", { overflow: "hidden" })
        },
        onLeaveBack: () => {
          gsap.set("#how-much-does-it-cost", { overflow: "visible" })
        },
      },
    })
    tl.to(img.current, {
      scale: scale,
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
        duration: 5,
        ease: "power2.in",
      }
    )
    tl.to(button.current, { autoAlpha: 0, delay: 10 })
    animation.current = tl
  }, [])

  return (
    <SectionWrapper
      bg="brandYellow.default"
      id="how-much-does-it-cost"
      className="light"
      containerSize="lg"
      pb={0}
      containerStyles={{ py: 0, pt: [20, 20, 6, 8, 60] }}
      zIndex="1"
    >
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
        <Heading color="white">
          How long do you want to license your business?
        </Heading>
        <Stack direction={["column", "column", "row"]} w="full">
          <VStack align={["flex-start", "flex-start", "center"]} w="full">
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
    </SectionWrapper>
  )
}

export default HowMuchDoesItCost
