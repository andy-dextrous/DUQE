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
import { Link } from "gatsby"
import React, { useRef } from "react"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"
import "swiper/css"
import gsap from "gsap"

SwiperCore.use([Navigation])

function FullWColorSlider({ data, sliderHeight }) {
  const indexRef = useRef()
  const titleRef = useRef()
  const excerptRef = useRef()
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  const shouldAnimate = useBreakpointValue([false, false, true])

  function changeTitle(swiper) {
    if (!shouldAnimate) return
    function changeText(index) {
      excerptRef.current.innerHTML = data[swiper.activeIndex].excerpt
      titleRef.current.innerHTML = data[swiper.activeIndex].title
      indexRef.current.innerHTML = `0${(swiper.activeIndex + 1).toString()}`
    }
    const tl = gsap.timeline({ ease: "bounce" })
    tl.set(".animate", {
      autoAlpha: 0,
      onComplete: () => changeText(),
    })
      .fromTo(
        indexRef.current,
        {
          x: -50,
        },
        { x: 0, autoAlpha: 0.02, duration: 0.3, ease: "Power1.out" }
      )
      .fromTo(
        titleRef.current,
        {
          x: -50,
        },
        { x: 0, autoAlpha: 1, duration: 0.3, ease: "Power1.out" },
        "-=0.18"
      )
      .fromTo(
        excerptRef.current,
        {
          x: -50,
        },
        { x: 0, autoAlpha: 1, duration: 0.4, ease: "Power1.out" },
        "-=0.165"
      )
  }

  function getBgColor(slide) {
    let color
    switch (slide.bg) {
      case "green":
        color = "brandGreen.600"
        break
      case "yellow":
        color = "brandYellow.600"
        break
      case "chestnut":
        color = "brandChestnut.300"
        break
      case "blue":
        color = "brandBlue.900"
        break
      case "lightBlue":
        color = "brandBlue.400"
        break
      default:
        color = "brandGreen.600"
    }
    return color
  }

  return (
    <Grid
      templateColumns="repeat(10, 1fr)"
      templateRows={[
        "repeat(5, 1fr)",
        "repeat(5, 1fr)",
        `115px ${sliderHeight}vh 5rem`,
      ]}
      h="100%"
      w="100%"
    >
      <GridItem
        w="100%"
        h="100%"
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
            slidesPerView={1}
            centeredSlides
            className="hero-slider"
            onSlideChange={swiper => changeTitle(swiper)}
          >
            {data.map((slide, i) => {
              return (
                <SwiperSlide>
                  <Box
                    w="100vw"
                    h={["60vh", "60vh", `${sliderHeight}vh`]}
                    zIndex="1"
                    bg={getBgColor(slide)}
                  >
                    <Img
                      objectFit="contain"
                      src={slide.image}
                      alt="blah"
                      boxSize="100%"
                      position="absolute"
                      right={0}
                      top={0}
                      py={i === 2 ? 8 : i === 0 ? 20 : 0}
                    />

                    <VStack
                      spacing={6}
                      zIndex="20"
                      position="absolute"
                      right={0}
                      top={0}
                      h="100%"
                      w="100%"
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
                        {slide.subTitle}
                      </Heading>
                      <Heading
                        as="h1"
                        color="white"
                        fontSize={["5xl", "5xl"]}
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
        w="100%"
        h="100%"
        display={["none", "none", "flex"]}
        colStart={[1, 1, 1]}
        colEnd={[5]}
        rowStart={[1, 1, 2]}
        rowEnd={[6, 6, 3]}
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
            ml="9vw"
          >
            <Heading
              as="h4"
              fontSize={["lg", "lg", "xl"]}
              letterSpacing="wide"
              lineHeight="none"
              textAlign="center"
              fontWeight={"semibold"}
              color="brandGreen.500"
            >
              {data[0].subTitle}
            </Heading>
            <Heading
              fontSize={["lg", "2xl", "3xl", "3xl", "4xl"]}
              ref={titleRef}
              className="animate"
              color="brandYellow.500"
            >
              {data[0].title}
            </Heading>
            <Heading
              textStyle="fadeTextLeft"
              fontSize={["25vw", "25vw", "12vw"]}
              ref={indexRef}
              className="animate"
              opacity="0.02"
            >
              01
            </Heading>
            <Text ref={excerptRef} className="animate" color="white">
              {data[0].excerpt}
            </Text>
            <Link to="/about-us">
              <Button mt={6} variant="green" size={buttonSize}>
                Read More
              </Button>
            </Link>
          </VStack>
        )}
      </GridItem>
    </Grid>
  )
}

export default FullWColorSlider
