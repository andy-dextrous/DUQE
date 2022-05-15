import { gsap, ScrollToPlugin } from "../../../gsap"

function animateSlides(q, currentQuestion, direction) {
  if (direction === "up") {
    gsap.to(q(`[data-slide-index="${currentQuestion - 1}"]`), {
      yPercent: -100,
      autoAlpha: 0,
      ease: "Power2.in",
    })

    gsap.fromTo(
      q(`[data-slide-index="${currentQuestion}"]`),
      {
        yPercent: 100,
        autoAlpha: 0,
      },
      {
        ease: "Power2.in",
        duration: 0.5,
        yPercent: 0,
        autoAlpha: 1,
        // onComplete: () => {
        //   gsap.to(window, { duration: 0.1, scrollTo: 0 })
        // },
      }
    )
    gsap.set(q(`[data-slide-index="${currentQuestion}"]`), { autoAlpha: 1 })
  } else {
    gsap.to(q(`[data-slide-index="${currentQuestion + 1}"]`), {
      yPercent: 100,
      autoAlpha: 0,
      ease: "Power2.in",
    })
    gsap.fromTo(
      q(`[data-slide-index="${currentQuestion}"]`),
      {
        yPercent: -100,
        autoAlpha: 0,
      },
      {
        ease: "Power2.in",
        duration: 0.5,
        yPercent: 0,
        autoAlpha: 1,
        // onComplete: () => {
        //   gsap.to(window, { duration: 0.1, scrollTo: 0 })
        // },
      }
    )
    gsap.set(q(`[data-slide-index="${currentQuestion}"]`), { autoAlpha: 1 })
  }
}

export default animateSlides
