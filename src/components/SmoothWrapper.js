import { useBreakpointValue } from "@chakra-ui/react"
import React, { useLayoutEffect, useState } from "react"
import { ScrollSmoother } from "../gsap"
export const SmoothContext = React.createContext()

function SmoothWrapper({ smoothScroll, children }) {
  const [smootherInstance, setSmootherInstance] = useState()
  const useSmoothOnMobile = useBreakpointValue([false, false, true])

  useLayoutEffect(() => {
    if (!smoothScroll || window.innerWidth < 768) return

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,

      effects: true,
    })

    setSmootherInstance(smoother)

    return () => {
      smoother.kill()
    }
  }, [smoothScroll])

  return (
    <SmoothContext.Provider value={smootherInstance}>
      {children}
    </SmoothContext.Provider>
  )
}

export default SmoothWrapper
