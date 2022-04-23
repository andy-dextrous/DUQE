import { gsap } from ".."

export function fadeIn() {
  return gsap.registerEffect({
    name: "fadeIn",
    effect: target => {
      return gsap.to(target, {
        autoAlpha: 1,
        ease: "Power3.in",
      })
    },
    extendTimeline: true,
  })
}
