import React, { useEffect, useRef } from "react"
import { gsap, Observer } from "../../../../gsap"
import { Center, Text } from "@chakra-ui/react"

function FunButton() {
  const ref = useRef()
  const animation = useRef()
  useEffect(() => {
    if (!animation.current) {
      Observer.create({
        target: ref.current,
        type: "pointer",
        onHover: handleHover,
        onHoverEnd: handleHoverEnd,
      })
      const tl = gsap
        .timeline({ paused: true })
        .to(ref.current, { duration: 2, ease: "sine.out", scale: 1.1 }, 0.1)
        .to(
          ref.current,
          { scale: 1, ease: "elastic(1.2, 0.4)", duration: 1.8 },
          1.2
        )
        .timeScale(2.3)
      animation.current = tl
    }
  }, [])

  function handleHover(e) {
    animation.current.play()
    animation.current.restart()
  }

  function handleHoverEnd(e) {
    // animation.current.reverse()
  }

  return (
    <Center
      rounded="5px"
      w="220px"
      h="50px"
      bg="brandBlue.default"
      cursor="pointer"
      ref={ref}
    >
      <Text textTransform="uppercase">Click Me</Text>
    </Center>
  )
}

export default FunButton
