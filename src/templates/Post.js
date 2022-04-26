import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"

function Post(props) {
  return (
    <Layout>
      {/* <Seo props={props} /> */}
      <div>Post template</div>
    </Layout>
  )
}

export default Post

// const pageQuery = graphql`
//   query GET_POST($id: String!) {
//     wpPost(id: { eq: $id }) {
//       ...GET_POST_QUERY
//     }
//   }
// `
