import React from "react"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"
import { Seo } from "../components/seo/components/index"

import PostGrid from "../sections/shared/PostGrid"
import Hero from "../sections/shared/Hero"

function Blog(props) {
  const { allWpPost } = props.data
  const categories = props.data.allWpCategory.edges

  return (
    <Layout noFooterCTA startDark>
      <Seo props={props} />
      <Hero />

      <PostGrid
        posts={allWpPost.nodes}
        ctx={props.pageContext}
        categories={categories}
      />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query BLOG_PAGE_QUERY($skip: Int!, $limit: Int!) {
    wpPage(isPostsPage: { eq: true }) {
      title
    }
    allWpPost(limit: $limit, skip: $skip, sort: { order: DESC, fields: date }) {
      nodes {
        id
        uri
        slug
        title
        excerpt
        date(formatString: "DD MMMM YYYY")
        seo {
          readingTime
        }
        featuredImage {
          node {
            altText
            databaseId
            localFile {
              childImageSharp {
                gatsbyImageData
                original {
                  height
                  src
                  width
                }
              }
            }
          }
        }
        categories {
          nodes {
            id
            slug
            name
            uri
          }
        }
        template {
          templateName
        }
        author {
          node {
            name
            slug
            uri
            avatar {
              url
            }
          }
        }
        tags {
          nodes {
            name
            slug
            uri
          }
        }
      }
    }
    allWpCategory(filter: { count: { gt: 0 } }) {
      edges {
        node {
          name
          databaseId
          uri
          slug
        }
      }
    }
  }
`
