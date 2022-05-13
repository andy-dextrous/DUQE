import React, { useEffect, useRef } from "react"
import { gsap } from "../../../gsap"

import { Center } from "@chakra-ui/react"

function Overlay({ timeline, isHomePage }) {
  const containerRef = useRef()
  const { masterTimeline } = timeline

  useEffect(() => {
    if (isHomePage) {
      gsap.set(containerRef.current, { transformOrigin: "57% 50%" })

      masterTimeline
        .to(
          containerRef.current,
          {
            scale: 10,
            duration: 2,
            ease: "Power3.in",
          },
          "zoom"
        )
        .to(
          containerRef.current,
          {
            autoAlpha: 0,
            display: "none",
          },
          "hideOverlay"
        )
    }
  }, [])

  return isHomePage ? (
    <Center
      w="100vw"
      h="100vh"
      position="fixed"
      left="0"
      top="0"
      right="0"
      bottom="0"
      zIndex="9999"
      backgroundPosition={["center", "center"]}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      sx={{
        backgroundImage: `url(
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080' style='enable-background:new 0 0 1920 1080' xml:space='preserve'%3E%3Cpath d='M0 0v1080h1920V0H0zm1528.2 436.3h-115.9v16.2h115.9v88.6h-115.9v16.2h115.9v84.4h-280.3v-85.2c-18.4 41.8-54.5 73.9-98.8 87.1l87.2 20.4-18.7 80.1-182.2-42.5 14.3-61.1c-43-15.9-77.1-50.1-92.9-93.1-21 55.2-74.4 94.4-137 94.4-66.9 0-123.2-44.8-140.8-106-17.6 61.1-74 105.9-140.8 105.9H391.8V348.3h146.5c60.7 0 112.8 36.9 135 89.6v-89.4h140.8v104.1h18.2V348.5h134.1v69.2c26.7-48.7 78.4-81.8 137.8-81.8 64.2 0 119.3 38.5 143.7 93.7v-81.3h280.3v88z' style='fill:white'/%3E%3C/svg%3E"
          )`,
      }}
      ref={containerRef}
    ></Center>
  ) : (
    <></>
  )
}

export default Overlay
