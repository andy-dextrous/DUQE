import React, { useLayoutEffect, useState } from "react"
import { ScrollSmoother } from "../gsap"
export const SmoothContext = React.createContext()

function SmoothWrapper({ smoothScroll, children }) {
  const [smootherInstance, setSmootherInstance] = useState()

  useLayoutEffect(() => {
    if (!smoothScroll) return

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
      preventDefault: true,
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
