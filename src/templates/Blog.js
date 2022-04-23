import React from "react"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"
import { Seo } from "../components/seo/components/index"

import HeroColorSlider from "../sections/page-specific/blog/HeroColorSlider"
import FeaturedArticles from "../sections/shared/FeaturedArticles"
import PostGrid from "../sections/shared/PostGrid"
import LatestNews from "../sections/shared/LatestNews"

function Blog(props) {
  const { allWpPost, featuredPosts } = props.data
  const categories = props.data.allWpCategory.edges

  return (
    <Layout noFooterCTA startDark>
      <Seo props={props} />
      <HeroColorSlider />
      <FeaturedArticles posts={featuredPosts.nodes} />
      <PostGrid
        posts={allWpPost.nodes}
        ctx={props.pageContext}
        categories={categories}
      />
      <LatestNews />
    </Layout>
  )
}

export default Blog

const pageQuery = graphql`
  query BLOG_PAGE_QUERY($skip: Int!, $limit: Int!) {
    wpPage(isPostsPage: { eq: true }) {
      title
    }
    allWpPost(limit: $limit, skip: $skip, sort: { order: DESC, fields: date }) {
      ...POSTS_QUERY
    }
    featuredPosts: allWpPost(
      limit: 4
      sort: { order: DESC, fields: date }
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "Featured" } } } }
      }
    ) {
      ...POSTS_QUERY
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
