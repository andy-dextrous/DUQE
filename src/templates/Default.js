import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import SectionWrapper from "../components/SectionWrapper"
import Hero from "../sections/shared/Hero"
import Content from "../sections/shared/Content"
import { useVariable } from "../hooks"

function Default(props) {
  console.log(props)
  const { data } = props
  const { newsletterOffset } = useVariable()
  return (
    <Layout>
      <Seo props={props} />
      <Hero
        title={data.wpPage.title}
        bgImage={data.wpPage.featuredImage.node}
      />
      <SectionWrapper
        className="light"
        containerSize="lg"
        mb={newsletterOffset}
      >
        <Content content={data.wpPage.content} />
      </SectionWrapper>
    </Layout>
  )
}

export default Default

export const pageQuery = graphql`
  query GET_DEFAULT_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
