import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"

function AuthorArchive(props) {
  return (
    <Layout>
      {/* <Seo props={props} /> */}
      <div>category page</div>
    </Layout>
  )
}

export default AuthorArchive

// const pageQuery = graphql`
//   query AUTHOR_PAGE_QUERY($skip: Int!, $limit: Int!, $databaseId: Int!) {
//     wpPage(isPostsPage: { eq: true }) {
//       title
//     }
//     allWpPost(
//       filter: { authorDatabaseId: { eq: $databaseId } }
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
