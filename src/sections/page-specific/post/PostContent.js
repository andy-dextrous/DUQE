import React, { useEffect, useRef } from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import { WidgetsList } from "../../../components/widgets/WidgetsList"
import Author from "../../../components/post/Author"
import { PostEntryContent } from "../../../components/post/PostEntryContent"
import { Stack, VStack, Box, Progress } from "@chakra-ui/react"
import { PrevNextPostNavigation } from "../../../components/post/PrevNextPostNavigation"
import { graphql } from "gatsby"
import { gsap, ScrollTrigger } from "../../../gsap"

function PostContent({ data, ctx }) {
  const { prev, next } = ctx
  const sidebarRef = useRef()
  const containerRef = useRef()
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    if (!ScrollTrigger) return

    const sidebarHeight = sidebarRef.current.getBoundingClientRect().height
    const remainder =
      window.innerHeight - sidebarHeight - 0.15 * window.innerHeight

    const scrollProgress = gsap.to(sidebarRef.current, {
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: sidebarRef.current,
        start: "top 15%",
        endTrigger: containerRef.current,
        end: `bottom ${remainder}px`,
        scrub: true,
        pin: true,
        onUpdate: self => {
          setProgress(self.progress * 100)
        },
      },
    })

    return () => {
      scrollProgress.kill()
    }
  }, [])

  return (
    <SectionWrapper
      className="light"
      containerSize="xl"
      containerStyles={{ py: 0, pb: [20, 20, 32, 48, 60], mb: [0, 0, "224px"] }}
      overflowX="unset"
    >
      <Stack
        direction={["column-reverse", "column-reverse", "row"]}
        spacing={[12, 12, 28]}
        p={0}
        mt={[16, 16, "115px"]}
        position="relative"
        h="100%"
      >
        <Box
          position="relative"
          ref={containerRef}
          display={["none", "none", "block"]}
        >
          <WidgetsList />
          <Author ref={sidebarRef} data={data} progress={progress} />
        </Box>
        <VStack flex="2" align="start" spacing={8} as="article">
          <PostEntryContent data={data.content} />
          <PrevNextPostNavigation prev={prev} next={next} />
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default PostContent

export const query = graphql`
  fragment GET_POST_QUERY on WpPost {
    title
    uri
    slug
    date(formatString: "DD MMMM YYYY")
    excerpt
    content
    seo {
      readingTime
    }
    featuredImage {
      node {
        localFile {
          childImageSharp {
            gatsbyImageData(transformOptions: { cropFocus: CENTER })
          }
        }
      }
    }
    id
    link
    status
    author {
      node {
        avatar {
          default
          extraAttr
          foundAvatar
          height
          rating
          scheme
          size
          url
          width
        }
        email
        description
        databaseId
        firstName
        lastName
        name
        nickname
        uri
      }
    }
    categories {
      nodes {
        termTaxonomyId
        taxonomyName
        posts {
          nodes {
            title
            uri
          }
        }
        name
        uri
      }
    }
    modified
    tags {
      nodes {
        uri
        name
        link
      }
    }
  }
`
