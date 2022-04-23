import React, { useRef, useEffect } from "react"
import { gsap, SplitText, ScrollTrigger } from "../gsap"
import { Link } from "gatsby"
import ParsedWpContent from "../utils/ParseWpContent"
import {
  Container,
  VStack,
  Box,
  Button,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react"

function Content({
  theme = "white",
  content = "",
  featuredWord = null,
  width = "lg",
  buttonText = "Learn More",
  link = null,
  top,
}) {
  const splitRef1 = useRef(null)
  const featuredWordRef = useRef()
  const containerRef = useRef()
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])
  const wordSplit = useRef(null)

  useEffect(() => {
    if (ScrollTrigger) {
      if (!wordSplit.current) {
        wordSplit.current = new SplitText(featuredWordRef.current, {
          type: "chars",
          charsClass: "fadeTextCenter",
        })
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featuredWordRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      })

      tl.fromTo(
        wordSplit.current.chars,
        {
          duration: 0.6,
          y: 80,
          autoAlpha: 0,
        },
        {
          ease: "circ.out",
          stagger: 0.06,
          autoAlpha: 1,
          y: 0,
        }
      )

      return () => {
        tl.kill()
      }
    }
  }, [])

  const buttonColor = theme => {
    switch (theme) {
      case "white":
        return "yellow"
      case "blue":
        return "green"
      case "yellow":
        return "dark"
      default:
        return "yellow"
    }
  }

  const fadeTextOpacity = theme => {
    switch (theme) {
      case "white":
        return "0.2"
      case "blue":
        return "0.06"
      case "yellow":
        return "0.25"
      default:
        return "0.1"
    }
  }

  const headingColor = theme => {
    switch (theme) {
      case "white":
        return "0.1"
      case "blue":
        return "brandGreen.500"
      default:
        return "inherit"
    }
  }

  const textColor = theme => {
    switch (theme) {
      case "white":
        return "inherit"
      case "blue":
        return "gray.200"
      default:
        return "inherit"
    }
  }

  return (
    <Container maxW={`container.${width}`} ref={containerRef}>
      {content && (
        <VStack align="start" justify="start" spacing={8}>
          {featuredWord && (
            <Flex
              textStyle="fadeTextCenter"
              color={theme === "white" ? "brandGreen.600" : "brandBlue.100"}
              ref={featuredWordRef}
              opacity={fadeTextOpacity(theme)}
              top={top}
            >
              {featuredWord}
            </Flex>
          )}
          <Box
            className="wsywyg"
            sx={{
              "h1,h2,h3,h4": {
                color: headingColor(theme),
              },
              p: { color: textColor(theme) },
            }}
          >
            <Box>{ParsedWpContent(content)}</Box>
            {link && (
              <Link to={link}>
                <Button variant={buttonColor(theme)} size={buttonSize}>
                  {buttonText}
                </Button>
              </Link>
            )}
          </Box>
        </VStack>
      )}
    </Container>
  )
}

export default Content
