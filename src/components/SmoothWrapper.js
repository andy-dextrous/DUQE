import { Box } from "@chakra-ui/react"
import React, { useLayoutEffect, useRef } from "react"
import { ScrollSmoother } from "../gsap"

function SmoothWrapper({ smoothScroll, children }) {
  const wrapper = useRef()
  const content = useRef()

  useLayoutEffect(() => {
    if (!smoothScroll) return

    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current,
      content: content.current,
      smooth: 1,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
      preventDefault: true,
    })

    return () => {
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
