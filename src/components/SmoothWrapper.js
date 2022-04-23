import { Box } from "@chakra-ui/react"
import React, { useEffect, useRef } from "react"
import { gsap, ScrollSmoother } from "../gsap"

function SmoothWrapper({ smoothScroll, children }) {
  const wrapper = useRef()
  const content = useRef()

  useEffect(() => {
    if (!smoothScroll) return
    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current,
      content: content.current,
      smooth: 1,
      effects: true,
      normalizeScroll: true,
    })

    smoother.scrollTrigger.refresh()

    const q = gsap.utils.selector(wrapper.current)

    smoother.effects(q(".hero__image-cont"), {
      speed: () => gsap.utils.random(1.1, 1.4, 0.05),
    })

    return () => {
      smoother.scrollTrigger.refresh()
      smoother.kill()
    }
  }, [smoothScroll])

  return smoothScroll ? (
    <Box ref={wrapper}>
      <Box ref={content}>{children}</Box>
    </Box>
  ) : (
    <>{children}</>
  )
}

export default SmoothWrapper
