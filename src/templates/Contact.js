import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import ContactForm from "../sections/page-specific/contact/ContactForm"
import HeroSmall from "../sections/shared/HeroSmall"
import { Seo } from "../components/seo/components/index"

function Contact(props) {
  const wpPage = props.data.wpPage
  const formId = props.pageContext.formId

  return (
    <Layout noFooterCTA isDark>
      <Seo props={props} />
      <HeroSmall data={wpPage} />
      <ContactForm data={formId} />
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query GET_CONTACT_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      ...HERO_SMALL_QUERY
    }
  }
`
