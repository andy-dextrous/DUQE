import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { gsap, ScrollTrigger } from "../../gsap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  Box,
  Button,
  Heading,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"

function HomeBlogCard({ post, startVisible = false }) {
  const animateOnMobile = useBreakpointValue([false, false, true])
  const container = useRef()
  const image = useRef()
  const observer = useRef()
  const throttleX = 0.2
  const throttleY = 0.8

  useEffect(() => {
    if (window && window.innerWidth < 768) return
    const onEnter = () => {
      if (!animateOnMobile) return

      gsap.to(image.current, {
        opacity: 0.3,
        duration: 0.2,
        overwrite: true,
      })
    }

    const move = (clientX, clientY) => {
      if (!animateOnMobile || !image.current) return
      const { x, y, width, height } = image.current?.getBoundingClientRect()

      gsap.to(image.current, {
        x: () => {
          return clientX - x - (width / 2) * throttleX
        },
        y: () => {
          return clientY - y - (height / 2) * throttleY
        },
        rotate: () => {
          return (clientX - x - width / 2) / 100
        },
        ease: "Power3.inOut",
        opacity: 0.3,
        duration: 0.35,
        overwrite: true,
      })
    }

    const onLeave = () => {
      gsap.fromTo(
        image.current,
        { opacity: 0.3 },
        {
          x: 0,
          y: 0,
          duration: 0.3,
          delay: 0.05,
          rotate: 0,
          opacity: 0,
          overwrite: true,
          ease: "back.in",
        }
      )
    }

    observer.current = ScrollTrigger.observe({
      target: container.current,
      type: "pointer",
      debounce: false,
      onHover: () => {
        onEnter()
      },
      onHoverEnd: e => {
        console.log(e)
        onLeave()
      },
      onMove: e => {
        move(e.x, e.y)
      },
    })
    return () => {
      observer.current.kill()
    }
  }, [image.current, animateOnMobile])

  return (
    <VStack
      spacing={4}
      align="start"
      width="100%"
      position="relative"
      ref={container}
    >
      <Text
        color="white"
        fontWeight="bold"
        textTransform="uppercase"
        zIndex="1"
        pointerEvents="none"
      >
        {post.date}
      </Text>
      <Heading
        as="h4"
        color="white"
        textTransform="unset"
        zIndex="1"
        pointerEvents="none"
      >
        {post.title}
      </Heading>
      <Box
        sx={{ p: { color: "white" } }}
        zIndex="1"
        noOfLines="2"
        pointerEvents="none"
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
      <Link to={post.uri}>
        <Button variant="secondary" size="sm">
          Read more
        </Button>
      </Link>
      <Box
        position="absolute"
        left={["unset", "unset", "-5%"]}
        right={[0, 0, "unset"]}
        top="0"
        h="100%"
        w={["100%", "50%", "60%"]}
        maxW={["100%", "100%", "60%"]}
        zIndex="0"
        opacity={[0.3, 0.3, startVisible ? 0.3 : 0]}
        pointerEvents="none"
        filter="grayscale(100%)"
        ref={image}
      >
        <GatsbyImage
          image={getImage(
            post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
          )}
          alt={post.featuredImage.node.altText}
          objectFit="cover"
          imgStyle={{ width: "100%", height: "100%" }}
        />
      </Box>
    </VStack>
  )
}

export default HomeBlogCard
