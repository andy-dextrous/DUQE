import gsap from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { Flip } from "gsap/Flip"
import { Observer } from "gsap/Observer"
import { registerEffects } from "./registerEffects"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(
  DrawSVGPlugin,
  Flip,
  Observer,
  ScrollSmoother,
  ScrollToPlugin,
  ScrollTrigger,
  SplitText
)

gsap.defaults({})

registerEffects()

export * from "gsap"
export * from "gsap/DrawSVGPlugin"
export * from "gsap/Flip"
export * from "gsap/Observer"
export * from "gsap/ScrollSmoother"
export * from "gsap/ScrollToPlugin"
export * from "gsap/ScrollTrigger"
export * from "gsap/SplitText"
