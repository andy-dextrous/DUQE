import { gsap } from ".."

export function typeText() {
  return gsap.registerEffect({
    name: "typeText",
    extendTimeline: true,
    effect: (target, config) => {
      return config.speed === "fast"
        ? gsap.to(target, {
            autoAlpha: 1,
            stagger: 0.02,
            duration: 0.05,
          })
        : gsap.to(target, { autoAlpha: 1, stagger: 0.05, duration: 0.05 })
    },
  })
}
