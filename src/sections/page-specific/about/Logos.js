import { HStack, Image, Box } from "@chakra-ui/react"
import React, { useEffect, useRef } from "react"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import { gsap } from "../../../gsap"

function Logos() {
  const images = [
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268203/Partner%20logos/Cardno.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268203/Partner%20logos/Shortcuts.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268203/Partner%20logos/Tritium.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268203/Partner%20logos/Dialog.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268203/Partner%20logos/hp.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268203/Partner%20logos/gbcc.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268201/Partner%20logos/AECOM.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268201/Partner%20logos/F5G.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268201/Partner%20logos/CSG.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268201/Partner%20logos/KBR.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268201/Partner%20logos/AFP.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268201/Partner%20logos/Toshiba.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268199/Partner%20logos/BMT.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268199/Partner%20logos/Aurizon.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268199/Partner%20logos/Realestate.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268199/Partner%20logos/Peddle.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268199/Partner%20logos/ACOR.svg",
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650268199/Partner%20logos/Icon.svg",
  ]
  const logoTray = useRef()

  useEffect(() => {
    gsap.to(logoTray.current, {
      xPercent: -100,
      duration: 60,
      ease: "none",
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <SectionWrapper minH="unset" height="unset" bg="brandBlue.900">
      <Box
        overflow="hidden"
        position="relative"
        h="full"
        _before={{
          content: "''",
          position: "absolute",
          width: "200px",
          height: "100%",
          left: 0,
          top: 0,
          bottom: 0,
          bg: "linear-gradient(90deg, rgba(17,31,45,1) 8%, rgba(17,31,45,0) 100%)",
          zIndex: 20,
        }}
        _after={{
          content: "''",
          position: "absolute",
          width: "200px",
          height: "100%",
          right: 0,
          top: 0,
          bottom: 0,
          bg: "linear-gradient(90deg, rgba(17,31,45,0) 0%, rgba(17,31,45,1) 100%)",
          zIndex: 20,
        }}
      >
        <HStack spacing={12} ref={logoTray}>
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                boxSize="150px"
                maxHeight="100px"
                src={image}
              />
            )
          })}
        </HStack>
      </Box>
    </SectionWrapper>
  )
}

export default Logos
