import { Box } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

function DynamicArrow(props) {
  const {
    labelAnchorX,
    labelAnchorY,
    labelSpeed,
    productAnchorX,
    productAnchorY,
    travelledDistance,
    ...styleProps
  } = props

  const [productAnchorOffsetX, setProductAnchorOffsetX] =
    useState(productAnchorX)

  useEffect(() => {
    // const offsetAmount = (0 - travelledDistance) * labelSpeed
    const offsetAmount = (0 - travelledDistance) * 1
    setProductAnchorOffsetX(productAnchorX + offsetAmount)
  }, [travelledDistance, productAnchorX])

  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      position="absolute"
      pointerEvents="none"
      {...styleProps}
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html: ".cls-2{stroke:#fff;stroke-miterlimit:10}",
          }}
        />
      </defs>
      <g id="arrow" data-name="Arrow">
        <path id="frame" d="M0 0h600v600H0z" fill="none" />
        <circle
          fill="#FFF"
          className="cls-2"
          cx={labelAnchorX}
          cy={labelAnchorY}
          r={3}
        />
        <circle
          fill="#FFF"
          className="cls-2"
          cx={productAnchorOffsetX}
          cy={productAnchorY}
          r={3}
        />
        <line
          id="line"
          stroke="#FFF"
          strokeWidth={2}
          strokeMiterlimit={10}
          fill="none"
          x1={labelAnchorX}
          y1={labelAnchorY}
          x2={productAnchorOffsetX}
          y2={productAnchorY}
        />
      </g>
    </Box>
  )
}

export default DynamicArrow
