import React, { useRef } from "react"
import SectionWrapperCustom from "./SectionWrapperCustom"
import ScrollDown from "../../../../assets/icons/ScrollDown"
import Content from "./Content"
import { Center } from "@chakra-ui/react"
import useHeroAnimation from "./useHeroAnimation"

function Hero({ masterTimeline }) {
  const img1 = useRef()
  const img2 = useRef()
  const img3 = useRef()
  const overlay = useRef()
  const content = useRef()
  const animation = useRef()

  useHeroAnimation(masterTimeline, animation, {
    img1,
    img2,
    img3,
    overlay,
    content,
  })

  return (
    <SectionWrapperCustom ref={{ img1, img2, img3, overlay }}>
      <Center layerStyle="fillSpace">
        <Content ref={content} />
      </Center>
      <ScrollDown />
    </SectionWrapperCustom>
  )
}

export default Hero
