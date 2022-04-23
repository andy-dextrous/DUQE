import React from "react"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"
import { Seo } from "../components/seo/components/index"
import PostGrid from "../sections/shared/PostGrid"

function TagArchive(props) {
  const {
    data: { allWpPost },
    pageContext,
  } = props
  const categories = props.data.allWpCategory.edges
  const { humanPageNumber, numberOfPages } = pageContext

  return (
    <Layout noFooterCTA startDark>
      <Seo props={props} />
      <PostGrid
        posts={allWpPost.nodes}
        currentPage={humanPageNumber}
        numberOfPages={numberOfPages}
        categories={categories}
        currentSlug={pageContext.slug}
      />
    </Layout>
  )
}

export default TagArchive

// export const pageQuery = graphql`
//   query TAG_PAGE_QUERY($skip: Int!, $limit: Int!, $databaseId: Int!) {
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
