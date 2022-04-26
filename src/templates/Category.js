import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"

function Archive(props) {
  return (
    <Layout noFooterCTA startDark>
      {/* <Seo props={props} /> */}
      <div>Category</div>
    </Layout>
  )
}

export default Archive

// const pageQuery = graphql`
//   query CAT_PAGE_QUERY($skip: Int!, $limit: Int!, $slug: String!) {
//     wpPage(isPostsPage: { eq: true }) {
//       title
//     }
//     allWpPost(
//       filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
//       limit: $limit
//       skip: $skip
//     ) {
//       ...POSTS_QUERY
//     }
//     allWpCategory(filter: { count: { gt: 0 } }) {
//       edges {
//         node {
//           name
//           id
//           uri
//           slug
//         }
//       }
//     }
//   }
// `
