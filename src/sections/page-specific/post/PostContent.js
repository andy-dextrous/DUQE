import React, { useRef } from "react"
import { SmartImage } from "../../../components/SmartImage"
import Breadcrumbs from "../../../components/archive/Breadcrumbs"
import SectionWrapper from "../../../components/SectionWrapper"
import { WidgetsList } from "../../../components/widgets/WidgetsList"
import { SocialShare } from "../../../components/social/SocialShare"
import Author from "../../../components/post/Author"
import { PostEntryTitle } from "../../../components/post/PostEntryTitle"
import { PostEntryExcerpt } from "../../../components/post/PostEntryExcerpt"
import { PublicationDate } from "../../../components/post/PublicationDate"
import { PostEntryContent } from "../../../components/post/PostEntryContent"
import { Stack, VStack, Container } from "@chakra-ui/react"
import { PrevNextPostNavigation } from "../../../components/post/PrevNextPostNavigation"
import { graphql } from "gatsby"

function PostContent({ data, ctx }) {
  const { prev, next } = ctx
  const authorRef = useRef()
  const containerRef = useRef()
  const { seo } = ctx

  return (
    <SectionWrapper
      className="light"
      containerSize="xl"
      containerStyles={{ py: 0, pb: [20, 20, 32, 48, 60] }}
    >
      <Stack
        direction={["column", "column", "row"]}
        wrap="nowrap"
        spacing={28}
        p={0}
        pt={[16, 16, "115px"]}
      >
        <VStack layerStyle="blogSidebar" ref={containerRef}>
          <WidgetsList />
          <Author ref={authorRef} data={data} />
        </VStack>
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
