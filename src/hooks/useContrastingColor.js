import { useEffect } from "react"
import { gsap, ScrollTrigger } from "../gsap"

const useContrastingColor = (
  { color, setColor },
  ref,
  propertyToModify = { fill: color },
  childSelector = null
) => {
  useEffect(() => {
    const sections = document.querySelectorAll("main section")
    const scrollTriggers = []

    sections.forEach(section => {
      const dimensions = ref.current.getBoundingClientRect()
      const halfHeight = dimensions.top + dimensions.height / 2
      const isLight = section?.classList?.contains("light")

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: `top ${halfHeight},`,
        end: `top ${halfHeight + 5},`,
        markers: true,
        onEnter: () => {
          setColor(isLight ? "#0b0b0b" : "white")
        },
        onEnterBack: self => {
          setColor(
            self.trigger.previousElementSibling?.classList?.contains("light")
              ? "#0b0b0b"
              : "white"
          )
        },
        invalidateOnRefresh: true,
      })

      scrollTriggers.push(trigger)
    })

    return () => {
      scrollTriggers.forEach(trigger => trigger.kill())
    }
  }, [ref, setColor])

  useEffect(() => {
    if (!ref.current) return
    const target = childSelector
      ? ref.current.querySelectorAll(childSelector)
      : ref.current

    gsap.to(target, {
      ...propertyToModify,
      duration: 0.4,
      ease: "Power3.out",
    })
  }, [color, propertyToModify, ref])
}

export default useContrastingColor
