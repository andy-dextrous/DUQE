import React, { useRef, useEffect } from "react"
import { gsap, ScrollTrigger } from "../../gsap"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import SectionWrapper from "../../components/layouts/SectionWrapper"
import { Flex, Text, Box } from "@chakra-ui/react"

export const query = graphql`
  fragment IMAGE_REVEAL_QUERY on WpPage {
    ACF_ImageReveal {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        altText
      }
    }
  }
`

function ImageRight({ data: { image, altText }, theme }) {
  let revealDuration = 1.4
  const imageRevealRef = useRef()
  const imageRef = useRef()

  useEffect(() => {
    if (!ScrollTrigger) return
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    })
    tl.to(imageRevealRef.current, {
      duration: revealDuration,
      width: "0%",
      ease: "Power2.inOut",
    })
    tl.from(
      imageRef.current,
      { scale: 1.6, duration: revealDuration, ease: "Power2.inOut" },
      `-=1.4`
    )
  }, [revealDuration])

  return (
    <SectionWrapper
      minH="unset"
      fullW
      pb={[0, 0, 20]}
      mt={[8, 8, 20, 20, 20, 32]}
      mb={[20, 40, 20, 32, 40, 40]}
      overflow="visible"
      _after={{
        content: "''",
        width: ["90vw"],
        height: ["60vh", "60vh", "100%"],
        bg:
          theme === "green"
            ? "brandGreen.600"
            : theme === "yellow"
            ? "brandYellow.600"
            : theme === "chestnut"
            ? "brandChestnut.400"
            : theme === "blue"
            ? "brandBlue.900"
            : theme === "lightblue"
            ? "brandBlue.400"
            : "brandBlue.900",
        position: "absolute",
        left: "0",
        bottom: "-10%",
        borderBottomRightRadius: ["50", "50", "200"],
        zIndex: "-2",
      }}
    >
      <Flex justify="flex-end" w="full" py={3}>
        <Box
          overflow="hidden"
          width={["90%", "90%", "90%"]}
          h={["60vh", "60vh", "100vh"]}
          zIndex="2"
          borderTopLeftRadius={["50", "50", "200"]}
        >
          {image && (
            <GatsbyImage
              image={getImage(image.localFile.childImageSharp.gatsbyImageData)}
              alt={altText}
              style={{ width: "100%", height: "100%" }}
              objectFit="cover"
              className="image-reveal"
              ref={imageRef}
            />
          )}
        </Box>
        <Text
          as="span"
          w="100%"
          position="absolute"
          h="100%"
          bg="white"
          ref={imageRevealRef}
          zIndex="10"
        ></Text>
      </Flex>
    </SectionWrapper>
  )
}

export default ImageRight
