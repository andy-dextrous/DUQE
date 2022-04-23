import React from "react"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import { Box, Container, Heading, VStack } from "@chakra-ui/react"
import YoutubeCard from "../../../components/cards/YoutubeCard"

function VideoArchive(props) {
  const { allYoutubeVideo, changeVideo } = props

  console.log(props)
  return (
    <SectionWrapper minH="auto">
      <Container h="100%" maxW={["container.lg", "container.xl"]}>
        <VStack spacing={3} mb={12} align="start">
          <Heading as="h3" pb={4} fontSize={["xl", "xl", "2xl", "3xl", "3xl"]}>
            Videos
          </Heading>
        </VStack>

        <VStack align="flex-start" spacing={24}>
          {allYoutubeVideo.edges.map((video, i) => {
            if (i > 4) {
              return (
                <Box
                  h={{ base: "70vh", "2xl": "70vh" }}
                  width={{
                    base: "100%",
                  }}
                  key={i}
                >
                  <YoutubeCard
                    onClick={() =>
                      changeVideo(video.node.videoId, allYoutubeVideo.edges)
                    }
                    data={video.node}
                  />
                </Box>
              )
            } else {
              return <></>
            }
          })}
        </VStack>
      </Container>
    </SectionWrapper>
  )
}

export default VideoArchive
