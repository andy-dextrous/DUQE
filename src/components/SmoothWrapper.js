import React, { useLayoutEffect, useState } from "react"
import { ScrollSmoother } from "../gsap"
export const SmoothContext = React.createContext()

function SmoothWrapper({ smoothScroll, children }) {
  const [smootherInstance, setSmootherInstance] = useState()

  useLayoutEffect(() => {
    if (!smoothScroll || window.innerWidth < 768) return

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.4,
      onUpdate: self => {
        console.log(self.scrollTrigger.direction)
      },
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
