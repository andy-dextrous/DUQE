import React from "react"
import PostContent from "../sections/page-specific/post/PostContent"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"
import { Seo } from "../components/seo/components/index"

function Post(props) {
  const {
    data: { wpPost },
    pageContext,
  } = props

  return (
    <Layout>
      <Seo props={props} />
      <PostContent data={wpPost} ctx={pageContext} />
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query GET_POST($id: String!) {
    wpPost(id: { eq: $id }) {
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
  }
`
