import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"

function Blog(props) {
  return (
    <Layout noFooterCTA startDark>
      <Seo props={props} />
      <div>Blog</div>
    </Layout>
  )
}

export default Blog

// const pageQuery = graphql`
//   query BLOG_PAGE_QUERY($skip: Int!, $limit: Int!) {
//     wpPage(isPostsPage: { eq: true }) {
//       title
//     }
//     allWpPost(limit: $limit, skip: $skip, sort: { order: DESC, fields: date }) {
//       ...POSTS_QUERY
//     }
//     featuredPosts: allWpPost(
//       limit: 4
//       sort: { order: DESC, fields: date }
//       filter: {
//         categories: { nodes: { elemMatch: { name: { eq: "Featured" } } } }
//       }
//     ) {
//       ...POSTS_QUERY
//     }
//     allWpCategory(filter: { count: { gt: 0 } }) {
//       edges {
//         node {
//           name
//           databaseId
//           uri
//           slug
//         }
//       }
//     }
//   }
// `
