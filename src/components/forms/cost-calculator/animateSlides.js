import { gsap } from "../../../gsap"

function animateSlides(q, currentQuestion, direction) {
  if (direction === "up") {
    gsap.set(
      q(`[data-slide-index="${currentQuestion - 1}"] .chakra-button.control`),
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
      q(`[data-slide-index="${currentQuestion}"] .chakra-button.control`),
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
      q(`[data-slide-index="${currentQuestion + 1}"] .chakra-button.control`),
      {
        autoAlpha: 0,
      }
    )
    gsap.to(q(`[data-slide-index="${currentQuestion + 1}"]`), {
      yPercent: 100,
      autoAlpha: 0,
      ease: "sine.in",
    })
    gsap.fromTo(
      q(`[data-slide-index="${currentQuestion}"]`),
      {
        yPercent: -100,
        autoAlpha: 0,
      },
      {
        ease: "sine.in",
        duration: 0.5,
        yPercent: 0,
        autoAlpha: 1,
        // onComplete: () => {
        //   gsap.to(window, { duration: 0.1, scrollTo: 0 })
        // },
      }
    )
    gsap.to(
      q(`[data-slide-index="${currentQuestion}"] .chakra-button.control`),
      {
        autoAlpha: 1,
        delay: 0.4,
        duration: 0.2,
        ease: "sine.in",
      }
    )
    gsap.set(q(`[data-slide-index="${currentQuestion}"]`), { autoAlpha: 1 })
  }
}

export default animateSlides
