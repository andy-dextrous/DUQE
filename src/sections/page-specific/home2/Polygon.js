import { Box, Center, Image } from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from "react"
import PolygonLabel from "../../../components/PolygonLabel"
import { gsap, ScrollTrigger } from "../../../gsap"
import labelData from "./polygonData.json"
import PolygonItemInfo from "./PolygonItemInfo"

function Polygon() {
  const imageRef = useRef()
  const containerRef = useRef()
  const imageRatio = 4551 / 512
  let [imageWidth, setImagewidth] = useState(null)
  let [timeline, setTimeline] = useState(() => gsap.timeline())
  const [selectedItem, setSelectedItem] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setImagewidth(imageRef.current.getBoundingClientRect().width)
  }, [])

  useEffect(() => {
    if (!ScrollTrigger || !imageWidth) return
    // Ensure the image is loaded before creating animation

    setTimeline(
      gsap
        .timeline({
          id: "Polygon",
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: 1.8,
            pin: true,
            start: "top top",
            end: `+=${containerRef.current.offsetWidth * 3}`,
            anticipatePin: true,
          },
          defaults: { ease: "none" },
        })
        .fromTo(
          imageRef.current,
          { x: 0 },
          {
            x: 0 - (imageWidth - window.innerWidth),
            duration: 100,
          }
        )
    )
  }, [imageWidth])

  return (
    <Center
      as="section"
      width={["100vw", "100vw", "100%"]}
      position="relative"
      ml={[0]}
      pb={[10, 10, 24]}
      pt={[10, 10, 24]}
      overflow="hidden"
      height="100vh"
      ref={containerRef}
    >
      <PolygonItemInfo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedItem={selectedItem}
      />
      <Box h="100vh" w="100vw" overflow="hidden">
        <Box
          h="100%"
          ref={imageRef}
          id="ratio"
          width={`calc(${imageRatio} * 100vh)`}
          position="relative"
        >
          {labelData.map((label, index) => {
            const { text, id, ...rest } = label
            return (
              <PolygonLabel
                tl={timeline}
                imageWidth={imageWidth}
                key={index}
                id={id}
                setSelectedItem={setSelectedItem}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                {...rest}
              >
                {text}
              </PolygonLabel>
            )
          })}

          <Image
            h="100%"
            overflow="visible"
            src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1648689548/Polygon_WebView_Channel_Composite-9102x1024.jpg"
          />
        </Box>
      </Box>
    </Center>
  )
}

export default Polygon
