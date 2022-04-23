import React, { useRef } from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Autoplay } from "swiper"
import "swiper/css"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Button,
  VStack,
  Text,
  HStack,
  IconButton,
  useBreakpointValue,
  Img,
} from "@chakra-ui/react"

SwiperCore.use([Navigation, Autoplay])
gsap.registerPlugin(SplitText)

function FullWImageSlider({ data, sliderHeight }) {
  const indexRef = useRef()
  const titleRef = useRef()
  const subTitleRef = useRef()
  const excerptRef = useRef()
  const buttonRef = useRef()
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  const shouldAnimate = useBreakpointValue([false, false, true])

  function changeTitle(swiper) {
    if (!shouldAnimate) return

    excerptRef.current.innerHTML = data[swiper.activeIndex].excerpt
    titleRef.current.innerHTML = data[swiper.activeIndex].title
    subTitleRef.current.innerHTML = data[swiper.activeIndex].subtitle
    indexRef.current.innerHTML = `0${(swiper.activeIndex + 1).toString()}`

    const titleSplit = new SplitText(titleRef.current, {
      type: "lines,words",
      linesClass: "titleReveal",
      wordsClass: "word-wrap",
    })

    const indexSplit = new SplitText(indexRef.current, {
      type: "lines,chars",
    })

    const subTitleSplit = new SplitText(subTitleRef.current, {
      type: "lines,words",
      linesClass: "titleReveal",
      wordsClass: "word-wrap",
    })

    const excerptSplit = new SplitText(excerptRef.current, {
      type: "lines",
      linesClass: "titleReveal",
    })

    const tl = gsap.timeline()
    tl.from(indexSplit.chars, {
      y: 300,
      stagger: 0.12,
      ease: "Power3.out",
      duration: 0.65,
      opacity: 0,
    })
    tl.from(
      subTitleSplit.words,
      {
        y: 40,
        ease: "Power3.out",
        duration: 0.2,
      },
      0.39
    )
    tl.from(
      titleSplit.words,
      {
        y: 40,
        ease: "Power3.out",
        duration: 0.2,
      },
      0.7
    )
    tl.from(
      excerptSplit.lines,
      {
        opacity: 0,
        y: 20,
        ease: "Power3.out",
        duration: 1,
      },
      0.8
    )

    tl.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 20,
        ease: "Power3.out",
      },
      { opacity: 1, y: 0 },
      0.95
    )
  }

  return (
    <Grid
      templateColumns="repeat(10, 1fr)"
      templateRows={[
        "repeat(5, 1fr)",
        "repeat(5, 1fr)",
        `115px ${sliderHeight}vh 5rem`,
      ]}
      layerStyle="fillSpace"
    >
      <GridItem
        layerStyle="fillSpace"
        colStart={[1, 1, 5]}
        colEnd={[11]}
        rowStart={[1, 1, 2]}
        rowEnd={[6, 6, 3]}
        borderLeftRadius={[0, 0, "50px"]}
        overflow="hidden"
      >
        <Box position="relative">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            centeredSlides
            className="hero-slider"
            onSlideChange={swiper => changeTitle(swiper)}
          >
            {data.map(slide => {
              return (
                <SwiperSlide>
                  <Box
                    w="100vw"
                    h={["60vh", "60vh", `${sliderHeight}vh`]}
                    zIndex="1"
                  >
                    <Img
                      objectFit="cover"
                      src={slide.image}
                      alt="blah"
                      boxSize="100%"
                      position="absolute"
                      right={0}
                      top={0}
                    />
                    <Box
                      layerStyle="overlay"
                      zIndex="10"
                      display={["block", "block", "none"]}
                    />
                    <VStack
                      spacing={6}
                      zIndex="20"
                      layerStyle="fillSpaceAbsolute"
                      justify="center"
                      display={["flex", "flex", "none"]}
                    >
                      <Heading
                        as="h4"
                        color="white"
                        fontSize={["lg", "lg", "xl"]}
                        fontWeight={["normal", "medium", "light"]}
                        letterSpacing="wide"
                        lineHeight="none"
                        textAlign="center"
                      >
                        {slide.subtitle}
                      </Heading>
                      <Heading
                        as="h1"
                        color="white"
                        fontSize={["3xl", "3xl"]}
                        lineHeight="none"
                        textAlign="center"
                        pb={0}
                      >
                        {slide.title}
                      </Heading>
                    </VStack>
                  </Box>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <HStack
            position="absolute"
            align="center"
            justify="center"
            w={["30vw", "30vw", "auto"]}
            zIndex="10"
            bottom={[20, 14, 6]}
            right={[6, 6, "unset"]}
            left={["unset", "unset", 6]}
          >
            <IconButton
              icon={<FaChevronLeft />}
              className="swiper-button-prev"
              opacity="0.6"
              size="md"
              bg="white"
            />
            <IconButton
              icon={<FaChevronRight />}
              className="swiper-button-next"
              opacity="0.5"
              size="md"
              bg="white"
            />
          </HStack>
          <Box
            position="absolute"
            display={["block", "block", "none"]}
            bg="white"
            left={0}
            bottom={"-2px"}
            w="100vw"
            h="5vh"
            px="9%"
            py={3}
            roundedTop={"25px"}
            zIndex="20"
          ></Box>
        </Box>
      </GridItem>
      <GridItem
        layerStyle="fillSpace"
        display={["none", "none", "block"]}
        colStart={[1, 1, 1]}
        colEnd={[5]}
        rowStart={[1, 1, 2]}
        rowEnd={[6, 6, 3]}
        display="flex"
      >
        {data && (
          <VStack
            spacing={3}
            py={4}
            align="start"
            justify="center"
            position="relative"
            w="60%"
            m="auto"
            display={["none", "none", "block"]}
          >
            <Heading
              as="h4"
              textStyle="h4"
              fontSize="16px"
              fontWeight="semibold"
              ref={subTitleRef}
            >
              {data[0].subtitle}
            </Heading>
            <Heading
              fontSize={["2xl", "3xl", "3xl", "3xl", "4xl"]}
              ref={titleRef}
              className="animate"
            >
              {data[0].title}
            </Heading>
            <Heading
              textStyle="fadeTextLeft"
              fontSize={["25vw", "25vw", "12vw"]}
              ref={indexRef}
              className="animate"
            >
              01
            </Heading>
            <Text ref={excerptRef} className="animate">
              {data[0].excerpt}
            </Text>
            <Link to="/services">
              <Button
                ref={buttonRef}
                className="animate"
                variant="green"
                size={buttonSize}
                mt={6}
              >
                All services
              </Button>
            </Link>
          </VStack>
        )}
      </GridItem>
    </Grid>
  )
}

export default FullWImageSlider
