import React from "react"
import SectionWrapper from "../../components/layouts/SectionWrapper"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react"

SwiperCore.use([Navigation, Pagination])

const data = [
  "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto:good,w_1200/v1642400471/Tactic-Spaces.jpg",
  "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto:eco,w_1080/v1641470265/HERO_10.jpg",
  "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto:eco,w_1080/v1641470259/yemanja-brut-offices-archello.1638891699.849.jpg",
]

function TestimonialSlider() {
  const [swiperInstance, setSwiperInstance] = React.useState()

  function handleClick() {
    swiperInstance.slideNext()
  }

  return (
    <>
      <SectionWrapper minH="40vh"></SectionWrapper>
      <SectionWrapper
        bg="white"
        minH="40vh"
        borderTopRightRadius="200px"
        sx={{
          ".swiper-pagination-bullet-active": {
            bg: "brandBlue.900",
          },
          ".swiper-pagination-bullet": {
            width: 3,
            height: 3,
          },
        }}
      >
        <Container maxW="container.lg">
          <HStack>
            <IconButton
              icon={<FaChevronLeft />}
              className="swiper-button-prev"
              bg="brandGreen.500"
              _hover={{ bg: "brandGreen.600" }}
              opacity="0.9"
              color="white"
              size="md"
              onClick={handleClick}
            />

            <Swiper
              className="tactic"
              pagination={{ clickable: true }}
              grabCursor={true}
              rewind={true}
              onAfterInit={swiper => {
                setSwiperInstance(swiper)
              }}
            >
              {data.map((item, i) => {
                return (
                  <SwiperSlide>
                    <Grid
                      h="600px"
                      w="full"
                      templateColumns="repeat(8,1fr)"
                      templateRows="repeat(8,1fr)"
                    >
                      <GridItem
                        colStart={2}
                        colEnd={6}
                        rowStart={2}
                        rowEnd={8}
                        rounded="xl"
                        bg={`url("${item}")`}
                        backgroundSize="cover"
                      />
                      <GridItem
                        bg="brandYellow.600"
                        colStart={5}
                        colEnd={8}
                        rowStart={3}
                        rowEnd={7}
                        rounded="xl"
                      >
                        <Box p={12} layerStyle="fillSpace">
                          <VStack flexDirection="column" spacing={4}>
                            <Heading
                              color="white"
                              fontSize="60px"
                              lineHeight="0.6"
                            >
                              "
                            </Heading>
                            <Text color="brandBlue.900" textAlign="center">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Architecto, recusandae quasi quos ipsum quam
                              voluptates.
                            </Text>
                            <Text color="white" fontWeight="semibold">
                              Tom Sweeney
                            </Text>
                          </VStack>
                        </Box>
                      </GridItem>
                    </Grid>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <IconButton
              icon={<FaChevronRight />}
              className="swiper-button-next"
              opacity="0.8"
              bg="brandGreen.500"
              _hover={{ bg: "brandGreen.600" }}
              color="white"
              size="md"
            />
          </HStack>
        </Container>
      </SectionWrapper>
    </>
  )
}

export default TestimonialSlider
