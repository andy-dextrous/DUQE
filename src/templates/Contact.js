import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"

function Contact(props) {
  return (
    <Layout noFooterCTA isDark>
      {/* <Seo props={props} /> */}
      <div>contact</div>
    </Layout>
  )
}

export default Contact

// export const pageQuery = graphql`
//   query GET_CONTACT_PAGE($id: String!) {
//     wpPage(id: { eq: $id }) {
//       ...HERO_SMALL_QUERY
//     }
//   }
// `
