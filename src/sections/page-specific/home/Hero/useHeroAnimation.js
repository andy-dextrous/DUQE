import { useEffect } from "react"
import { gsap } from "../../../../gsap"

function useHeroAnimation(ref) {
  const { img1 } = ref

  /**** MASTER TIMELINE ANIMATIONS ****/
  // useEffect(() => {
  //   const tl = gsap.timeline()
  //   tl.from(content.current, { opacity: 0, id: "title" })

  //   masterTimeline.add(tl, "heroContentStart")
  // }, [])

  /**** ANIMATIONS NOT IN MASTER TIMELINE ****/
  useEffect(() => {
    console.log(img1.current)
    gsap.from(img1.current, {
      opacity: 0,
      delay: 0.2,
      duration: 0.35,
      ease: "Power3.in",
    })

    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: img1.current,
        toggleActions: "play none reverse none",
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    })
    tl.to(img1.current, {
      scale: 1.4,
      ease: "linear",
    })
  }, [img1])
}

export default useHeroAnimation
