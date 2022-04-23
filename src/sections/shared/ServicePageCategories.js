import React from "react"
import { graphql } from "gatsby"
import SectionWrapper from "../../components/layouts/SectionWrapper"
import CardsSlider from "../../components/sliders/CardsSlider"

export const query = graphql`
  fragment GET_CATEGORIES_QUERY on WpPageConnection {
    edges {
      node {
        id
        title
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        uri
        menuOrder
      }
    }
  }
`

function ServiceCategories({
  data: { edges: pages },
  sliderTitle,
  currentUri,
  ...props
}) {
  const servicePages = pages
    .map(page => {
      return {
        title: page.node.title,
        image:
          page.node.featuredImage?.node.localFile.childImageSharp
            .gatsbyImageData,
        excerpt: page.node.excerpt,
        path: page.node.uri,
        menuOrder: page.node.menuOrder,
        uri: page.node.uri,
      }
    })
    .filter(page => page.uri !== currentUri)
    .sort((a, b) => a.menuOrder - b.menuOrder)

  return (
    <SectionWrapper minH="auto" {...props}>
      <CardsSlider
        posts={servicePages}
        sliderTitle={sliderTitle}
        useGatsbyImage
        useCustomControls={false}
        width="100%"
        maxW="100%"
        px={8}
      />
    </SectionWrapper>
  )
}

export default ServiceCategories
