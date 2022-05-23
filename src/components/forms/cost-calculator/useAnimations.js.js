import React, { useEffect, useLayoutEffect } from "react"
import { gsap } from "../../../gsap"
import { FormContext } from "./Context"

function useAnimations(ref) {
  const { currentQuestion, direction } = React.useContext(FormContext)

  useLayoutEffect(() => {
    if (!ref.current) return
    const q = gsap.utils.selector(ref.current)
    gsap.set(q(`[data-slide-index]`), { autoAlpha: 0 })
    gsap.set(q(`[data-slide-index="${currentQuestion}"]`), { autoAlpha: 1 })
  }, [ref])

  useEffect(() => {
    if (!ref.current) return
    const q = gsap.utils.selector(ref.current)
    if (direction === "up") {
      gsap.set(
        q(
          `[data-slide-index="${
            currentQuestion - 1
          }"] .chakra-button__group.control`
        ),
        {
          autoAlpha: 0,
        }
      )
      gsap.to(q(`[data-slide-index="${currentQuestion - 1}"]`), {
        yPercent: -100,
        autoAlpha: 0,
        ease: "sine.in",
        duration: 0.4,
      })

      gsap.fromTo(
        q(`[data-slide-index="${currentQuestion}"]`),
        {
          yPercent: 100,
          autoAlpha: 0,
        },
        {
          ease: "sine.in",
          duration: 0.4,
          yPercent: 0,
          autoAlpha: 1,
        }
      )
      gsap.to(
        q(
          `[data-slide-index="${currentQuestion}"] .chakra-button__group.control`
        ),
        {
          autoAlpha: 1,
          delay: 0.4,
          duration: 0.2,
          ease: "sine.in",
        }
      )
      gsap.set(q(`[data-slide-index="${currentQuestion}"]`), { autoAlpha: 1 })
    } else {
      gsap.set(
        q(
          `[data-slide-index="${
            currentQuestion + 1
          }"] .chakra-button__group.control`
        ),
        {
          autoAlpha: 0,
        }
      )
      gsap.to(q(`[data-slide-index="${currentQuestion + 1}"]`), {
        yPercent: 100,
        autoAlpha: 0,
        ease: "sine.out",
      })
      gsap.fromTo(
        q(`[data-slide-index="${currentQuestion}"]`),
        {
          yPercent: -100,
          autoAlpha: 0,
        },
        {
          ease: "sine.out",
          duration: 0.5,
          yPercent: 0,
          autoAlpha: 1,
          // onComplete: () => {
          //   gsap.to(window, { duration: 0.1, scrollTo: 0 })
          // },
        }
      )
      gsap.to(
        q(
          `[data-slide-index="${currentQuestion}"] .chakra-button__group.control`
        ),
        {
          autoAlpha: 1,
          delay: 0.4,
          duration: 0.2,
          ease: "sine.in",
        }
      )
      gsap.set(q(`[data-slide-index="${currentQuestion}"]`), { autoAlpha: 1 })
    }
  }, [currentQuestion])
}

export default useAnimations
