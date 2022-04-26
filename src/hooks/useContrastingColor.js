import React, { useEffect, useLayoutEffect, useState } from "react"
import { gsap, ScrollTrigger } from "../gsap"

function useContrastingColor(initialColor = "white", id) {
  const [color, setColor] = useState(initialColor)

  useLayoutEffect(() => {
    const sections = document.querySelectorAll("main section")
    const ref = document.querySelector(`#${id}`)
    const scrollTriggers = []

    sections.forEach(section => {
      const dimensions = ref?.getBoundingClientRect()
      const halfHeight = dimensions?.top + dimensions?.height / 2
      const isWhite = section.classList.contains("white")

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: `top ${halfHeight},`,
        markers: true,
        end: `top ${halfHeight + 5},`,
        onEnter: () => {
          setColor(isWhite ? "#0b0b0b" : "white")
        },
        onEnterBack: self => {
          setColor(
            self.trigger.previousElementSibling.classList.contains("white")
              ? "#0b0b0b"
              : "white"
          )
        },
      })

      scrollTriggers.push(trigger)
    })

    return () => {
      scrollTriggers.forEach(trigger => trigger.kill())
    }
  }, [id])

  useEffect(() => {
    console.log("change")
    const ref = document.querySelector(`#${id}`)
    gsap.to(ref, {
      fill: color,
      duration: 0.4,
      ease: "Power3.out",
    })
  }, [color])

  return color
}

export default useContrastingColor
