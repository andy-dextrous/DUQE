import { gsap, SplitText } from ".."

export function splitText() {
  return gsap.registerEffect({
    name: "splitText",
    plugins: "SplitText",
    extendTimeline: true,
    effect: target => {
      const split = new SplitText(target, {
        type: "chars,lines",
        linesClass: "split-lines",
        charsClass: "split-chars",
      })
      return split
    },
  })
}
