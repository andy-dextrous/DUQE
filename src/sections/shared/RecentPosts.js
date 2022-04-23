import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionWrapper from "../../components/layouts/SectionWrapper"
import CardsSlider from "../../components/sliders/CardsSlider"

const RECENT_POSTS_QUERY = graphql`
  query GET_RECENT_POSTS {
    allWpPost(limit: 5, sort: { order: DESC, fields: date }) {
      nodes {
        id
        title
        uri
        seo {
          readingTime
        }
        date(formatString: "DD MMMM YYYY")
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        excerpt
      }
    }
  }
`

function RecentPosts() {
  const data = useStaticQuery(RECENT_POSTS_QUERY)
  const { nodes } = data.allWpPost

  const posts = nodes.map(node => {
    return {
      title: node.title,
      published: node.date,
      image: node.featuredImage.node.localFile.childImageSharp.gatsbyImageData,
      id: node.id,
      path: node.uri,
      excerpt: node.excerpt,
      readTime: node.seo.readingTime,
    }
  })

  return (
    <SectionWrapper minH="auto">
      <CardsSlider posts={posts} sliderTitle="Recent Posts" useGatsbyImage />
    </SectionWrapper>
  )
}

export default RecentPosts
