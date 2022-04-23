import React from "react"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"
import { Seo } from "../components/seo/components/index"
import PostGrid from "../sections/shared/PostGrid"
import HeroSmallColor from "../sections/shared/HeroSmallColor"

function Archive(props) {
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
      />
    </Layout>
  )
}

export default Archive

const pageQuery = graphql`
  query CAT_PAGE_QUERY($skip: Int!, $limit: Int!, $slug: String!) {
    wpPage(isPostsPage: { eq: true }) {
      title
    }
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
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
