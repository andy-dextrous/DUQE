import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"

function About(props) {
  return (
    <Layout startDark noFooterCTA darkButton>
      {/* <Seo props={props} /> */}
      <div>About page</div>
    </Layout>
  )
}

export default About

// export const pageQuery = graphql`
//   query GET_ABOUT_PAGE($id: String!) {
//     wpPage(id: { eq: $id }) {
//       content
//       ...HERO_QUERY
//       ...HOW_WE_HELP_QUERY
//     }
//   }
// `
