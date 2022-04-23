import React from "react"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box, Flex } from "@chakra-ui/react"
import { WidgetContainer } from "./WidgetContainer"

const RECENT_POSTS_QUERY = graphql`
  query GetRecentPosts {
    allWpPost(limit: 5, sort: { order: DESC, fields: date }) {
      nodes {
        id
        title
        uri
        date(formatString: "DD MMMM YYYY")

        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 72
                  height: 48
                  quality: 80
                  layout: FIXED
                )
              }
            }
          }
        }
      }
    }
  }
`

export const RecentPosts = () => {
  const data = useStaticQuery(RECENT_POSTS_QUERY)
  const { nodes } = data.allWpPost
  return (
    !!nodes.length && (
      <WidgetContainer
        className="widget widget-recent-posts"
        title="Recent Posts"
      >
        <Box as="ul">
          {nodes.map(post => {
            return (
              <Flex key={post.id} as="li" align="center" mb="4">
                <Box
                  as={GatsbyLink}
                  sx={{
                    "&>*": {
                      verticalAlign: "middle",
                    },
                  }}
                  mr="3"
                  aria-label={`Read more - ${post.title}`}
                  to={post.uri}
                >
                  {post.featuredImage && (
                    <GatsbyImage
                      image={
                        post.featuredImage.node.localFile.childImageSharp
                          ?.gatsbyImageData
                      }
                      alt={post.featuredImage.node.altText}
                      style={{ borderRadius: "2px", overflow: "hidden" }}
                    />
                  )}
                </Box>
                <Box>
                  <Box
                    as={GatsbyLink}
                    className="widget-post-title"
                    textDecoration="none"
                    fontSize="md"
                    fontWeight="md"
                    to={post.uri}
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                  <Box
                    as={GatsbyLink}
                    className="widget-post-date"
                    d="block"
                    to={post.uri}
                  >
                    <Box
                      as="time"
                      textStyle="metaTextSmall"
                      className="entry-date"
                      dateTime={post.date}
                    >
                      {post.date}
                    </Box>
                  </Box>
                </Box>
              </Flex>
            )
          })}
        </Box>
      </WidgetContainer>
    )
  )
}
