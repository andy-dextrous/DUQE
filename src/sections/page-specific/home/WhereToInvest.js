import React, { useContext, useEffect, useRef } from "react"
import { SplitText, gsap } from "../../../gsap"
import { CurrentSectionContext } from "../../../components/Layout"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import { Heading, VStack, Text, Box, Stack, Center } from "@chakra-ui/react"

function WhereToInvest() {
  const { currentSection } = useContext(CurrentSectionContext)
  const scene1Text = useRef()
  const scene2Text = useRef()
  const scene3Text = useRef()
  const subTitleRef = useRef()
  const titleRef = useRef()
  const greenBarRef = useRef()
  const yellowBarRef = useRef()
  const blueBarRef = useRef()
  const scene3TitleRef = useRef()
  const scene3SubTitleRef = useRef()
  //Store SplitTexts in Refs to avoid re-rendering
  let titleSplit = useRef(null)
  let subTitleSplit = useRef(null)
  let scene2TextSplit = useRef(null)
  let scene3TitleSplit = useRef(null)
  let scene3SubTitleSplit = useRef(null)
  let masterTimeline = useRef(null)

  //Prepare DOM for animation
  useEffect(() => {
    gsap.set([scene2Text.current, scene3Text.current], {
      css: { display: "none" },
    })
    gsap.set([greenBarRef.current], {
      width: 0,
      right: 0,
      transformOrigin: "top right",
      autoAlpha: 0,
    })

    if (!titleSplit.current) {
      titleSplit.current = new SplitText(titleRef.current, {
        type: "chars,lines",
        linesClass: "titleReveal",
      })
    }

    if (!subTitleSplit.current) {
      subTitleSplit.current = new SplitText(subTitleRef.current, {
        type: "chars,lines",
        linesClass: "titleReveal",
      })
    }

    const q = gsap.utils.selector(scene2Text.current)
    if (!scene2TextSplit.current) {
      scene2TextSplit.current = new SplitText(q("h2"), {
        type: "chars,lines",
        linesClass: "titleReveal",
      })
    }

    if (!scene3TitleSplit.current) {
      scene3TitleSplit.current = new SplitText(scene3TitleRef.current, {
        type: "chars,lines",
        linesClass: "titleReveal",
      })
    }

    if (!scene3SubTitleSplit.current) {
      scene3SubTitleSplit.current = new SplitText(scene3SubTitleRef.current, {
        type: "chars,lines",
        linesClass: "titleReveal",
      })
    }

    gsap.set(
      [
        titleSplit.current.chars,
        subTitleSplit.current.chars,
        scene2TextSplit.current.lines,
        scene3TitleSplit.current.chars,
        scene3SubTitleSplit.current.chars,
      ],
      {
        autoAlpha: 0,
      }
    )
  }, [])

  //Execute timelines
  useEffect(() => {
    if (masterTimeline.current) return
    function scene1() {
      const scene1 = gsap.timeline({ defaults: { ease: "back.out" } })
      scene1
        .to(subTitleSplit.current.chars, {
          autoAlpha: 1,
          stagger: 0.04,
          duration: 0.1,
        })
        .to(titleSplit.current.chars, {
          autoAlpha: 1,
          stagger: 0.07,
          duration: 0.2,
        })

      return scene1
    }
    function scene2() {
      const scene2 = gsap.timeline({ delay: 0.5 })
      const get = gsap.utils.selector(scene2Text.current)
      scene2
        .set(get("h4"), { autoAlpha: 0 })
        .set(scene1Text.current, { css: { display: "none" } })
        .set(scene2Text.current, { css: { display: "flex" } })
        .to(scene2TextSplit.current.lines[0], { autoAlpha: 1, duration: 0.8 })
        .to(
          greenBarRef.current,
          { width: "20%", ease: "circ.out", duration: 0.8, autoAlpha: 1 },
          "-=0.8"
        )
        .to(scene2TextSplit.current.lines[1], { autoAlpha: 1, duration: 0.8 })
        .to(
          greenBarRef.current,
          { width: "40%", ease: "circ.out", duration: 0.8 },
          "-=0.8"
        )
        .to(scene2TextSplit.current.lines[2], { autoAlpha: 1, duration: 0.8 })
        .to(
          greenBarRef.current,
          { width: "60%", ease: "circ.out", duration: 0.8 },
          "-=0.8"
        )
        .to(scene2TextSplit.current.lines[3], { autoAlpha: 1, duration: 0.8 })
        .to(
          greenBarRef.current,
          { width: "80%", ease: "circ.out", duration: 0.8 },
          "-=0.8"
        )
        .to(scene2TextSplit.current.lines[4], { autoAlpha: 1, duration: 0.8 })
        .to(
          greenBarRef.current,
          { width: "95%", ease: "circ.out", duration: 0.8 },
          "-=0.8"
        )
      return scene2
    }
    function scene3() {
      const scene3 = gsap.timeline()
      scene3
        .set(scene2Text.current, { delay: 0.8, css: { display: "none" } })
        .set(scene3Text.current, { css: { display: "flex" } })
        .to(scene3SubTitleSplit.current.chars, {
          autoAlpha: 1,
          stagger: 0.04,
          duration: 0.1,
        })
        .to(scene3TitleSplit.current.chars, {
          autoAlpha: 1,
          stagger: 0.07,
          duration: 0.2,
        })
        .to(yellowBarRef.current, {
          width: "25%",
          ease: "back.out",
          duration: 0.5,
        })
        .to(greenBarRef.current, {
          width: "60%",
          ease: "back.out",
          duration: 0.8,
        })
      return scene3
    }

    const master = gsap.timeline({ repeat: -1, repeatDelay: 3, paused: true })
    master.add(scene1())
    master.add(scene2())
    master.add(scene3())
    masterTimeline.current = master
  }, [])

  useEffect(() => {
    if (currentSection === 4) {
      masterTimeline.current.play()
    }
    if (!masterTimeline.current._ps && currentSection !== 4) {
      masterTimeline.current.restart()
      masterTimeline.current.pause()
    }
  }, [currentSection, masterTimeline])

  return (
    <Box className="section">
      <SectionWrapper
        bg="brandGreen.600"
        height="100vh"
        fullW
        overflow="hidden"
        borderTopLeftRadius={["unset", "unset", "200"]}
        sx={{
          ".titleReveal": {
            pb: ["8px", "8px", "8px", "8px", "12px", "12px"],
          },
        }}
      >
        <Stack
          direction={["column", "column", "row"]}
          width={["full"]}
          height="full"
          bg="brandBlue.900"
          align="center"
          wrap="nowrap"
          pt={[16, 16, "unset"]}
          spacing={[0, 0, 16, 16, 10, 32]}
        >
          <Center
            py={4}
            align="start"
            flex="1"
            h={["40vh", "40vh", "100%"]}
            pl={["unset", "unset", "9%"]}
          >
            {/* Scene1 Text */}
            <VStack
              spacing={3}
              py={4}
              px={4}
              align={["center", "center", "start"]}
              justify="center"
              position="relative"
              flex={["1", "1", "1"]}
              textAlign={["center", "center", "left"]}
              ref={scene1Text}
              h={["40vh", "40vh", "100%"]}
            >
              <Heading
                as="h4"
                textStyle="h4"
                fontSize="lg"
                color="brandYellow.500"
                ref={subTitleRef}
              >
                As a business owner
              </Heading>
              <Heading
                fontSize={["4xl", "4xl", "2xl", "2xl", "5xl", "6xl"]}
                fontWeight={[
                  "bold",
                  "bold",
                  "bold",
                  "bold",
                  "bold",
                  "extrabold",
                ]}
                color="white"
                ref={titleRef}
              >
                70% of your
                <Text as="span" color="white" display="block">
                  {" "}
                  costs are
                </Text>
                <Text as="span" color="brandGreen.500" display="block">
                  {" "}
                  staff-related
                </Text>
              </Heading>
            </VStack>
            {/* Scene 2 Text */}
            <VStack
              spacing={3}
              py={4}
              align={["center", "center", "start"]}
              position="relative"
              flex={["1", "1", "1"]}
              justify="center"
              textAlign={["center", "center", "left"]}
              ref={scene2Text}
              h={["40vh", "40vh", "100%"]}
            >
              <Heading
                as="h4"
                textStyle="h4"
                fontSize="lg"
                color="brandYellow.500"
              >
                Sound Familar?
              </Heading>
              <Heading
                fontSize={{ base: "lg", xl: "2xl" }}
                fontWeight={[
                  "bold",
                  "bold",
                  "bold",
                  "bold",
                  "bold",
                  "extrabold",
                ]}
                color="white"
                lineHeight="2.5"
              >
                High turnover
              </Heading>
              <Heading
                fontSize={{ base: "lg", xl: "2xl" }}
                fontWeight={[
                  "bold",
                  "bold",
                  "bold",
                  "bold",
                  "bold",
                  "extrabold",
                ]}
                color="white"
                lineHeight="2.5"
              >
                Don’t want to come to the office
              </Heading>{" "}
              <Heading
                fontSize={{ base: "lg", xl: "2xl" }}
                fontWeight={[
                  "bold",
                  "bold",
                  "bold",
                  "bold",
                  "bold",
                  "extrabold",
                ]}
                color="white"
                lineHeight="2.5"
              >
                Getting better offers
              </Heading>
              <Heading
                fontSize={{ base: "lg", xl: "2xl" }}
                fontWeight={[
                  "bold",
                  "bold",
                  "bold",
                  "bold",
                  "bold",
                  "extrabold",
                ]}
                color="white"
                lineHeight="2.5"
              >
                Not that productive
              </Heading>
              <Heading
                fontSize={{ base: "lg", xl: "2xl" }}
                fontWeight={[
                  "bold",
                  "bold",
                  "bold",
                  "bold",
                  "bold",
                  "extrabold",
                ]}
                color="white"
                lineHeight="2.5"
              >
                Not reliable
              </Heading>
            </VStack>
            {/* Scene3 Text */}
            <VStack
              spacing={3}
              py={4}
              align={["center", "center", "start"]}
              position="relative"
              flex={["1", "1", "1"]}
              textAlign={["center", "center", "left"]}
              minW={["100vw", "100vw", "unset"]}
              ref={scene3Text}
              h={["40vh", "40vh", "100%"]}
              justify="center"
            >
              <Heading
                as="h4"
                textStyle="h4"
                fontSize="lg"
                color="brandYellow.500"
                ref={scene3SubTitleRef}
              >
                Our solution?
              </Heading>
              <Heading
                fontSize={["4xl", "4xl", "2xl", "2xl", "5xl", "6xl"]}
                fontWeight={[
                  "bold",
                  "bold",
                  "bold",
                  "bold",
                  "bold",
                  "extrabold",
                ]}
                color="white"
                ref={scene3TitleRef}
                width={["full", "full", "82%", "82%", "82%", "95%"]}
              >
                <Text as="span" display="block" color="white">
                  Invest in your
                </Text>
                <Text as="span" display="block" color="white">
                  office to save
                </Text>
                <Text as="span" color="brandGreen.500" display="block">
                  on staffing
                </Text>
              </Heading>
            </VStack>
          </Center>
          <VStack
            flex="2"
            spacing={6}
            align="flex-end"
            minW={["100vw", "100vw", "unset"]}
            h={["60vh", "60vh", "unset"]}
          >
            <Box
              h={["70px", "70px", "100px"]}
              w="100%"
              bg="brandGreen.600"
              position="relative"
              roundedLeft="full"
              ref={greenBarRef}
              _before={{
                content: "'Staffing costs'",
                color: "white",
                fontWeight: "medium",
                h: "100%",
                w: "150px",
                position: "absolute",
                left: "-150px",
                top: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Center
                bg="white"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                rounded="full"
              >
                <Heading as="h4" fontSize="20px" fontWeight="semibold">
                  70%
                </Heading>
              </Center>
            </Box>
            <Box
              h={["70px", "70px", "100px"]}
              w="20%"
              bg="brandYellow.600"
              position="relative"
              roundedLeft="full"
              ref={yellowBarRef}
              _before={{
                content: "'Office Expenses'",
                color: "white",
                fontWeight: "medium",
                h: "100%",
                w: "150px",
                position: "absolute",
                left: "-150px",
                top: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Center
                bg="white"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                rounded="full"
              >
                <Heading as="h4" fontSize="20px" fontWeight="semibold">
                  10%
                </Heading>
              </Center>
            </Box>
            <Box
              h={["70px", "70px", "100px"]}
              w="30%"
              bg="brandBlue.400"
              position="relative"
              roundedLeft="full"
              ref={blueBarRef}
              _before={{
                content: "'Other'",
                color: "white",
                fontWeight: "medium",
                h: "100%",
                w: "100px",
                position: "absolute",
                left: "-100px",
                top: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Center
                bg="white"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                rounded="full"
              >
                <Heading as="h4" fontSize="20px" fontWeight="semibold">
                  20%
                </Heading>
              </Center>
            </Box>
          </VStack>
        </Stack>
      </SectionWrapper>
    </Box>
  )
}

export default WhereToInvest
