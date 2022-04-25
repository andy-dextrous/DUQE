import { Box } from "@chakra-ui/react"
import React, { useEffect, useLayoutEffect, useRef } from "react"
import { ScrollSmoother, ScrollTrigger } from "../gsap"

function SmoothWrapper({ smoothScroll, children }) {
  const wrapper = useRef()
  const content = useRef()

  useEffect(() => {
    if (!smoothScroll) return
    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current,
      content: content.current,
      smooth: 1,
    })

    return () => {
      smoother.kill()
    }
  }, [])

  return smoothScroll ? (
    <Box ref={wrapper}>
      <Box ref={content}>{children}</Box>
    </Box>
  ) : (
    <>{children}</>
  )
}

export default SmoothWrapper
