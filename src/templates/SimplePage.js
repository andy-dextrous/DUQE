import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import Content from "../sections/shared/Content"
import HeroSmall from "../sections/shared/HeroSmall"

function SimplePage(props) {
  const wpPage = props.data.wpPage

  return (
    <Layout noFooterCTA isDark>
      <Seo props={props} />
      <HeroSmall data={wpPage} />
      <Content data={wpPage} />
    </Layout>
  )
}

export default SimplePage

export const pageQuery = graphql`
  query GET_SIMPLE_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      ...HERO_SMALL_QUERY
    }
  }
`
