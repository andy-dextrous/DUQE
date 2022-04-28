import React from "react"
import { Layout } from "../components/Layout"
import SectionWrapper from "../components/SectionWrapper"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import Hero from "../sections/shared/Hero"

function Blog(props) {
  return (
    <Layout noFooterCTA startDark>
      <Seo props={props} />
      <Hero />
      <SectionWrapper h="100vh" className="light" />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query BLOG_PAGE_QUERY {
    wpPage(isPostsPage: { eq: true }) {
      title
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
