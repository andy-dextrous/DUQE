import React, { useEffect, useRef } from "react"
import DIcon from "./DIcon"
import { FiArrowDown } from "react-icons/fi"
import { Icon } from "@chakra-ui/icons"
import { Box } from "@chakra-ui/react"
import { gsap } from "../../gsap"

function ScrollDown({ ...styles }) {
  const animation = useRef()
  const arrow = useRef()
  const dShape = useRef()

  useEffect(() => {
    if (animation.current) return
    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "power3.inOut" },
      yoyo: true,
      repeat: -1,
    })
    tl.to(arrow.current, { y: 20 })
    tl.to(dShape.current, { rotate: 180 }, 0)
  }, [])

  return (
    <Box {...styles}>
      <Box w="full" h="full" position="relative">
        <Box
          position="absolute"
          right="25px"
          top="40px"
          zIndex="12"
          ref={arrow}
        >
          <Icon
            as={FiArrowDown}
            color="white"
            w={["30px", "30px", "50px"]}
            h={["30px", "30px", "50px"]}
          />
        </Box>
        <DIcon
          w={["30px", "30px", "50px"]}
          h={["30px", "30px", "50px"]}
          position="absolute"
          right="25px"
          top="25px"
          zIndex="2"
          color="#E0DB2A"
          ref={dShape}
        />
      </Box>
    </Box>
  )
}

export default ScrollDown
