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
      text: "Sorting out your invoices, receipts, payable and more can be a headache when you’ve got a business to run. If you need an expert to take care of your accounting, our accountants are here to lessen your burden as an entrepreneur. ",
    },
    {
      title: "VAT Registration",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1650940026/DUQE/Rectangle_15.png",
      text: "We have a team specialising in the UAE’s VAT rules and regulations who can help you understand the VAT policies applicable to your business. If your business meets the criteria, our team can also help you to register your business for VAT. ",
    },
    {
      title: "Bank Account Opening ",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651111950/DUQE/About_Us.png",
      text: "Opening a bank account for your business can be a swift and easy process with our banking specialists to assist you. From helping you choose the bank that best suits your business requirements, to guiding you through the requirements and steps, our team will be with you every step of the way.",
    },
    {
      title: "Medical & Emirates ID",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651118247/DUQE/Corporate_Services.png",
      text: "What sets us apart from other business zones is that we have our own facilities for medical fitness tests and Emirates ID typing, so you can conveniently get it all done in one place. Save time, deal with less hassle and get more done with DUQE. ",
    },
    {
      title: "Health Insurance",
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
      text: "Enjoy the flexibility to work and get things done in your own terms. We offer a variety of flexible workspaces and you’re free to choose and book the one that suits you best – from virtual offices and dedicated desks, to private offices and meeting rooms. ",
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
      { x: -30, delay: 0.2 },
      { x: 0, duration: 0.5, ease: "Power3.in" }
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
  }, [selected])

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
            roundedTop={["30px", "30px", "0px"]}
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
