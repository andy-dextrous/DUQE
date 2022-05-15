import { useEffect } from "react"
import { gsap, ScrollTrigger } from "../../../../gsap"

function useHeroAnimation(masterTimeline, animation, ref) {
  const { img1, img2, img3, overlay, content } = ref

  /**** MASTER TIMELINE ANIMATIONS ****/
  // useEffect(() => {
  //   const tl = gsap.timeline()
  //   tl.from(content.current, { opacity: 0, id: "title" })

  //   masterTimeline.add(tl, "heroContentStart")
  // }, [])

  /**** ANIMATIONS NOT IN MASTER TIMELINE ****/
  useEffect(() => {
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
  }, [])
}

export default useHeroAnimation
