import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"

import Hero from "../sections/page-specific/youtube/Hero"
import VideoArchive from "../sections/page-specific/youtube/VideoArchive"
import VideoLightbox from "../sections/page-specific/youtube/VideoLightbox"
import { useDisclosure } from "@chakra-ui/react"

function YoutubeArchive(props) {
  const allYoutubeVideo = props.data.allYoutubeVideo
  const [youtubeVideoCurrent, setYoutubeVideoCurrent] = React.useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  function changeVideo(id) {
    const selectedVideo = allYoutubeVideo.edges.filter(
      video => video.node.videoId === id
    )[0]
    const newVideo = {}
    newVideo.url = `https://www.youtube.com/embed/${selectedVideo.node.videoId}?modestbranding=1&rel=0&showinfo=0&controls=0&autoplay=1`
    newVideo.next = selectedVideo.next
    newVideo.previous = selectedVideo.previous
    newVideo.title = selectedVideo.node.title
    newVideo.videoId = selectedVideo.node.videoId
    setYoutubeVideoCurrent(newVideo)
    onOpen()
  }

  return (
    <Layout noFooterCTA mainColor="brandYellow.600">
      <Seo props={props} />
      <Hero
        setYoutubeVideoCurrent={setYoutubeVideoCurrent}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        changeVideo={changeVideo}
        allYoutubeVideo={allYoutubeVideo}
      />
      <VideoLightbox
        youtubeVideoCurrent={youtubeVideoCurrent}
        changeVideo={changeVideo}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        allYoutubeVideo={allYoutubeVideo}
      />
      <VideoArchive
        allYoutubeVideo={allYoutubeVideo}
        changeVideo={changeVideo}
      />
    </Layout>
  )
}

export default YoutubeArchive

const pageQuery = graphql`
  query GET_YOUTUBE_PAGE($id: String!) {
    allYoutubeVideo(sort: { fields: publishedAt, order: DESC }) {
      totalCount
      edges {
        node {
          channelId
          channelTitle
          description
          id
          videoId
          title
          publishedAt(formatString: "DD MMMM YYYY")
          localThumbnail {
            childImageSharp {
              gatsbyImageData
            }
            url
            uid
            publicURL
            name
          }
        }
        next {
          title
          videoId
        }
        previous {
          title
          videoId
        }
      }
    }
    wpPage(id: { eq: $id }) {
      title
      uri
      slug
      content
    }
  }
`
