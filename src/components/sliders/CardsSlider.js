import React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"
import "swiper/css"

import VerticalCard from "../cards/VerticalCard"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import {
  Box,
  Heading,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react"

SwiperCore.use([Navigation])

function HorizontalCards({
  posts,
  sliderTitle,
  width,
  useGatsbyImage,
  useCustomControls = true,
}) {
  const breakpoints = {
    320: { slidesPerView: 1 },
    480: { slidesPerView: 2 },
    1000: { slidesPerView: 3 },
  }

  const showControls = useBreakpointValue([true, true, useCustomControls])

  return posts ? (
    <Box
      h="100%"
      maxW={width || "container.lg"}
      width="100%"
      pb={1}
      px={[4, 4, 0]}
    >
      <HStack justify="space-between" align="center">
        <Heading as="h3" pb={4} fontSize={["xl", "xl", "2xl", "3xl"]}>
          {sliderTitle}
        </Heading>

        <HStack py={2} className={showControls ? "" : "hidden"}>
          <IconButton
            icon={<FaChevronLeft />}
            className="swiper-button-prev"
            bg="brandGreen.500"
            _hover={{ bg: "brandGreen.600" }}
            opacity="0.9"
            color="white"
            size="md"
          />
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
      </HStack>
      <Swiper
        className="tactic"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={breakpoints}
        grabCursor={true}
      >
        {posts.map((post, i) => {
          return (
            <SwiperSlide>
              <Link to={post.path}>
                <VerticalCard
                  key={`slide-${posts[i]}`}
                  image={post.image}
                  title={post.title}
                  excerpt={post.excerpt}
                  readTime={post.readTime}
                  published={post.published}
                  useGatsbyImage={useGatsbyImage}
                />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Box>
  ) : (
    <></>
  )
}

export default HorizontalCards
