import React, { useRef } from "react"
import { Link } from "gatsby"
import { gsap } from "../../gsap"
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
  const throttleX = 0.2
  const throttleY = 0.8

  const onEnter = () => {
    if (!animateOnMobile) return

    gsap.to(image.current, {
      opacity: 0.6,
      duration: 0.2,
    })
  }

  const onMove = ({ clientX, clientY }) => {
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
      // onInterrupt: () => onLeave(),
      duration: 0.7,
    })
  }

  const onLeave = () => {
    if (!animateOnMobile) return
    gsap.to(image.current, {
      x: 0,
      y: 0,
      duration: 0.3,
      delay: 0.2,
      rotate: 0,
      opacity: 0,
    })
  }
  return (
    <VStack
      spacing={4}
      align="start"
      width="100%"
      position="relative"
      onPointerMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
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
        sx={{
          position: "absolute",
          left: "-5%",
          top: "0",
          height: "100%",
          maxWidth: "60%",
          zIndex: "0",
          opacity: !startVisible ? "0" : "0.3",
          filter: "grayscale(100%)",
        }}
        ref={image}
      >
        <GatsbyImage
          image={getImage(
            post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
          )}
          alt={post.featuredImage.node.altText}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>
    </VStack>
  )
}

export default HomeBlogCard
