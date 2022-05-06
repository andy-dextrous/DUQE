import {
  Button,
  Center,
  Heading,
  Image,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react"
import React, { useContext, useEffect, useRef } from "react"
import CrossIcon from "../../../assets/icons/CrossIcon"
import SectionWrapper from "../../../components/SectionWrapper"
import { gsap, ScrollTrigger } from "../../../gsap"
import { DarkContext } from "../../../components/Layout"

function HowMuchDoesItCost({ darkActive, setDarkActive }) {
  const cross = useRef()
  const img = useRef()
  const { setIsDarkBackground } = useContext(DarkContext)
  const addLag = useBreakpointValue([false, false, true])
  useEffect(() => {
    if (!ScrollTrigger) return
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
        onStart: () => {
          gsap.set("#how-much-does-it-cost", {
            css: { overflow: "hidden" },
          })
        },
        onEnterBack: () => {
          gsap.set("#how-much-does-it-cost", {
            css: { overflow: "visibility", backgroundColor: "#e0db29" },
          })
        },
      },
    })
    tl.to(img.current, {
      scale: 4,
      ease: "linear",
      duration: 20,
      onComplete: () => {
        setDarkActive(true)
        setIsDarkBackground(true)
        gsap.set("#how-much-does-it-cost", {
          css: { backgroundColor: "#0b0b0b" },
        })
      },
    })
    tl.set(img.current, { autoAlpha: 0 })
  }, [setDarkActive, setIsDarkBackground])

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
          your business setup. It’s the number one question we get asked. <br />
          <strong>Find out in an instant.</strong>
        </Heading>
        <Button>Calculate Cost</Button>
      </VStack>
      <Center mt={[12, 12, 20]}>
        {" "}
        <Image
          h={["60vh", "60vh", "908px"]}
          src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650944008/DUQE/Calculator.png"
          ref={img}
          transformOrigin="center 30%"
          zIndex="2"
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
