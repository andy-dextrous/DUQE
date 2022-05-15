import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { Flip } from "gsap/Flip"
import { registerEffects } from "./registerEffects"

gsap.registerPlugin(
  SplitText,
  DrawSVGPlugin,
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  Flip
)

gsap.defaults({})

registerEffects()

export * from "gsap"
export * from "gsap/SplitText"
export * from "gsap/DrawSVGPlugin"
export * from "gsap/ScrollTrigger"
export * from "gsap/ScrollSmoother"
export * from "gsap/ScrollToPlugin"
export * from "gsap/Flip"
