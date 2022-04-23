import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import React, { forwardRef, useEffect, useRef } from "react"
import { gsap } from "../../../gsap"

const Card = forwardRef((props, ref) => {
  const {
    handleClick,
    activePanel,
    id,
    label = { subtitle: "", title: "" },
    data = {
      subtitle: "",
      title: "",
      excerpt: "",
      link: "",
      image: "",
      alt: "",
      position: "center",
      linkText: "Read More",
    },
  } = props
  const { splitText } = gsap.effects
  const animation = useRef(null)
  const title = useRef()
  const link = useRef()
  const subtitle = useRef()
  const excerpt = useRef()
  const titleSplit = useRef()
  const subtitleSplit = useRef()
  const container = useRef()
  const buttonSize = useBreakpointValue(["sm", "sm", "lg"])

  useEffect(() => {
    if (titleSplit.current || subtitleSplit.current) return
    titleSplit.current = splitText(title.current)
    subtitleSplit.current = splitText(subtitle.current)
  }, [splitText])

  useEffect(() => {
    if (animation.current) return
    const tl = gsap.timeline({ paused: true })
    tl.from(
      [
        subtitleSplit.current.lines,
        titleSplit.current.lines,
        excerpt.current,
        link.current,
      ],
      {
        autoAlpha: 0,
        ease: "Power3.in",
        yPercent: 100,
        duration: "0.15",
        stagger: "0.08",
      }
    )
    animation.current = tl
  }, [])

  useEffect(() => {
    if (!animation.current) return
    if (activePanel === id) {
      Array.from(container.current.children).forEach(child => {
        child.classList.remove("hide")
      })
      animation.current.play()
    } else {
      Array.from(container.current.children).forEach(child => {
        child.classList.add("hide")
      })
      animation.current.restart()
      animation.current.pause()
    }
  }, [activePanel, id])

  return (
    <Box
      flex={activePanel === id ? "7" : "1"}
      _hover={{
        flex: activePanel === id ? "7" : "1.1",
        ".overlay": { opacity: [0.5, 0.5, activePanel === id ? "0.6" : 0] },
      }}
      cursor="pointer"
      h="full"
      ref={ref}
      onClick={e => handleClick(e, id)}
      zIndex={2}
      position="relative"
      sx={{
        ".hide": { display: "none" },
        ".rotate": {
          "transform-origin": "center center",
          transform: ["unset", "unset", "rotate(-180deg)"],
        },
        ".vertical-text": {
          "writing-mode": ["unset", "unset", "vertical-rl"],
          "text-orientation": ["unset", "unset", "sideways"],
        },
        ".titleReveal": {
          pb: "3px",
        },
      }}
      borderRight={["unset", "unset", id === 4 ? "none" : "2px solid white"]}
      borderBottom={[
        id === 4 ? "none" : "2px solid white",
        id === 4 ? "none" : "2px solid white",
        "unset",
      ]}
    >
      <Box
        layerStyle="overlay"
        bg={[
          "black",
          "black",
          activePanel === id
            ? "linear-gradient(90deg, rgba(0,0,0,0.8) 0, rgba(0,0,0,0.2) 60%)"
            : "black",
        ]}
        pointerEvents="none"
        className="overlay"
        opacity={["0", "0", "0.6"]}
      />
      <VStack
        align="start"
        layerStyle="fillSpace"
        pl={[8, 8, activePanel === id ? 20 : 0]}
        pr={[8, 8, activePanel === id ? "30%" : 0]}
        spacing={4}
        justify="center"
        ref={container}
      >
        <Box>
          <Heading
            as="h4"
            textStyle="h4"
            fontSize="16px"
            fontWeight="semibold"
            color="white"
            ref={subtitle}
            whiteSpace="nowrap"
          >
            {data.subtitle}
          </Heading>
          <Heading color="white" fontSize={["3xl", "3xl", "5xl"]} ref={title}>
            {data.title}
          </Heading>
        </Box>
        <Text color="white" ref={excerpt}>
          {data.excerpt}
        </Text>
        <Link to={data.link}>
          <Button variant="green" size={buttonSize} ref={link}>
            {data.linkText}
          </Button>
        </Link>
      </VStack>
      <HStack
        className="rotate"
        zIndex={2}
        position="absolute"
        right={["unset", "unset", "10px"]}
        left={["10px", "10px", "unset"]}
        bottom={activePanel === id ? "20px" : "10px"}
        justify="flex-start"
        align="flex-start"
      >
        <Heading
          color="white"
          className="vertical-text"
          fontSize={["2xl", "2xl", "4xl"]}
          display={[
            activePanel === id ? "none" : "block",
            activePanel === id ? "none" : "block",
            "block",
          ]}
        >
          {label.title}
        </Heading>
        <Heading
          as="h4"
          fontSize="14px"
          color="white"
          className="vertical-text"
          display={["none", "none", "block"]}
        >
          {label.subtitle}
        </Heading>
      </HStack>
      <Image
        src={data.image}
        layerStyle="fillSpaceAbsolute"
        objectFit="cover"
        mt="0"
        zIndex="-2"
        objectPosition={data.position}
      />
    </Box>
  )
})

export default Card
