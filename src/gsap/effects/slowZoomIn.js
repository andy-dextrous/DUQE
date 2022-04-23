import { gsap } from ".."

export function slowZoomIn() {
  return gsap.registerEffect({
    name: "slowZoomIn",
    extendTimeline: true,
    effect: target => {
      return gsap.to(target, {
        scale: 1.2,
        duration: 30,
        ease: "Power3.out",
      })
    },
  })
}
