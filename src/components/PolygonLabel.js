import { Box, Center, Heading } from "@chakra-ui/react"
import React, { useRef, useEffect, useState } from "react"
import DynamicArrow from "../sections/page-specific/home2/DynamicArrow"

function PolygonLabel(props) {
  const {
    tl,
    imageWidth,
    labelSpeed = 3,
    left = 50,
    top = 50,
    labelAnchorX = "50%",
    labelAnchorY = "30%",
    productAnchorX = 300,
    productAnchorY = "70%",
    arrowWidth = "600px",
    arrowHeight = "600px",
    arrowTop = "0",
    arrowRight = "0",
    children,
    id,
    setSelectedItem,
    setIsOpen,
    isOpen,
    ...headingProps
  } = props

  const titleRef = useRef()
  const [elementHeight, setElementHeight] = useState(null)
  const [elementWidth, setElementWidth] = useState(null)

  const travelledDistanceObject = { x: 0 }
  const [travelledDistance, setTravelledDistance] = useState(0)

  useEffect(() => {
    setElementHeight(titleRef.current.getBoundingClientRect().height)
    setElementWidth(titleRef.current.getBoundingClientRect().width)
  }, [])

  useEffect(() => {
    if (!tl || !elementWidth || !elementHeight) return
    // Where the text left side is in px from the far left edge. These come from calc(leftValue - elementWidth)
    const labelDimensions = titleRef.current.getBoundingClientRect()
    const leftEdge = labelDimensions.left
    const travelDistance = imageWidth - window.innerWidth
    const travelDistanceToElement = leftEdge - window.innerWidth
    // At what percent of the timeline will the left edge of the text meet the right side of the screen
    const startTime = (
      (travelDistanceToElement / travelDistance) *
      100
    ).toFixed(2)
    const duration =
      ((labelDimensions.width + window.innerWidth) / travelDistance) * 100

    tl.fromTo(
      titleRef.current,
      { x: labelSpeed * 80 },
      {
        x: 0 - labelSpeed * 80,
        duration: duration,
      },
      startTime
    )
    // Currently uses an object to get the exact value of x in number format. If performance suffers, use the onUpdate values above.
    tl.fromTo(
      travelledDistanceObject,
      { x: labelSpeed * 80 },
      {
        x: 0 - labelSpeed * 80,
        duration: duration,
        onUpdate() {
          setTravelledDistance(this.targets()[0].x)
        },
      },
      startTime
    )
  }, [tl])

  const handleClick = () => {
    setSelectedItem(id)
    setIsOpen(!isOpen)
  }

  return (
    <Center
      left={`calc(${left}% - ${elementWidth / 2}px)`}
      top={`calc(${top}% - ${elementHeight / 2}px)`}
      position="absolute"
      ref={titleRef}
    >
      <Box
        w="full"
        h="full"
        position="relative"
        cursor="pointer"
        onClick={handleClick}
      >
        <Heading {...headingProps}>{children}</Heading>
        <DynamicArrow
          travelledDistance={travelledDistance}
          labelSpeed={labelSpeed}
          labelAnchorX={labelAnchorX}
          labelAnchorY={labelAnchorY}
          productAnchorX={productAnchorX}
          productAnchorY={productAnchorY}
          width={arrowWidth}
          height={arrowHeight}
          top={arrowTop}
          right={arrowRight}
        />
      </Box>
    </Center>
  )
}

export default PolygonLabel
