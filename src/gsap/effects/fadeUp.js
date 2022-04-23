import { gsap } from "../gsap"

export function fadeUp() {
  return gsap.registerEffect({
    name: "fadeUp",
    effect: target => {
      return gsap.to(target, { autoAlpha: 1, ease: "Power3.in" })
    },
    extendTimeline: true,
  })
}
