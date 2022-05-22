import React, { useEffect, useRef } from "react"
import { gsap } from "../../../gsap"

import { SmartImage } from "../../../components/SmartImage"
import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"

function CorporateServices({ data }) {
  const [selected, setSelected] = React.useState(0)
  const [handlePosition, setHandlePosition] = React.useState(0)
  const title = useRef()
  const text = useRef()
  const card = useRef()
  const imageContainer = useRef()
  const handle = useRef()
  const track = useRef()

  useEffect(() => {
    const handleStops = data.map((_, i) => {
      return i / data.length
    })
    const images = imageContainer.current.querySelectorAll("img")
    const selectedImage = images[selected]
    const hiddenImages = Array.from(images).filter(img => img !== selectedImage)
    const trackHeight = track.current.offsetHeight

    title.current.innerHTML = data[selected].title
    text.current.innerHTML = data[selected].text
    gsap.fromTo(
      [card.current],
      { x: -30, delay: 0.2 },
      { x: 0, duration: 0.8, ease: "Power3.out" }
    )

    gsap.fromTo(
      handle.current,
      { y: handlePosition },
      {
        y: handleStops[selected] * trackHeight,
        delay: 0.1,
        duration: 0.35,
        ease: "Power3.in",
        onComplete: () => {
          setHandlePosition(handleStops[selected] * trackHeight)
        },
      }
    )
    gsap.set(selectedImage, { zIndex: -1 })
    gsap.set(hiddenImages, { zIndex: -2 })
    gsap.set(hiddenImages, { opacity: 0 })
    gsap.fromTo(
      selectedImage,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, delay: 0.1, duration: 0.35, scale: 1, ease: "Power3.in" }
    )
  }, [selected, data])

  function handleClick(index) {
    setSelected(index)
  }

  return (
    <Box width="full" maxW="container.xl" zIndex="2">
      <Box
        layerStyle="fillSpace"
        h={["100vh", "110vh", "850px"]}
        position="relative"
        rounded="30px"
        overflow="hidden"
      >
        <Grid
          layerStyle="fillSpaceAbsolute"
          zIndex="2"
          templateColumns="repeat(12,1fr)"
          templateRows="repeat(12,1fr)"
        >
          <GridItem
            gridColumn={["2/11", "2/11", "2/5"]}
            gridRow={["2/7", "2/7", "3/11"]}
            overflow="hidden"
          >
            <HStack h="full" spacing={[8, 8, 12]}>
              <Box
                w="2px"
                h="full"
                bg="dark.500"
                position="relative"
                ref={track}
              >
                <Box
                  width="4px"
                  height={`calc(100% / ${data.length})`}
                  position="absolute"
                  left="-1px"
                  top="0"
                  bg="brandYellow.default"
                  zIndex="2"
                  cursor="pointer"
                  ref={handle}
                ></Box>
              </Box>
              <VStack
                as="ul"
                align="start"
                h="100%"
                justify="space-between"
                spacing={[8, 8, 12]}
                py={[0, 0, 20]}
              >
                {data.map((item, index) => {
                  return (
                    <Box
                      key={index}
                      as="li"
                      color={
                        selected === index ? "brandYellow.default" : "white"
                      }
                      fontWeight="extrabold"
                      listStyleType="none"
                      onClick={() => handleClick(index)}
                      cursor="pointer"
                      transition="all 0.2s ease-in-out"
                      _hover={{
                        color: "whiteAlpha.800",
                        transform: "translateX(5px)",
                      }}
                    >
                      {item.title}
                    </Box>
                  )
                })}
              </VStack>
            </HStack>
          </GridItem>
          <GridItem
            gridColumn={["2/12", "2/12", "7/12"]}
            gridRow="8/13"
            bg="brandYellow.default"
            p={12}
            roundedTop="30px"
            ref={card}
          >
            <HStack w="full" justify="space-between" align="center">
              <Heading as="h4" textTransform="unset" ref={title}>
                {data[0].title}
              </Heading>
              <Image h="60px" src={data[selected].iconUrl} />
            </HStack>
            <Text
              mt={8}
              fontSize={["14", "14", "20"]}
              ref={text}
              lineHeight={[1.2, 1.4, 1.5]}
            >
              {data[0].text}
            </Text>
          </GridItem>
        </Grid>
        <Box zIndex="-2" overflow="hidden" ref={imageContainer}>
          <Box layerStyle="overlay" opacity="0.8" />
          <Box layerStyle="overlay" zIndex="-3" bg="dark.default" opacity="1" />
          {data.map((item, index) => {
            return (
              <SmartImage
                img={item.imgUrl}
                layerStyle="bgImage"
                key={index}
                id={`corp-image-${index}`}
              />
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default CorporateServices
