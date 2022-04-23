import React from "react"
import PostContent from "../sections/page-specific/post/PostContent"
import { Layout } from "../components/Layout"
import RecentPosts from "../sections/shared/RecentPosts"
import { graphql } from "gatsby"
import { Seo } from "../components/seo/components/index"

function Post(props) {
  const {
    data: { wpPost },
    pageContext,
  } = props

  return (
    <Layout noFooterCTA startDark overflowX>
      <Seo props={props} />
      <PostContent data={wpPost} ctx={pageContext} />
      <RecentPosts />
    </Layout>
  )
}

export default Post

const pageQuery = graphql`
  query GET_POST($id: String!) {
    wpPost(id: { eq: $id }) {
      ...GET_POST_QUERY
    }
  }
`
