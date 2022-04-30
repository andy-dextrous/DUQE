import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"

function Archive(props) {
  return (
    <Layout noFooterCTA startDark>
      <Seo props={props} />
      <div>Category</div>
    </Layout>
  )
}

export default Archive

export const pageQuery = graphql`
  query CAT_PAGE_QUERY($skip: Int!, $limit: Int!, $slug: String!) {
    wpPage(isPostsPage: { eq: true }) {
      title
    }
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      limit: $limit
      skip: $skip
    ) {
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
          id
          uri
          slug
        }
      }
    }
  }
`
