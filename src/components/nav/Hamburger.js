import { Button, Center, Icon } from "@chakra-ui/react"
import React, { useContext, useEffect, useLayoutEffect, useState } from "react"
import { MenuContext } from "../Layout"
import ToggleIcon from "../../assets/icons/MenuToggleIcon"
import { IoMdClose } from "react-icons/io"
import { gsap, ScrollTrigger } from "../../gsap"

function Hamburger() {
  const { setIsMenuOpen, isMenuOpen, isMenuButtonDisabled } =
    useContext(MenuContext)
  const ref = React.useRef()

  const [color, setColor] = useState("white")

  useLayoutEffect(() => {
    const sections = document.querySelectorAll("main section")
    const scrollTriggers = []

    sections.forEach(section => {
      const dimensions = ref.current.getBoundingClientRect()
      const halfHeight = dimensions.top + dimensions.height / 2
      const isLight = section.classList.contains("light")

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: `top ${halfHeight},`,
        end: `top ${halfHeight + 5},`,
        onEnter: () => {
          setColor(isLight ? "black" : "white")
        },
        onEnterBack: self => {
          setColor(
            self.trigger.previousElementSibling.classList.contains("light")
              ? "black"
              : "white"
          )
        },
      })

      scrollTriggers.push(trigger)
    })

    return () => {
      scrollTriggers.forEach(trigger => trigger.kill())
    }
  }, [])

  useEffect(() => {
    gsap.to(ref.current, {
      fill: color,
      duration: 0.4,
      ease: "Power3.out",
    })
  }, [color])

  return (
    <Center zIndex="popover">
      <Button
        className={isMenuOpen ? "active" : ""}
        variant="menuToggle"
        aria-label="Toggle menu"
        ref={ref}
        onClick={() => {
          !isMenuButtonDisabled && setIsMenuOpen(!isMenuOpen)
        }}
      >
        {!isMenuOpen ? (
          <ToggleIcon color={color} />
        ) : (
          <Icon as={IoMdClose} color={color} />
        )}
      </Button>
    </Center>
  )
}

export default Hamburger
