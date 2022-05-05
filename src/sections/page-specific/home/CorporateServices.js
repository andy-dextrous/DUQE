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
import React, { useEffect, useRef } from "react"
import { SmartImage } from "../../../components/SmartImage"
import { gsap } from "../../../gsap"

function CorporateServices() {
  const data = [
    {
      title: "Accounting",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1650947182/DUQE/Rectangle_21.png",
      text: " Our accountants will sort out your invoices, receipts, payments,etc. and make sure your financial records are maintained per international standards, so you have one less thing to worry about.",
    },
    {
      title: "VAT Registration",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1650940026/DUQE/Rectangle_15.png",
      text: " Our accountants will sort out your invoices, receipts, payments,etc. and make sure your financial records are maintained per international standards, so you have one less thing to worry about.",
    },
    {
      title: "Bank Account Opening Assistance",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651111950/DUQE/About_Us.png",
      text: " Our accountants will sort out your invoices, receipts, payments,etc. and make sure your financial records are maintained per international standards, so you have one less thing to worry about.",
    },
    {
      title: "Medical & Emirates ID Assistance",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651118247/DUQE/Corporate_Services.png",
      text: " Our accountants will sort out your invoices, receipts, payments,etc. and make sure your financial records are maintained per international standards, so you have one less thing to worry about.",
    },
    {
      title: "Insurance",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1650947182/DUQE/Rectangle_21.png",
      text: " Our accountants will sort out your invoices, receipts, payments,etc. and make sure your financial records are maintained per international standards, so you have one less thing to worry about.",
    },
    {
      title: "Business Center",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1650947182/DUQE/Rectangle_21.png",
      text: " Our accountants will sort out your invoices, receipts, payments,etc. and make sure your financial records are maintained per international standards, so you have one less thing to worry about.",
    },
  ]

  const [selected, setSelected] = React.useState(0)
  const [handlePosition, setHandlePosition] = React.useState(0)
  const title = useRef()
  const text = useRef()
  const card = useRef()
  const imageContainer = useRef()
  const handle = useRef()
  const track = useRef()
  const handleStops = data.map((_, i) => {
    return i / data.length
  })

  useEffect(() => {
    const images = imageContainer.current.querySelectorAll("img")
    const selectedImage = images[selected]
    const hiddenImages = Array.from(images).filter(img => img !== selectedImage)
    const trackHeight = track.current.offsetHeight

    title.current.innerHTML = data[selected].title
    text.current.innerHTML = data[selected].text
    gsap.fromTo(
      [card.current],
      { x: -30 },
      { x: 0, duration: 0.3, delay: 0, ease: "Power3.out" }
    )

    gsap.fromTo(
      handle.current,
      { y: handlePosition },
      {
        y: handleStops[selected] * trackHeight,
        duration: 0.3,
        ease: "Power3.out",
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
      { opacity: 1, scale: 1, duration: 0.5, ease: "Power3.out" }
    )
  }, [selected])

  function handleClick(index) {
    setSelected(index)
  }

  return (
    <Box width="full" maxW="container.xl" zIndex="2">
      <Box
        layerStyle="fillSpace"
        h={["100vh", "100vh", "850px"]}
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
            gridRow={["3/7", "3/7", "3/11"]}
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
                py={20}
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
            ref={card}
          >
            <HStack w="full" justify="space-between" align="center">
              <Heading as="h4" textTransform="unset" ref={title}>
                {data[0].title}
              </Heading>
              <Image h="60px" src={data[selected].iconUrl} />
            </HStack>
            <Text mt={8} fontSize={["14", "14", "20"]} ref={text}>
              {data[0].text}
            </Text>
          </GridItem>
        </Grid>
        <Box zIndex="-2" overflow="hidden" ref={imageContainer}>
          <Box layerStyle="overlay" />
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
