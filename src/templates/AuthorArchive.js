import React from "react"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"
import { Seo } from "../components/seo/components/index"
import PostGrid from "../sections/shared/PostGrid"
import HeroSmallColor from "../sections/shared/HeroSmallColor"

function AuthorArchive(props) {
  const {
    data: { allWpPost },
    pageContext,
  } = props
  const categories = props.data.allWpCategory.edges

  return (
    <Layout noFooterCTA startDark>
      <Seo props={props} />
      <HeroSmallColor title={pageContext.seo.page.title} />
      <PostGrid
        posts={allWpPost.nodes}
        ctx={pageContext}
        categories={categories}
        currentSlug={pageContext.slug}
        title={null}
      />
    </Layout>
  )
}

export default AuthorArchive

const pageQuery = graphql`
  query AUTHOR_PAGE_QUERY($skip: Int!, $limit: Int!, $databaseId: Int!) {
    wpPage(isPostsPage: { eq: true }) {
      title
    }
    allWpPost(
      filter: { authorDatabaseId: { eq: $databaseId } }
      limit: $limit
      skip: $skip
    ) {
      ...POSTS_QUERY
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
