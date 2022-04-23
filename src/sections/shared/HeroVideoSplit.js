import React, { useRef, useEffect, useState } from "react"
import { gsap } from "../../gsap"
import { Box, Grid, GridItem } from "@chakra-ui/react"

function Hero({ videoSrc }) {
  const containerRef = useRef()
  const videoRef1 = useRef()
  const videoRef2 = useRef()
  const videoRef3 = useRef()
  const videoRef4 = useRef()
  const videoRef5 = useRef()
  const videoRef6 = useRef()
  const [numberOfFinished, setNumberOfFinished] = useState(0)
  const [numberLoaded, setNumberLoaded] = useState(0)
  const videos = [
    videoRef1.current,
    videoRef2.current,
    videoRef3.current,
    videoRef4.current,
    videoRef5.current,
    videoRef6.current,
  ]

  function syncVideos() {
    if (numberOfFinished < videos.length - 1) {
      setNumberOfFinished(numberOfFinished + 1)
    } else {
      videos.forEach(video => {
        video.play()
        setNumberOfFinished(0)
      })
    }
  }

  function startVideosOnLoad() {
    // TODO if it is more performnt, try loading one video and duplicating it across the grid after it laods.
    if (numberLoaded < 1) {
      setNumberLoaded(numberOfFinished + 1)
    } else {
      videos.forEach(video => {
        video.play()
      })
    }
  }

  useEffect(() => {
    gsap.to(".hero__image-cont video", {
      scale: 1.5,
      xPercent: 20,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
      },
    })

    gsap.to(".anim-swipe", {
      yPercent: 300,
      delay: 0.2,
      duration: 3,
      stagger: {
        from: "left",
        each: 0.1,
      },
      ease: "Power3.out",
    })
  }, [])

  return (
    <>
      <Box
        as="section"
        width="100vw"
        position="relative"
        ml={[0, 0, "90px"]}
        pb={0}
        pt={0}
        height="100vh"
        ref={containerRef}
        background="brandBlue.900"
      >
        <Grid
          templateColumns="repeat(6, 1fr)"
          templateRows="auto"
          layerStyle="fillSpace"
          gap={0}
        >
          <GridItem
            h="full"
            overflow="hidden"
            className="hero__image-cont"
            data-speed="0.8"
          >
            <Box position="relative" overflow="hidden" h="full">
              <Box
                as="video"
                muted
                position="absolute"
                className="hero__background"
                maxW="unset"
                left={0}
                top={0}
                width="700%"
                height="100%"
                objectFit="cover"
                ref={videoRef1}
                onCanPlay={() => startVideosOnLoad()}
                onEnded={() => syncVideos()}
              >
                <source src={videoSrc} type="video/mp4" />
              </Box>
              <Box
                className="anim-swipe"
                bg="brandBlue.900"
                width="full"
                position="absolute"
                h="full"
                top="0"
                left="0"
              />
            </Box>
          </GridItem>
          <GridItem h="full" className="hero__image-cont" data-speed="0.85">
            <Box position="relative" overflow="hidden" h="full">
              <Box
                as="video"
                muted
                position="absolute"
                className="hero__background"
                maxW="unset"
                left="-100%"
                top={0}
                width="700%"
                height="100%"
                objectFit="cover"
                ref={videoRef2}
                borderBottomLeftRadius="200px"
                onCanPlay={() => startVideosOnLoad()}
                onEnded={() => syncVideos()}
              >
                <source src={videoSrc} type="video/mp4" />
              </Box>
              <Box
                className="anim-swipe"
                bg="brandBlue.900"
                width="full"
                position="absolute"
                h="full"
                top="0"
                left="0"
              />
            </Box>
          </GridItem>
          <GridItem h="full" className="hero__image-cont" data-speed="0.9">
            <Box
              position="relative"
              overflow="hidden"
              h="full"
              className="hero__image-cont"
            >
              <Box
                as="video"
                muted
                position="absolute"
                className="hero__background"
                maxW="unset"
                left="-200%"
                top={0}
                width="700%"
                height="100%"
                objectFit="cover"
                ref={videoRef3}
                borderBottomLeftRadius="200px"
                onCanPlay={() => startVideosOnLoad()}
                onEnded={() => syncVideos()}
              >
                <source src={videoSrc} type="video/mp4" />
              </Box>
              <Box
                className="anim-swipe"
                bg="brandBlue.900"
                width="full"
                position="absolute"
                h="full"
                top="0"
                left="0"
              />
            </Box>
          </GridItem>
          <GridItem h="full" className="hero__image-cont" data-speed="0.95">
            <Box position="relative" overflow="hidden" h="full">
              <Box
                as="video"
                muted
                position="absolute"
                className="hero__background"
                maxW="unset"
                left="-300%"
                top={0}
                width="700%"
                height="100%"
                objectFit="cover"
                ref={videoRef4}
                borderBottomLeftRadius="200px"
                onCanPlay={() => startVideosOnLoad()}
                onEnded={() => syncVideos()}
              >
                <source src={videoSrc} type="video/mp4" />
              </Box>
              <Box
                className="anim-swipe"
                bg="brandBlue.900"
                width="full"
                position="absolute"
                h="full"
                top="0"
                left="0"
              />
            </Box>
          </GridItem>
          <GridItem h="full" className="hero__image-cont" data-speed="1">
            <Box position="relative" overflow="hidden" h="full">
              <Box
                as="video"
                muted
                position="absolute"
                className="hero__background"
                maxW="unset"
                left="-400%"
                top={0}
                width="700%"
                height="100%"
                objectFit="cover"
                ref={videoRef5}
                onCanPlay={() => startVideosOnLoad()}
                onEnded={() => syncVideos()}
              >
                <source src={videoSrc} type="video/mp4" />
              </Box>
              <Box
                className="anim-swipe"
                bg="brandBlue.900"
                width="full"
                position="absolute"
                h="full"
                top="0"
                left="0"
              />
            </Box>
          </GridItem>
          <GridItem h="full" className="hero__image-cont" data-speed="1.05">
            <Box position="relative" overflow="hidden" h="full">
              <Box
                as="video"
                muted
                position="absolute"
                className="hero__background"
                maxW="unset"
                left="-500%"
                top={0}
                width="700%"
                height="100%"
                objectFit="cover"
                ref={videoRef6}
                onCanPlay={() => startVideosOnLoad()}
                onEnded={() => syncVideos()}
              >
                <source src={videoSrc} type="video/mp4" />
              </Box>
              <Box
                className="anim-swipe"
                bg="brandBlue.900"
                width="full"
                position="absolute"
                h="full"
                top="0"
                left="0"
              />
            </Box>
          </GridItem>
        </Grid>
      </Box>
      {/* <Box id="spacer" h="30vh" w="100%" background="brandBlue.900"></Box> */}
    </>
  )
}

export default Hero
