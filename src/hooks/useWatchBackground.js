import { useEffect, useLayoutEffect, useState, forwardRef } from "react"
import { gsap, ScrollTrigger } from "../gsap"

export const useContrast = forwardRef((props, ref) => {
  const [color, setColor] = useState("white")

  useLayoutEffect(() => {
    const sections = document.querySelectorAll("main section")
    const scrollTriggers = []

    sections.forEach(section => {
      const dimensions = ref.current.getBoundingClientRect()
      const halfHeight = dimensions.top + dimensions.height / 2
      const isWhite = section.classList.contains("white")

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: `top ${halfHeight},`,
        markers: true,
        end: `top ${halfHeight + 5},`,
        onEnter: () => {
          setColor(isWhite ? "black" : "white")
        },
        onEnterBack: self => {
          setColor(
            self.trigger.previousElementSibling.classList.contains("white")
              ? "black"
              : "white"
          )
        },
      })

      scrollTriggers.push(trigger)
    })

    return () => {
      scrollTriggers.forEach(trigger => trigger.kill())
    }
  }, [ref])

  useEffect(() => {
    gsap.to(ref.current, {
      fill: color,
      duration: 0.4,
      ease: "Power3.out",
    })
  }, [color])
})
