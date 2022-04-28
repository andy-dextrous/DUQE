import React from "react"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"
import { Seo } from "../components/seo/components/index"
import ContactUs from "../sections/page-specific/contact/ContactUs"
import Hero from "../sections/page-specific/contact/Hero"

function Contact(props) {
  return (
    <Layout noFooterCTA isDark>
      <Seo props={props} />
      <Hero />
      <ContactUs />
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query GET_CONTACT_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
    }
  }
`
