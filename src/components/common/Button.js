import React, { useEffect, useRef, useState } from "react"
import { Button as ChakraButton } from "@chakra-ui/react"
import { gsap } from "../../gsap"

function Button({ children, ...props }) {
  const [ready, setReady] = useState(false)
  const button = useRef()

  useEffect(() => {
    const buttons = document.querySelectorAll(".chakra-button")
    buttons.forEach(button => {
      if (button.children.length > 0) return
      const content = button.innerHTML
      const p = document.createElement("p")
      p.innerHTML = content
      button.innerHTML = ""
      button.appendChild(p)
    })
    setReady(true)
  }, [])

  function handleMouse() {
    const p = button.current.querySelector("p")
    gsap.fromTo(
      p,
      { y: 5, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: "sine.inOut" }
    )
  }

  return (
    <ChakraButton
      ref={button}
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      {...props}
    >
      {children}
    </ChakraButton>
  )
}

export default Button
