import { useContext, useEffect } from "react"
import { gsap, ScrollTrigger } from "../gsap"
import { DarkContext } from "../components/Layout"

const useContrastingColor = (
  { color, setColor },
  ref,
  propertyToModify = { fill: color },
  childSelector = null,
  useContrast = true
) => {
  const { isDarkBackground } = useContext(DarkContext)

  useEffect(() => {
    if (!useContrast) return
    const sections = document.querySelectorAll("main section")
    const scrollTriggers = []

    sections.forEach((section, i) => {
      section.setAttribute("data-index", i)
      const dimensions = ref.current.getBoundingClientRect()
      const halfHeight = dimensions.top + dimensions.height / 2
      const isLight = section?.classList?.contains("light")

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: `top ${halfHeight},`,
        end: `top ${halfHeight + 5},`,
        onEnter: () => {
          setColor(isLight ? "#0b0b0b" : "white")
        },
        onEnterBack: self => {
          const triggerIndex = self.trigger.getAttribute("data-index")
          const trigger = sections[parseInt(triggerIndex) - 1]

          setColor(trigger.classList?.contains("light") ? "#0b0b0b" : "white")
        },
        invalidateOnRefresh: true,
      })

      scrollTriggers.push(trigger)
    })

    return () => {
      scrollTriggers.forEach(trigger => trigger.kill())
    }
  }, [ref, setColor, useContrast])

  useEffect(() => {
    if (!ref.current || !useContrast) return
    const target = childSelector
      ? ref.current.querySelectorAll(childSelector)
      : ref.current

    gsap.to(target, {
      ...propertyToModify,
      duration: 0.4,
      ease: "Power3.out",
    })
  }, [color, propertyToModify, ref, childSelector, useContrast])

  useEffect(() => {
    if (!isDarkBackground) return
    console.log(isDarkBackground)
    const target = childSelector
      ? ref.current.querySelectorAll(childSelector)
      : ref.current
    gsap.to(target, {
      fill: "white",
      duration: 0.4,
      ease: "Power3.out",
    })
  }, [isDarkBackground, childSelector, ref])
}

export default useContrastingColor
