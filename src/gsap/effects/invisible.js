import { gsap } from ".."

export function invisible() {
  return gsap.registerEffect({
    name: "invisible",
    extendTimeline: true,
    effect: target => {
      const invisible = gsap.set(target, {
        autoAlpha: 0,
      })
      return invisible
    },
  })
}
